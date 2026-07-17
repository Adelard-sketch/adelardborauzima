# Adelard Borauzima - Portfolio Website

A premium, modern portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Cinematic, elegant design with smooth animations
- 🌓 Dark/Light mode support
- 📱 Fully responsive mobile-first design
- ⚡ Lightning-fast performance with Vite
- 🎭 Framer Motion animations
- 📝 Markdown blog rendering
- 🔐 Admin dashboard
- 🎯 SEO-ready structure
- ♿ Accessible UI components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Markdown** - Markdown rendering
- **Lucide Icons** - Icon library

## Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable components
│   │   ├── ui/        # UI components
│   │   ├── layout/    # Layout components
│   │   ├── animations/# Animation components
│   │   ├── blog/      # Blog components
│   │   └── shared/    # Shared components
│   ├── pages/         # Page components
│   ├── layouts/       # Layout wrappers
│   ├── routes/        # Route configuration
│   ├── services/      # API services
│   ├── hooks/         # Custom hooks
│   ├── context/       # React context
│   ├── utils/         # Utility functions
│   ├── types/         # TypeScript types
│   ├── styles/        # Global styles
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Adelard Borauziama
```

## Color Palette

- **Deep Charcoal**: #2C2C2C
- **Black**: #000000
- **Warm Beige**: #F5F1E8
- **Soft Gold**: #D4AF37
- **Emerald**: #10B981

## Pages

- **Home** - Hero section with animated introduction
- **About** - Personal story and values
- **Projects** - Portfolio showcase
- **Blog** - Blog listing and single post view
- **Gallery** - Image gallery with lightbox
- **Speaking** - Speaking engagements and events
- **Contact** - Contact form
- **Admin** - Dashboard for content management

## Development

The project uses:
- ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting (recommended)

## License

© 2024 Adelard Borauziama. All rights reserved.
