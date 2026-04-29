import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-4fea3a28/health", (c) => {
  return c.json({ status: "ok" });
});

// Initialize sample products if not exists
async function initializeProducts() {
  const existing = await kv.get("products_initialized");
  if (existing) return;

  const sampleProducts = [
    {
      id: "1",
      name: "Master Chef Gyuto Knife",
      price: 299,
      description: "Professional 8-inch gyuto knife with Damascus steel blade",
      image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800",
      category: "Chef Knives",
      inStock: true
    },
    {
      id: "2",
      name: "Santoku Precision Blade",
      price: 249,
      description: "7-inch santoku knife perfect for vegetables and fish",
      image: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?w=800",
      category: "Chef Knives",
      inStock: true
    },
    {
      id: "3",
      name: "Nakiri Vegetable Knife",
      price: 219,
      description: "Traditional Japanese nakiri for precise vegetable cuts",
      image: "https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=800",
      category: "Specialty Knives",
      inStock: true
    },
    {
      id: "4",
      name: "Petty Utility Knife",
      price: 159,
      description: "Compact 5-inch utility knife for detailed work",
      image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800",
      category: "Utility Knives",
      inStock: true
    }
  ];

  for (const product of sampleProducts) {
    await kv.set(`product:${product.id}`, product);
  }
  await kv.set("products_initialized", true);
}

initializeProducts().catch(console.error);

// Get all products
app.get("/make-server-4fea3a28/products", async (c) => {
  try {
    const products = await kv.getByPrefix("product:");
    return c.json({ products });
  } catch (error) {
    console.log("Error fetching products:", error);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

// Get single product
app.get("/make-server-4fea3a28/products/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const product = await kv.get(`product:${id}`);
    if (!product) {
      return c.json({ error: "Product not found" }, 404);
    }
    return c.json({ product });
  } catch (error) {
    console.log("Error fetching product:", error);
    return c.json({ error: "Failed to fetch product" }, 500);
  }
});

// Create order
app.post("/make-server-4fea3a28/orders", async (c) => {
  try {
    const body = await c.req.json();
    const orderId = `order:${Date.now()}`;
    const order = {
      id: orderId,
      items: body.items,
      total: body.total,
      customerInfo: body.customerInfo,
      createdAt: new Date().toISOString(),
      status: "pending"
    };
    await kv.set(orderId, order);
    return c.json({ success: true, orderId });
  } catch (error) {
    console.log("Error creating order:", error);
    return c.json({ error: "Failed to create order" }, 500);
  }
});

// Submit B2B inquiry
app.post("/make-server-4fea3a28/b2b-inquiry", async (c) => {
  try {
    const body = await c.req.json();
    const inquiryId = `inquiry:${Date.now()}`;
    const inquiry = {
      id: inquiryId,
      company: body.company,
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date().toISOString()
    };
    await kv.set(inquiryId, inquiry);
    return c.json({ success: true });
  } catch (error) {
    console.log("Error submitting B2B inquiry:", error);
    return c.json({ error: "Failed to submit inquiry" }, 500);
  }
});

// Submit contact form
app.post("/make-server-4fea3a28/contact", async (c) => {
  try {
    const body = await c.req.json();
    const contactId = `contact:${Date.now()}`;
    const contact = {
      id: contactId,
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date().toISOString()
    };
    await kv.set(contactId, contact);
    return c.json({ success: true });
  } catch (error) {
    console.log("Error submitting contact form:", error);
    return c.json({ error: "Failed to submit contact form" }, 500);
  }
});

Deno.serve(app.fetch);