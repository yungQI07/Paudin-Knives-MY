# Manual Export Checklist

If you can't download the export file, copy these files/folders manually:

## 📋 Files to Copy (In Order)

### 1. Root Configuration Files
- [ ] `package.json` - Dependencies list
- [ ] `pnpm-lock.yaml` - Lock file
- [ ] `vite.config.ts` - Vite configuration
- [ ] `postcss.config.mjs` - PostCSS config
- [ ] `index.html` - HTML entry point (NEW - I created this)
- [ ] `.gitignore` - Git ignore rules
- [ ] `README.md` - Setup instructions
- [ ] `.env.example` - Environment template

### 2. Source Code (src/ folder)
Copy the entire `src/` folder with all subfolders:
- [ ] `src/main.tsx` - App entry point (NEW - I created this)
- [ ] `src/app/` - All app code
  - [ ] `src/app/App.tsx`
  - [ ] `src/app/Root.tsx`
  - [ ] `src/app/routes.tsx`
  - [ ] `src/app/components/` - All component files
    - Navigation.tsx
    - LoginModal.tsx
    - ShoppingCartModal.tsx
    - Hero.tsx
    - etc.
  - [ ] `src/app/pages/` - All page files
    - Home.tsx
    - Shop.tsx
    - ProductDetail.tsx
    - OurStory.tsx
    - etc.
- [ ] `src/styles/` - CSS files
  - theme.css
  - fonts.css
- [ ] `src/imports/` - Images and assets
- [ ] `src/utils/` - Utility files
  - shopify.ts (Shopify integration)

### 3. Optional (If using backend)
- [ ] `supabase/` folder - Backend functions
- [ ] `utils/` folder in root - Additional utilities

## ⚠️ DO NOT Copy These
- ❌ `node_modules/` - Will regenerate
- ❌ `.figma/` - Figma Make specific
- ❌ `__figma__entrypoint__.ts` - Figma Make specific
- ❌ `ATTRIBUTIONS.md` - Figma Make specific
- ❌ `default_shadcn_theme.css` - May be Figma specific
- ❌ `.env` - Contains secrets, use .env.example

## 📝 After Copying

1. Create a new folder on your computer: `master-knives-website`
2. Copy all checked items above into this folder
3. Create a `.env` file from `.env.example` with your Shopify credentials
4. Run:
   ```bash
   npm install
   npm run dev
   ```

## 🆘 Quick Verification

After copying, your folder structure should look like:
```
master-knives-website/
├── src/
│   ├── main.tsx
│   ├── app/
│   ├── styles/
│   ├── imports/
│   └── utils/
├── package.json
├── index.html
├── vite.config.ts
├── .env
└── README.md
```
