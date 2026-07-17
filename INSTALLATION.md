# Installation Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Quick Start

### 1. Navigate to the client directory
```bash
cd client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the client directory (already created):
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Adelard Borauziama
```

### 4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Features

✅ React 18 with TypeScript
✅ Vite for lightning-fast builds
✅ Tailwind CSS for styling
✅ Framer Motion for animations
✅ React Router for navigation
✅ Dark/Light mode
✅ Responsive design
✅ Blog with Markdown support
✅ Admin dashboard
✅ Form validation with Zod
✅ API integration ready

## Folder Structure

```
client/
├── public/              # Static files
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout wrappers
│   ├── routes/         # Routing configuration
│   ├── services/       # API services
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React Context providers
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   ├── styles/         # Global styles
│   ├── data/           # Sample data
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Next Steps

1. Replace placeholder images with actual images
2. Connect to your backend API
3. Customize content in `/src/data/` files
4. Add your own blog posts in Markdown format
5. Configure authentication for admin panel
6. Deploy to your hosting platform

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### Custom Server
```bash
npm run build
# Serve the dist folder with any static file server
```

## Support

For issues or questions, contact: hello@adelardborauzima.com

---

Built with ❤️ by Adelard Borauziama
