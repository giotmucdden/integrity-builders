# Integrity Builders Website

A professional construction company website built with React, Vite, and Tailwind CSS.

## Features

- 🏗️ Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Brand colors with green/black theme
- 📅 Interactive booking calendar
- 🖼️ Auto-scrolling photo gallery
- ✨ Smooth animations and transitions

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Server**: Express.js
- **Build**: Vite 7
- **Styling**: Tailwind CSS with custom design system

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── client/
│   └── src/
│       ├── components/
│       │   ├── sections/     # Page sections (Hero, Services, etc.)
│       │   └── ui/           # Reusable UI components
│       ├── config/           # Constants and configuration
│       ├── contexts/         # React contexts
│       ├── hooks/            # Custom React hooks
│       └── pages/            # Page components
├── server/
│   └── index.ts              # Express server
└── shared/                   # Shared utilities
```

## Deployment

This project is configured for deployment on Railway.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

## License

MIT
