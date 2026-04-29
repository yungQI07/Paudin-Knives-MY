# Master Knives E-Commerce Website

Premium chef knives e-commerce website built with React, TypeScript, Tailwind CSS, and integrated with Shopify Storefront API.

## 🚀 Quick Start (After Export from Figma Make)

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory:
```bash
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_api_token
```

### 3. Run Development Server
```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or
pnpm build
```

## 📦 What's Included

- ✅ Full e-commerce storefront
- ✅ Product catalog with filtering and pagination
- ✅ Shopping cart with live preview
- ✅ Product detail pages
- ✅ Shopify integration (products, checkout)
- ✅ User authentication modal
- ✅ Responsive design
- ✅ Multiple collection support (Ultra Dark, Cloud Premium, Agate)

## 🛠 Tech Stack

- **Framework:** React 18 + TypeScript
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **E-commerce:** Shopify Storefront API
- **Build Tool:** Vite
- **Notifications:** Sonner (toast notifications)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/         # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── LoginModal.tsx
│   │   └── ShoppingCartModal.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── OurStory.tsx
│   │   └── ...
│   ├── App.tsx            # Main app component
│   ├── Root.tsx           # Root layout with cart state
│   └── routes.tsx         # Route configuration
├── styles/                # Global styles
├── utils/                 # Utility functions
│   └── shopify.ts        # Shopify API integration
└── main.tsx              # App entry point
```

## 🚢 Deploy to Production

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables (Shopify credentials)
5. Deploy!

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your GitHub repository
4. Add environment variables
5. Deploy!

### Option 3: Any hosting with Node.js
1. Run `npm run build`
2. Deploy the `dist/` folder to your hosting

## 🔑 Getting Shopify Credentials

1. Log in to your Shopify Admin
2. Go to **Settings** → **Apps and sales channels** → **Develop apps**
3. Create a new app (or use existing)
4. Configure **Storefront API scopes**
5. Install the app and copy:
   - Store domain: `your-store.myshopify.com`
   - Storefront API access token

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SHOPIFY_STORE_DOMAIN` | Your Shopify store domain | Yes |
| `VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Shopify Storefront API token | Yes |

## 🎨 Customization

### Adding Products
Products are automatically fetched from your Shopify store. Manage them in Shopify Admin.

### Styling
- Global styles: `src/styles/theme.css`
- Tailwind config: Uses Tailwind v4 (inline config via `@theme` in CSS)

### Collections
Update collection filters in `src/app/pages/Shop.tsx`

## 📄 License

Private - Master Knives © 2026

## 🆘 Support

For issues or questions, contact: malaysia@paudinpro.com
