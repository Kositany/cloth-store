# Jatoll Jatizi - Premium Sportswear & Casual Clothing Store

A modern, full-featured e-commerce website for the Jatoll Jatizi clothing brand, built with Next.js 15 and featuring a professional green-blue color scheme, smooth animations, and comprehensive shopping functionality.

## 🚀 Live Demo

**Website**: [https://jatoll-jatizi-store.netlify.app](https://jatoll-jatizi-store.netlify.app) *(Update with your actual Netlify URL)*
**Local Development**: [http://localhost:3000](http://localhost:3000)

## ✨ Features

### E-commerce Features
- **42+ Products**: Complete catalog of athletic wear, casual clothing, and accessories
- **Shopping Cart**: Add, remove, and manage items with localStorage persistence
- **Wishlist**: Save favorite products across sessions
- **Product Filtering**: Filter by category, price range, size, and color
- **Search Functionality**: Find products by name, description, or tags
- **Product Details**: Individual product pages with image galleries and specifications
- **Responsive Design**: Mobile-first approach optimized for all devices

### Design & Aesthetics
- **Professional Color Scheme**: Green-blue theme for better readability and user experience
- **Bold Typography**: Bebas Neue for headers, Inter for body text
- **Smooth Animations**: Framer Motion powered micro-interactions and floating elements
- **High-Quality Images**: Professional clothing photography from Unsplash
- **User-Friendly Interface**: Improved from harsh neon to accessible, readable design

### Pages & Functionality
- **Home Page**: Hero section with floating animations and featured collections
- **Shop Page**: Full product catalog with advanced filtering and sorting
- **Product Pages**: Detailed product information with image galleries and add-to-cart
- **Shopping Cart**: Complete cart management with quantity updates
- **Wishlist**: Save and manage favorite products
- **About Page**: Brand story, values, and company information
- **Contact Page**: Contact form with FAQ section
- **Navigation**: Responsive header with cart and wishlist indicators
- **Footer**: Newsletter signup, social links, and site navigation

### Technical Features
- **Next.js 15**: App Router with SSR for SEO optimization
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS v4**: Custom theme with neon color palette
- **Framer Motion**: Smooth animations and micro-interactions
- **Performance Optimized**: Static generation and optimized builds
- **SEO Ready**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React-based)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Bebas Neue, Inter, Poppins)
- **Build Tool**: Turbopack
- **Deployment Ready**: Vercel optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "React Clothes shop"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Design System

### Color Palette
```css
--neon-green: #39FF14     /* Primary brand color */
--neon-blue: #00F0FF      /* Secondary accent */
--neon-pink: #FF2079      /* Tertiary accent */
--matte-black: #0A0A0A    /* Background */
--white: #FFFFFF          /* Text contrast */
```

### Typography
- **Headers**: Bebas Neue (700 weight)
- **Body**: Inter (400-700 weights)
- **Alternative**: Poppins (400-700 weights)

### Animation Guidelines
- **Hover Effects**: Scale and glow transforms
- **Page Transitions**: Smooth fade-ins with stagger
- **Micro-interactions**: Button presses and form focuses
- **Scroll Animations**: Parallax and slide-in effects

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## 🔧 Configuration

### Tailwind Configuration
Custom theme configuration in `src/app/globals.css`:
- Custom CSS variables for neon colors
- Utility classes for glow effects
- Responsive typography scales

### Next.js Configuration
- Turbopack enabled for fast development
- App Router structure
- TypeScript strict mode
- ESLint configuration

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── shop/              # Shop page
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── FeaturedCollections.tsx
│   └── Footer.tsx        # Footer component
└── public/               # Static assets
```

## 🎯 Performance Optimizations

- **Static Generation**: Pre-rendered pages for faster loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind purging and minification
- **Font Loading**: Optimized Google Fonts loading

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 🔮 Future Enhancements

- **E-commerce Integration**: Stripe/PayPal checkout
- **User Authentication**: Account management
- **Wishlist Feature**: Save favorite items
- **Size Guide**: Interactive fitting tool
- **Reviews System**: Customer feedback
- **Inventory Management**: Real-time stock updates
- **Multi-language Support**: Internationalization
- **Advanced Filters**: Price range, color, size

## 🎨 Brand Guidelines

### Voice & Tone
- **Bold & Confident**: Reflecting the athletic spirit
- **Modern & Edgy**: Appealing to trendsetters
- **Inspiring**: "Fuel Your Hustle" messaging
- **Inclusive**: Welcoming to all athletes and style enthusiasts

### Visual Identity
- **High Contrast**: Black backgrounds with neon accents
- **Clean Lines**: Minimal, focused design
- **Dynamic Elements**: Moving gradients and animations
- **Bold Typography**: Statement-making headlines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern streetwear and athletic brands
- **Typography**: Google Fonts team
- **Animation Library**: Framer Motion
- **Framework**: Next.js team
- **Styling**: Tailwind CSS

---

**Jatoll Jatizi** - Fuel Your Hustle. Wear the Future.

For questions or support, visit our [Contact Page](http://localhost:3000/contact) or email support@jatolljatizi.com
