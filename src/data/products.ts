// Database of clothing items with full product information
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'unisex';
  type: 'sportswear' | 'casual' | 'accessories';
  collection: 'neon-athletics' | 'cyber-casual' | 'electric-essentials' | 'signature';
  sizes: string[];
  colors: ProductColor[];
  images: string[];
  features: string[];
  material: string;
  care: string[];
  isNew: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  stock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface ProductColor {
  name: string;
  hex: string;
  class: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: ProductColor;
  quantity: number;
}

export interface WishlistItem {
  productId: number;
  addedAt: Date;
}

export interface Review {
  id: number;
  productId: number;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
}

// Color definitions
export const PRODUCT_COLORS: Record<string, ProductColor> = {
  neonGreen: { name: 'Neon Green', hex: '#39FF14', class: 'bg-[#39FF14]' },
  neonBlue: { name: 'Neon Blue', hex: '#00F0FF', class: 'bg-[#00F0FF]' },
  neonPink: { name: 'Neon Pink', hex: '#FF2079', class: 'bg-[#FF2079]' },
  neonOrange: { name: 'Neon Orange', hex: '#FF6600', class: 'bg-[#FF6600]' },
  neonYellow: { name: 'Neon Yellow', hex: '#FFFF00', class: 'bg-[#FFFF00]' },
  black: { name: 'Matte Black', hex: '#0A0A0A', class: 'bg-[#0A0A0A]' },
  white: { name: 'Clean White', hex: '#FFFFFF', class: 'bg-white' },
  darkGray: { name: 'Dark Gray', hex: '#2D2D2D', class: 'bg-[#2D2D2D]' },
  charcoal: { name: 'Charcoal', hex: '#36454F', class: 'bg-[#36454F]' },
};

