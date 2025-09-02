const fs = require('fs');

// Read the products file
let content = fs.readFileSync('./src/data/products.ts', 'utf8');

// Define replacement mapping for remaining images
const imageReplacements = {
  'images: ["/products/tank-dress-1.jpg", "/products/tank-dress-1-back.jpg"]': `images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/denim-jacket-1.jpg", "/products/denim-jacket-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/sweat-shorts-1.jpg", "/products/sweat-shorts-1-side.jpg"]': `images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/socks-1.jpg", "/products/socks-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1586890470618-d14a8ce7d2bb?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/puffer-vest-1.jpg", "/products/puffer-vest-1-back.jpg"]': `images: [
      "https://images.unsplash.com/photo-1559093768-711b2bd54d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/face-mask-1.jpg", "/products/face-mask-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/beanie-1.jpg", "/products/beanie-1-logo.jpg"]': `images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/yoga-pants-1.jpg", "/products/yoga-pants-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/utility-belt-1.jpg", "/products/utility-belt-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/running-tights-1.jpg", "/products/running-tights-1-side.jpg"]': `images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/bucket-hat-1.jpg", "/products/bucket-hat-1-side.jpg"]': `images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/crossbody-bag-1.jpg", "/products/crossbody-bag-1-open.jpg"]': `images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/swim-shorts-1.jpg", "/products/swim-shorts-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/water-bottle-1.jpg", "/products/water-bottle-1-logo.jpg"]': `images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/bikini-set-1.jpg", "/products/bikini-set-1-back.jpg"]': `images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506629905607-0e50f17e6bf6?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/baseball-cap-1.jpg", "/products/baseball-cap-1-back.jpg"]': `images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/ankle-socks-1.jpg", "/products/ankle-socks-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1586890470618-d14a8ce7d2bb?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/mesh-tank-1.jpg", "/products/mesh-tank-1-back.jpg"]': `images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/backpack-1.jpg", "/products/backpack-1-open.jpg"]': `images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/headband-1.jpg", "/products/headband-1-detail.jpg"]': `images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/wristbands-1.jpg", "/products/wristbands-1-pair.jpg"]': `images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500&h=600&fit=crop&crop=center"
    ]`,
  
  'images: ["/products/gym-towel-1.jpg", "/products/gym-towel-1-folded.jpg"]': `images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=500&h=600&fit=crop&crop=center"
    ]`
};

// Apply all replacements
for (const [oldText, newText] of Object.entries(imageReplacements)) {
  content = content.replace(new RegExp(oldText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newText);
}

// Write the updated content back
fs.writeFileSync('./src/data/products.ts', content);

console.log('All product images updated successfully!');
