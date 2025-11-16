# ALX Listing App

A scaffolded Next.js + TypeScript + TailwindCSS project for **ALX Listing App – Milestone 1**.  
This milestone sets up a **Pages Router** Next.js app with reusable components and a clean folder structure.

---

## Project Overview

The ALX Listing App aims to create a modern Airbnb clone listing page.  
Milestone 1 focuses on:

- Scaffolding the Next.js project with TypeScript.
- Adding TailwindCSS for responsive styling.
- Creating reusable components (`Card` and `Button`).
- Setting up TypeScript interfaces for type safety.
- Organizing assets in `public/assets`.
- Following industry-standard project structure for scalability.

---

## Project Structure

alx-listing-app/
├─ pages/
│ ├─ \_app.tsx
│ └─ index.tsx
├─ components/
│ └─ common/
│ ├─ Card.tsx
│ └─ Button.tsx
├─ interfaces/
│ └─ index.ts
├─ constants/
│ └─ index.ts
├─ public/assets/
│ └─ placeholder.jpg
├─ styles/
│ └─ globals.css
├─ tailwind.config.js
├─ README.md
└─ package.json

**Explanation of key directories:**

- `pages/` – Next.js pages, including `_app.tsx` for global styles.
- `components/common/` – Reusable UI components like `Card` and `Button`.
- `interfaces/` – TypeScript interfaces (`CardProps`, `ButtonProps`).
- `constants/` – Shared constants and sample data.
- `public/assets/` – Images and SVGs used in components.
- `styles/globals.css` – Tailwind imports and global styles.

---

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

npm run dev

3. **Open the app in your browser:**

http://localhost:3000