// Complete product database - 40+ items
export const PRODUCTS: Product[] = [
  // NEON ATHLETICS COLLECTION - SPORTSWEAR
  {
    id: 1,
    name: "NEON STRIKE PERFORMANCE HOODIE",
    slug: "neon-strike-performance-hoodie",
    description: "Premium performance hoodie with moisture-wicking technology and signature neon accents. Perfect for high-intensity workouts and street wear.",
    price: 89,
    originalPrice: 120,
    category: "unisex",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.black],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Moisture-wicking fabric", "Reflective neon details", "Kangaroo pocket", "Adjustable hood"],
    material: "85% Polyester, 15% Spandex",
    care: ["Machine wash cold", "Tumble dry low", "Do not iron directly on prints"],
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    stock: 25,
    rating: 4.8,
    reviewCount: 124,
    tags: ["performance", "hoodie", "athletic", "neon"]
  },
  {
    id: 2,
    name: "CYBER FLEX TRAINING JOGGERS",
    slug: "cyber-flex-training-joggers",
    description: "Ultra-flexible joggers designed for maximum mobility during training sessions. Features neon side stripes and tapered fit.",
    price: 65,
    category: "men",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["4-way stretch fabric", "Neon side panels", "Zippered pockets", "Elastic waistband"],
    material: "90% Polyester, 10% Elastane",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    stock: 18,
    rating: 4.6,
    reviewCount: 89,
    tags: ["joggers", "training", "flexible", "athletic"]
  },
  {
    id: 3,
    name: "ELECTRIC PULSE SPORTS BRA",
    slug: "electric-pulse-sports-bra",
    description: "High-support sports bra with electric neon detailing. Engineered for maximum comfort during intense workouts.",
    price: 55,
    category: "women",
    type: "sportswear",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.black],
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["High support", "Removable padding", "Moisture-wicking", "Neon mesh panels"],
    material: "88% Nylon, 12% Spandex",
    care: ["Hand wash recommended", "Air dry only"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 32,
    rating: 4.9,
    reviewCount: 156,
    tags: ["sports bra", "high support", "athletic", "women"]
  },
  {
    id: 4,
    name: "GLOW RUNNER PERFORMANCE SHORTS",
    slug: "glow-runner-performance-shorts",
    description: "Lightweight running shorts with built-in compression and reflective neon strips for night visibility.",
    price: 38,
    category: "unisex",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Built-in compression", "Reflective strips", "Side pockets", "Quick-dry fabric"],
    material: "92% Polyester, 8% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 45,
    rating: 4.7,
    reviewCount: 78,
    tags: ["shorts", "running", "performance", "reflective"]
  },
  {
    id: 5,
    name: "QUANTUM COMPRESSION TANK",
    slug: "quantum-compression-tank",
    description: "Compression tank top with strategic mesh ventilation and bold neon quantum pattern design.",
    price: 42,
    category: "men",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Compression fit", "Mesh ventilation", "Quantum pattern", "Flat-seam construction"],
    material: "85% Polyester, 15% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 28,
    rating: 4.5,
    reviewCount: 67,
    tags: ["tank top", "compression", "athletic", "ventilation"]
  },

  // CYBER CASUAL COLLECTION
  {
    id: 6,
    name: "NEON WAVE OVERSIZED JACKET",
    slug: "neon-wave-oversized-jacket",
    description: "Statement oversized jacket featuring flowing neon wave graphics and premium urban styling.",
    price: 125,
    originalPrice: 160,
    category: "unisex",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Oversized fit", "Neon wave graphics", "Multiple pockets", "Premium cotton blend"],
    material: "70% Cotton, 30% Polyester",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    stock: 15,
    rating: 4.8,
    reviewCount: 92,
    tags: ["jacket", "oversized", "casual", "statement"]
  },
  {
    id: 7,
    name: "ELECTRIC PULSE GRAPHIC TEE",
    slug: "electric-pulse-graphic-tee",
    description: "Bold graphic tee with electric pulse design and premium cotton construction for everyday comfort.",
    price: 35,
    category: "unisex",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.white, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Premium cotton", "Electric pulse graphic", "Comfort fit", "Pre-shrunk"],
    material: "100% Premium Cotton",
    care: ["Machine wash cold", "Tumble dry medium"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 58,
    rating: 4.6,
    reviewCount: 143,
    tags: ["t-shirt", "graphic", "casual", "cotton"]
  },
  {
    id: 8,
    name: "CYBER GRID BOMBER JACKET",
    slug: "cyber-grid-bomber-jacket",
    description: "Futuristic bomber jacket with cyber grid pattern and neon accent zippers.",
    price: 98,
    category: "unisex",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.charcoal, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1559093768-711b2bd54d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Cyber grid pattern", "Neon zippers", "Ribbed cuffs", "Lightweight design"],
    material: "100% Polyester with mesh lining",
    care: ["Dry clean recommended", "Cool iron if needed"],
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    stock: 22,
    rating: 4.7,
    reviewCount: 76,
    tags: ["bomber", "jacket", "cyber", "futuristic"]
  },
  {
    id: 9,
    name: "NEON STRIPE CARGO PANTS",
    slug: "neon-stripe-cargo-pants",
    description: "Urban cargo pants with neon side stripes and multiple utility pockets for street style.",
    price: 78,
    category: "unisex",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray, PRODUCT_COLORS.charcoal],
    images: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Multiple pockets", "Neon side stripes", "Adjustable waist", "Tapered fit"],
    material: "98% Cotton, 2% Elastane",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 31,
    rating: 4.4,
    reviewCount: 58,
    tags: ["cargo pants", "utility", "street style", "pockets"]
  },
  {
    id: 10,
    name: "QUANTUM MESH LONG SLEEVE",
    slug: "quantum-mesh-long-sleeve",
    description: "Technical long sleeve with quantum mesh panels and moisture-wicking properties.",
    price: 52,
    category: "unisex",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Mesh panels", "Moisture-wicking", "Quantum design", "Thumbhole cuffs"],
    material: "88% Polyester, 12% Spandex",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 36,
    rating: 4.5,
    reviewCount: 41,
    tags: ["long sleeve", "mesh", "technical", "moisture-wicking"]
  },

  // ELECTRIC ESSENTIALS COLLECTION
  {
    id: 11,
    name: "SIGNATURE ELECTRIC HOODIE",
    slug: "signature-electric-hoodie",
    description: "Our signature hoodie with electric threading and premium fleece interior.",
    price: 75,
    category: "unisex",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Electric threading", "Premium fleece", "Kangaroo pocket", "Ribbed cuffs"],
    material: "80% Cotton, 20% Polyester",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    stock: 42,
    rating: 4.9,
    reviewCount: 187,
    tags: ["hoodie", "signature", "electric", "essential"]
  },
  {
    id: 12,
    name: "GLOW TRACK SUIT SET",
    slug: "glow-track-suit-set",
    description: "Complete track suit set with glow-in-the-dark neon accents and matching jacket and pants.",
    price: 145,
    originalPrice: 180,
    category: "unisex",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Glow-in-the-dark accents", "Matching set", "Zip-up jacket", "Elastic waist pants"],
    material: "92% Polyester, 8% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    stock: 19,
    rating: 4.8,
    reviewCount: 73,
    tags: ["tracksuit", "set", "glow", "matching"]
  },
  {
    id: 13,
    name: "NEON FLASH CROP TOP",
    slug: "neon-flash-crop-top",
    description: "Trendy crop top with neon flash design perfect for workouts or casual wear.",
    price: 28,
    category: "women",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonYellow],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Crop design", "Neon flash graphic", "Soft fabric", "Form-fitting"],
    material: "95% Cotton, 5% Elastane",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 47,
    rating: 4.3,
    reviewCount: 94,
    tags: ["crop top", "women", "flash", "casual"]
  },
  {
    id: 14,
    name: "CYBER PUNK LEGGINGS",
    slug: "cyber-punk-leggings",
    description: "High-waisted leggings with cyber punk pattern and compression technology.",
    price: 48,
    category: "women",
    type: "sportswear",
    collection: "cyber-casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["High-waisted", "Cyber punk pattern", "Compression fit", "Squat-proof"],
    material: "87% Nylon, 13% Spandex",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 39,
    rating: 4.6,
    reviewCount: 112,
    tags: ["leggings", "cyber punk", "compression", "high-waisted"]
  },
  {
    id: 15,
    name: "ELECTRIC STORM WINDBREAKER",
    slug: "electric-storm-windbreaker",
    description: "Lightweight windbreaker with electric storm pattern and water-resistant coating.",
    price: 68,
    category: "unisex",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1559093768-711b2bd54d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Water-resistant", "Electric storm pattern", "Lightweight", "Packable hood"],
    material: "100% Nylon with DWR coating",
    care: ["Machine wash cold", "Air dry only"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 33,
    rating: 4.4,
    reviewCount: 56,
    tags: ["windbreaker", "water-resistant", "storm", "lightweight"]
  },

  // ACCESSORIES AND MORE ITEMS
  {
    id: 16,
    name: "NEON GLOW SNAPBACK HAT",
    slug: "neon-glow-snapback-hat",
    description: "Premium snapback hat with embroidered neon glow logo and adjustable fit.",
    price: 32,
    category: "unisex",
    type: "accessories",
    collection: "signature",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray, PRODUCT_COLORS.white],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Embroidered logo", "Adjustable snapback", "Flat brim", "Premium construction"],
    material: "100% Cotton twill",
    care: ["Spot clean only", "Air dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 67,
    rating: 4.7,
    reviewCount: 89,
    tags: ["hat", "snapback", "accessories", "logo"]
  },
  {
    id: 17,
    name: "ELECTRIC PULSE WORKOUT SET",
    slug: "electric-pulse-workout-set",
    description: "Complete workout set including sports bra and matching shorts with electric pulse design.",
    price: 65,
    originalPrice: 85,
    category: "women",
    type: "sportswear",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.black],
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Matching set", "Sports bra included", "High-waisted shorts", "Pulse design"],
    material: "88% Nylon, 12% Spandex",
    care: ["Hand wash recommended", "Air dry only"],
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    stock: 26,
    rating: 4.8,
    reviewCount: 134,
    tags: ["workout set", "matching", "sports bra", "shorts"]
  },
  {
    id: 18,
    name: "CYBER TECH COMPRESSION SHIRT",
    slug: "cyber-tech-compression-shirt",
    description: "Advanced compression shirt with cyber tech pattern and cooling technology.",
    price: 56,
    category: "men",
    type: "sportswear",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Compression technology", "Cooling fabric", "Cyber tech pattern", "Flat-seam construction"],
    material: "90% Polyester, 10% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 34,
    rating: 4.5,
    reviewCount: 67,
    tags: ["compression", "cooling", "tech", "men"]
  },
  {
    id: 19,
    name: "NEON STRIPE ATHLETIC SKIRT",
    slug: "neon-stripe-athletic-skirt",
    description: "Athletic skirt with built-in shorts and neon side stripes for active lifestyle.",
    price: 42,
    category: "women",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Built-in shorts", "Neon side stripes", "Moisture-wicking", "Comfortable waistband"],
    material: "85% Polyester, 15% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 41,
    rating: 4.6,
    reviewCount: 78,
    tags: ["skirt", "athletic", "built-in shorts", "stripes"]
  },
  {
    id: 20,
    name: "GLOW TRAINING GLOVES",
    slug: "glow-training-gloves",
    description: "Premium training gloves with glow-in-the-dark accents and superior grip.",
    price: 24,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Glow-in-the-dark", "Superior grip", "Breathable mesh", "Adjustable wrist strap"],
    material: "Synthetic leather palm, mesh back",
    care: ["Hand wash only", "Air dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 52,
    rating: 4.4,
    reviewCount: 93,
    tags: ["gloves", "training", "glow", "grip"]
  },

  // Additional 20+ items to reach 40+ total
  {
    id: 21,
    name: "ELECTRIC MESH TANK DRESS",
    slug: "electric-mesh-tank-dress",
    description: "Trendy tank dress with electric mesh overlay and comfortable fit.",
    price: 58,
    category: "women",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Mesh overlay", "Tank design", "Comfortable fit", "Electric pattern"],
    material: "95% Viscose, 5% Elastane",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 29,
    rating: 4.3,
    reviewCount: 46,
    tags: ["dress", "tank", "mesh", "electric"]
  },
  {
    id: 22,
    name: "CYBER PUNK DENIM JACKET",
    slug: "cyber-punk-denim-jacket",
    description: "Customized denim jacket with cyber punk patches and neon threading details.",
    price: 115,
    originalPrice: 145,
    category: "unisex",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Cyber punk patches", "Neon threading", "Classic denim", "Multiple pockets"],
    material: "100% Cotton denim",
    care: ["Machine wash cold", "Tumble dry medium"],
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    stock: 17,
    rating: 4.7,
    reviewCount: 82,
    tags: ["denim", "jacket", "cyber punk", "patches"]
  },
  {
    id: 23,
    name: "NEON FLASH SWEAT SHORTS",
    slug: "neon-flash-sweat-shorts",
    description: "Comfortable sweat shorts with neon flash detailing and drawstring waist.",
    price: 36,
    category: "unisex",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Drawstring waist", "Neon flash details", "Side pockets", "Comfortable fit"],
    material: "80% Cotton, 20% Polyester",
    care: ["Machine wash warm", "Tumble dry medium"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 48,
    rating: 4.2,
    reviewCount: 61,
    tags: ["sweat shorts", "flash", "comfortable", "drawstring"]
  },
  {
    id: 24,
    name: "QUANTUM PERFORMANCE SOCKS",
    slug: "quantum-performance-socks",
    description: "High-performance athletic socks with quantum pattern and moisture-wicking technology.",
    price: 18,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1586890470618-d14a8ce7d2bb?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Moisture-wicking", "Quantum pattern", "Cushioned sole", "Arch support"],
    material: "75% Polyester, 20% Cotton, 5% Elastane",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 75,
    rating: 4.5,
    reviewCount: 127,
    tags: ["socks", "performance", "quantum", "moisture-wicking"]
  },
  {
    id: 25,
    name: "ELECTRIC STORM PUFFER VEST",
    slug: "electric-storm-puffer-vest",
    description: "Insulated puffer vest with electric storm pattern and packable design.",
    price: 78,
    category: "unisex",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonOrange, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1559093768-711b2bd54d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Insulated design", "Electric storm pattern", "Packable", "Side pockets"],
    material: "100% Nylon with down fill",
    care: ["Dry clean recommended", "Professional cleaning preferred"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 23,
    rating: 4.6,
    reviewCount: 54,
    tags: ["vest", "puffer", "insulated", "storm"]
  },
  
  // Continue with more items...
  {
    id: 26,
    name: "CYBER GLOW FACE MASK",
    slug: "cyber-glow-face-mask",
    description: "Reusable face mask with cyber glow pattern and comfortable ear loops.",
    price: 15,
    category: "unisex",
    type: "accessories",
    collection: "signature",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Reusable", "Cyber glow pattern", "Comfortable fit", "Adjustable ear loops"],
    material: "100% Cotton with filter pocket",
    care: ["Machine wash hot", "Tumble dry high"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 89,
    rating: 4.1,
    reviewCount: 156,
    tags: ["face mask", "cyber", "glow", "reusable"]
  },
  {
    id: 27,
    name: "NEON STRIKE BEANIE",
    slug: "neon-strike-beanie",
    description: "Warm knit beanie with neon strike logo and comfortable fit.",
    price: 22,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Knit construction", "Neon strike logo", "Warm material", "Fold-up design"],
    material: "100% Acrylic knit",
    care: ["Hand wash cold", "Lay flat to dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 64,
    rating: 4.4,
    reviewCount: 87,
    tags: ["beanie", "knit", "warm", "logo"]
  },
  {
    id: 28,
    name: "ELECTRIC PULSE YOGA PANTS",
    slug: "electric-pulse-yoga-pants",
    description: "High-waisted yoga pants with electric pulse side panels and four-way stretch.",
    price: 54,
    category: "women",
    type: "sportswear",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["High-waisted", "Four-way stretch", "Electric pulse panels", "Yoga-specific design"],
    material: "87% Nylon, 13% Spandex",
    care: ["Machine wash cold", "Hang dry recommended"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 37,
    rating: 4.7,
    reviewCount: 98,
    tags: ["yoga pants", "high-waisted", "stretch", "pulse"]
  },
  {
    id: 29,
    name: "CYBER TECH UTILITY BELT",
    slug: "cyber-tech-utility-belt",
    description: "Futuristic utility belt with multiple compartments and neon accent buckle.",
    price: 45,
    category: "unisex",
    type: "accessories",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Multiple compartments", "Neon accent buckle", "Adjustable sizing", "Cyber tech design"],
    material: "Synthetic leather with metal hardware",
    care: ["Wipe clean only", "Avoid water exposure"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 31,
    rating: 4.3,
    reviewCount: 42,
    tags: ["belt", "utility", "cyber tech", "accessories"]
  },
  {
    id: 30,
    name: "GLOW RUNNER RUNNING TIGHTS",
    slug: "glow-runner-running-tights",
    description: "Compression running tights with glow runner reflective strips and phone pocket.",
    price: 62,
    category: "unisex",
    type: "sportswear",
    collection: "neon-athletics",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Compression fit", "Reflective strips", "Phone pocket", "Moisture-wicking"],
    material: "88% Polyester, 12% Spandex",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 44,
    rating: 4.8,
    reviewCount: 73,
    tags: ["running tights", "compression", "reflective", "phone pocket"]
  },

  // Final items to complete 40+ products
  {
    id: 31,
    name: "NEON FLASH BUCKET HAT",
    slug: "neon-flash-bucket-hat",
    description: "Trendy bucket hat with neon flash pattern and UV protection.",
    price: 28,
    category: "unisex",
    type: "accessories",
    collection: "electric-essentials",
    sizes: ["S/M", "L/XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.white, PRODUCT_COLORS.neonYellow],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["UV protection", "Neon flash pattern", "Adjustable chin strap", "Lightweight"],
    material: "100% Cotton canvas",
    care: ["Hand wash cold", "Air dry only"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 55,
    rating: 4.2,
    reviewCount: 68,
    tags: ["bucket hat", "UV protection", "flash", "trendy"]
  },
  {
    id: 32,
    name: "ELECTRIC STORM CROSS BODY BAG",
    slug: "electric-storm-cross-body-bag",
    description: "Compact cross body bag with electric storm pattern and multiple compartments.",
    price: 38,
    category: "unisex",
    type: "accessories",
    collection: "electric-essentials",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Multiple compartments", "Adjustable strap", "Electric storm pattern", "Water-resistant"],
    material: "100% Nylon with water-resistant coating",
    care: ["Spot clean only", "Air dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 41,
    rating: 4.5,
    reviewCount: 79,
    tags: ["bag", "cross body", "storm", "compartments"]
  },
  {
    id: 33,
    name: "CYBER GLOW SWIM SHORTS",
    slug: "cyber-glow-swim-shorts",
    description: "Quick-dry swim shorts with cyber glow pattern and mesh lining.",
    price: 44,
    category: "men",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Quick-dry fabric", "Cyber glow pattern", "Mesh lining", "Drawstring waist"],
    material: "100% Polyester with mesh lining",
    care: ["Machine wash cold", "Tumble dry low"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 32,
    rating: 4.4,
    reviewCount: 56,
    tags: ["swim shorts", "quick-dry", "cyber glow", "mesh"]
  },
  {
    id: 34,
    name: "NEON ATHLETICS WATER BOTTLE",
    slug: "neon-athletics-water-bottle",
    description: "Insulated stainless steel water bottle with neon athletics logo.",
    price: 26,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Insulated design", "Stainless steel", "Leak-proof cap", "24oz capacity"],
    material: "Stainless steel with powder coating",
    care: ["Hand wash recommended", "Not dishwasher safe"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 72,
    rating: 4.6,
    reviewCount: 91,
    tags: ["water bottle", "insulated", "stainless steel", "athletics"]
  },
  {
    id: 35,
    name: "ELECTRIC PULSE BIKINI SET",
    slug: "electric-pulse-bikini-set",
    description: "Two-piece bikini set with electric pulse pattern and removable padding.",
    price: 52,
    category: "women",
    type: "casual",
    collection: "electric-essentials",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.black],
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Two-piece set", "Electric pulse pattern", "Removable padding", "Adjustable straps"],
    material: "82% Nylon, 18% Spandex",
    care: ["Hand wash cold", "Air dry only"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 28,
    rating: 4.3,
    reviewCount: 47,
    tags: ["bikini", "two-piece", "pulse", "swimwear"]
  },
  {
    id: 36,
    name: "QUANTUM MESH BASEBALL CAP",
    slug: "quantum-mesh-baseball-cap",
    description: "Breathable baseball cap with quantum mesh panels and adjustable back.",
    price: 30,
    category: "unisex",
    type: "accessories",
    collection: "cyber-casual",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Mesh panels", "Quantum pattern", "Adjustable back", "Curved brim"],
    material: "Cotton front, mesh back",
    care: ["Hand wash cold", "Air dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 58,
    rating: 4.5,
    reviewCount: 83,
    tags: ["baseball cap", "mesh", "quantum", "breathable"]
  },
  {
    id: 37,
    name: "GLOW STRIKE ANKLE SOCKS",
    slug: "glow-strike-ankle-socks",
    description: "Ankle-height performance socks with glow strike pattern and cushioned heel.",
    price: 16,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.white, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1586890470618-d14a8ce7d2bb?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Ankle height", "Glow strike pattern", "Cushioned heel", "Breathable fabric"],
    material: "75% Cotton, 20% Polyester, 5% Elastane",
    care: ["Machine wash warm", "Tumble dry medium"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 84,
    rating: 4.3,
    reviewCount: 112,
    tags: ["ankle socks", "glow strike", "cushioned", "performance"]
  },
  {
    id: 38,
    name: "CYBER PUNK MESH TANK",
    slug: "cyber-punk-mesh-tank",
    description: "Edgy mesh tank top with cyber punk graphics and loose fit.",
    price: 39,
    category: "women",
    type: "casual",
    collection: "cyber-casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Mesh construction", "Cyber punk graphics", "Loose fit", "Layering piece"],
    material: "100% Polyester mesh",
    care: ["Hand wash cold", "Hang dry"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 35,
    rating: 4.2,
    reviewCount: 64,
    tags: ["mesh tank", "cyber punk", "loose fit", "women"]
  },
  {
    id: 39,
    name: "ELECTRIC STORM BACKPACK",
    slug: "electric-storm-backpack",
    description: "Large capacity backpack with electric storm pattern and laptop compartment.",
    price: 75,
    originalPrice: 95,
    category: "unisex",
    type: "accessories",
    collection: "electric-essentials",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.darkGray],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Large capacity", "Laptop compartment", "Electric storm pattern", "Padded straps"],
    material: "600D Polyester with reinforced bottom",
    care: ["Spot clean only", "Air dry"],
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    stock: 21,
    rating: 4.7,
    reviewCount: 89,
    tags: ["backpack", "laptop", "storm", "large capacity"]
  },
  {
    id: 40,
    name: "NEON GLOW PERFORMANCE HEADBAND",
    slug: "neon-glow-performance-headband",
    description: "Moisture-wicking headband with neon glow accents for active lifestyle.",
    price: 14,
    category: "unisex",
    type: "accessories",
    collection: "neon-athletics",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonGreen, PRODUCT_COLORS.neonPink],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Moisture-wicking", "Neon glow accents", "Comfortable fit", "Non-slip design"],
    material: "90% Polyester, 10% Spandex",
    care: ["Machine wash cold", "Air dry"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 67,
    rating: 4.4,
    reviewCount: 95,
    tags: ["headband", "moisture-wicking", "neon glow", "performance"]
  },
  {
    id: 41,
    name: "QUANTUM ENERGY WRISTBANDS",
    slug: "quantum-energy-wristbands",
    description: "Set of 2 performance wristbands with quantum energy pattern and sweat absorption.",
    price: 12,
    category: "unisex",
    type: "accessories",
    collection: "cyber-casual",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonBlue, PRODUCT_COLORS.neonGreen],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Set of 2", "Sweat absorption", "Quantum energy pattern", "Comfortable elastic"],
    material: "80% Cotton, 20% Elastane",
    care: ["Machine wash warm", "Tumble dry low"],
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    stock: 93,
    rating: 4.1,
    reviewCount: 156,
    tags: ["wristbands", "set", "sweat absorption", "quantum"]
  },
  {
    id: 42,
    name: "ELECTRIC PULSE GYM TOWEL",
    slug: "electric-pulse-gym-towel",
    description: "Quick-dry gym towel with electric pulse design and antimicrobial treatment.",
    price: 20,
    category: "unisex",
    type: "accessories",
    collection: "electric-essentials",
    sizes: ["One Size"],
    colors: [PRODUCT_COLORS.black, PRODUCT_COLORS.neonPink, PRODUCT_COLORS.neonBlue],
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ],
    features: ["Quick-dry fabric", "Antimicrobial treatment", "Electric pulse design", "Compact size"],
    material: "100% Microfiber",
    care: ["Machine wash warm", "Tumble dry low"],
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    stock: 76,
    rating: 4.5,
    reviewCount: 87,
    tags: ["gym towel", "quick-dry", "antimicrobial", "pulse"]
  }
];

// Helper functions for product management
export const getProductById = (id: number): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return PRODUCTS.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return PRODUCTS;
  if (category === 'new') return PRODUCTS.filter(product => product.isNew);
  return PRODUCTS.filter(product => 
    product.category === category || product.type === category
  );
};

export const getProductsByCollection = (collection: string): Product[] => {
  return PRODUCTS.filter(product => product.collection === collection);
};

export const getFeaturedProducts = (): Product[] => {
  return PRODUCTS.filter(product => product.isFeatured);
};

export const getOnSaleProducts = (): Product[] => {
  return PRODUCTS.filter(product => product.isOnSale);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'newest':
      return sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    case 'popular':
      return sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    default:
      return sortedProducts.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }
};
