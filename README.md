# Sirens Fortune - Underwater Casino Adventure

A beautiful underwater-themed casino website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌊 Immersive underwater theme with animated elements
- 📱 Fully responsive design for all devices
- 🎰 Casino-themed pages (Home, Bonuses, Payments, Rules, Contact)
- 💳 Stripe crypto onramp integration for deposits
- 📞 Facebook integration for customer support
- ⚡ Fast and modern tech stack

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: Express.js (for Stripe integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. For Stripe crypto functionality, start the backend server:
   ```bash
   cd server && npm install && npm run dev
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── config/             # Configuration files
└── main.tsx           # App entry point

server/                 # Backend API for Stripe integration
├── server.js          # Express server
└── package.json       # Backend dependencies
```

## Deployment

The project is configured for deployment on Bolt Hosting and includes:
- Production build optimization
- Environment variable configuration
- Static asset handling

## Contact & Support

- Facebook: [Sirens Fortune](https://www.facebook.com/sirens2fortune/)
- Messenger: [Direct Message](https://m.me/sirens2fortune)

## License

© 2025 Sirens Fortune. All rights reserved.