# Anu & Ash Official Website

This is the official website for the musical duo Anu & Ash, built with React and Vite.

## Features

- Responsive design for all devices
- Dynamic page routing with React Router
- Animated components with Framer Motion
- Styled with Styled Components
- SEO optimization with React Helmet
- Email subscription and contact forms
- Music streaming integrations
- Social media and video embeds

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/anuandashwebsite.git
cd anuandashwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 to view the site in your browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

The site can be easily deployed to Netlify, Vercel, or any static site hosting service.

### Netlify Deployment

1. Create a Netlify account
2. Connect your GitHub repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

## Content Updates

### Adding New Shows

Update the `mockShowsData` array in the `Shows.jsx` component.

### Adding New Music

Update the `mockAlbums` and `mockSingles` arrays in the `Listen.jsx` component.

## License

This project is the property of Anu & Ash. All rights reserved.
