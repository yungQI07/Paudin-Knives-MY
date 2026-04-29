# How to Export Your Figma Make Project

## Files/Folders to Export (Copy These)

### ✅ MUST COPY:
- `src/` - All your app code (pages, components, styles)
- `package.json` - Dependencies list
- `pnpm-lock.yaml` or `package-lock.json` - Lock file
- `vite.config.ts` - Build configuration
- `postcss.config.mjs` - CSS processing
- `.env.example` - Template for environment variables
- `tsconfig.json` (if exists) - TypeScript config

### ✅ COPY IF YOU USE THEM:
- `supabase/` - Only if you're using the backend features
- `utils/` - Utility files including Shopify integration
- Any image files in `src/imports/`

### ❌ DON'T COPY (Figma Make specific):
- `__figma__entrypoint__.ts` - Figma Make specific
- `.figma/` folder - Figma Make internal
- `node_modules/` - Will be regenerated
- `ATTRIBUTIONS.md` - Figma Make specific
- `default_shadcn_theme.css` - May be Figma Make specific

## After Export Setup

### 1. Create new folder on your computer
```bash
mkdir master-knives-website
cd master-knives-website
```

### 2. Copy all the files from the ✅ MUST COPY list

### 3. Create your `.env` file
Copy `.env.example` to `.env` and add your Shopify credentials:
```
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
```

### 4. Install dependencies
```bash
npm install
# or
pnpm install
```

### 5. Create a custom entrypoint (instead of __figma__entrypoint__.ts)

Create `index.html` in your project root:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Master Knives</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Create `src/main.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './app/routes';
import './styles/theme.css';
import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### 6. Update package.json scripts (if needed)
Make sure you have these scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### 7. Run locally
```bash
npm run dev
```

### 8. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/master-knives.git
git push -u origin main
```

### 9. Deploy to Vercel/Netlify
- Go to vercel.com or netlify.com
- Click "Import Project"
- Connect your GitHub repo
- Add environment variables (your Shopify credentials)
- Deploy!

## Important Notes
- The site will work exactly the same outside Figma Make
- Make sure to add your `.env` file with Shopify credentials
- Test locally before deploying
- Your Shopify integration will work seamlessly
