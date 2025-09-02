import { PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

// Generate static params for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail() {
  return <ProductDetailClient />;
}
