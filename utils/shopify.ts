import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const storeDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const storefrontAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

const isShopifyConfigured = storeDomain && storefrontAccessToken;

export const shopifyClient = isShopifyConfigured ? createStorefrontApiClient({
  storeDomain,
  apiVersion: '2024-10',
  publicAccessToken: storefrontAccessToken,
}) : null;

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string | null;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        priceV2: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
      };
    }>;
  };
  collections: {
    edges: Array<{
      node: {
        title: string;
      };
    }>;
  };
}

export async function fetchAllProducts() {
  if (!shopifyClient) {
    console.log('Shopify not configured - using fallback products');
    return [];
  }

  const query = `
    query GetProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
            collections(first: 3) {
              edges {
                node {
                  title
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data } = await shopifyClient.request(query, {
      variables: { first: 100 },
    });

    return data?.products?.edges.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error('Error fetching products from Shopify:', error);
    return [];
  }
}

export async function fetchProductByHandle(handle: string) {
  if (!shopifyClient) {
    console.log('Shopify not configured - using fallback product');
    return null;
  }

  const query = `
    query GetProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
              availableForSale
            }
          }
        }
        collections(first: 3) {
          edges {
            node {
              title
            }
          }
        }
      }
    }
  `;

  try {
    const { data } = await shopifyClient.request(query, {
      variables: { handle },
    });

    return data?.product || null;
  } catch (error) {
    console.error('Error fetching product from Shopify:', error);
    return null;
  }
}

export async function createCheckout(lineItems: Array<{ variantId: string; quantity: number }>) {
  if (!shopifyClient) {
    console.log('Shopify not configured - checkout unavailable');
    return null;
  }

  const mutation = `
    mutation CreateCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          message
          field
        }
      }
    }
  `;

  try {
    const { data } = await shopifyClient.request(mutation, {
      variables: {
        input: {
          lineItems,
        },
      },
    });

    if (data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
      console.error('Checkout errors:', data.checkoutCreate.checkoutUserErrors);
      return null;
    }

    return data?.checkoutCreate?.checkout || null;
  } catch (error) {
    console.error('Error creating checkout:', error);
    return null;
  }
}

export function convertShopifyProductToApp(shopifyProduct: ShopifyProduct) {
  const price = parseFloat(shopifyProduct.priceRange.minVariantPrice.amount);
  const images = shopifyProduct.images.edges.map(edge => edge.node.url);
  const collection = shopifyProduct.collections.edges[0]?.node.title || 'All Collections';

  return {
    id: shopifyProduct.handle,
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    image: images[0] || '',
    images: images.length > 0 ? images : [images[0]],
    price: Math.round(price),
    collection,
    handle: shopifyProduct.handle,
    variantId: shopifyProduct.variants.edges[0]?.node.id || '',
  };
}
