'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, CartItem, WishlistItem, ProductColor } from '@/data/products';

// Cart context types
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface WishlistState {
  items: WishlistItem[];
  itemCount: number;
}

interface ShopContextType {
  cart: CartState;
  wishlist: WishlistState;
  addToCart: (product: Product, size: string, color: ProductColor, quantity?: number) => void;
  removeFromCart: (productId: number, size: string, color: ProductColor) => void;
  updateCartQuantity: (productId: number, size: string, color: ProductColor, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  isInCart: (productId: number, size?: string, color?: ProductColor) => boolean;
  getCartItemQuantity: (productId: number, size: string, color: ProductColor) => number;
}

// Action types
type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size: string; color: ProductColor; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number; size: string; color: ProductColor } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; size: string; color: ProductColor; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

type WishlistAction =
  | { type: 'ADD_TO_WISHLIST'; payload: number }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'LOAD_WISHLIST'; payload: WishlistItem[] };

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, size, color, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => 
          item.product.id === product.id && 
          item.size === size && 
          item.color.name === color.name
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { product, size, color, quantity }];
      }

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_FROM_CART': {
      const { productId, size, color } = action.payload;
      const newItems = state.items.filter(
        item => !(
          item.product.id === productId && 
          item.size === size && 
          item.color.name === color.name
        )
      );

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, size, color, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { 
          type: 'REMOVE_FROM_CART', 
          payload: { productId, size, color } 
        });
      }

      const newItems = state.items.map(item => 
        item.product.id === productId && 
        item.size === size && 
        item.color.name === color.name
          ? { ...item, quantity }
          : item
      );

      const total = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    case 'LOAD_CART': {
      const items = action.payload;
      const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      return { items, total, itemCount };
    }

    default:
      return state;
  }
};

// Wishlist reducer
const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const productId = action.payload;
      if (state.items.find(item => item.productId === productId)) {
        return state; // Already in wishlist
      }
      const newItems = [...state.items, { productId, addedAt: new Date() }];
      return { items: newItems, itemCount: newItems.length };
    }

    case 'REMOVE_FROM_WISHLIST': {
      const productId = action.payload;
      const newItems = state.items.filter(item => item.productId !== productId);
      return { items: newItems, itemCount: newItems.length };
    }

    case 'LOAD_WISHLIST': {
      const items = action.payload;
      return { items, itemCount: items.length };
    }

    default:
      return state;
  }
};

// Create context
const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Initial states
const initialCartState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const initialWishlistState: WishlistState = {
  items: [],
  itemCount: 0,
};

// Provider component
export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, initialCartState);
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, initialWishlistState);

  // Load data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('jatoll-cart');
      const savedWishlist = localStorage.getItem('jatoll-wishlist');

      if (savedCart) {
        try {
          const cartData = JSON.parse(savedCart);
          dispatchCart({ type: 'LOAD_CART', payload: cartData });
        } catch (error) {
          console.error('Error loading cart from localStorage:', error);
        }
      }

      if (savedWishlist) {
        try {
          const wishlistData = JSON.parse(savedWishlist);
          dispatchWishlist({ type: 'LOAD_WISHLIST', payload: wishlistData });
        } catch (error) {
          console.error('Error loading wishlist from localStorage:', error);
        }
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jatoll-cart', JSON.stringify(cart.items));
    }
  }, [cart.items]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jatoll-wishlist', JSON.stringify(wishlist.items));
    }
  }, [wishlist.items]);

  // Cart functions
  const addToCart = (product: Product, size: string, color: ProductColor, quantity: number = 1) => {
    dispatchCart({
      type: 'ADD_TO_CART',
      payload: { product, size, color, quantity }
    });
  };

  const removeFromCart = (productId: number, size: string, color: ProductColor) => {
    dispatchCart({
      type: 'REMOVE_FROM_CART',
      payload: { productId, size, color }
    });
  };

  const updateCartQuantity = (productId: number, size: string, color: ProductColor, quantity: number) => {
    dispatchCart({
      type: 'UPDATE_QUANTITY',
      payload: { productId, size, color, quantity }
    });
  };

  const clearCart = () => {
    dispatchCart({ type: 'CLEAR_CART' });
  };

  // Wishlist functions
  const addToWishlist = (productId: number) => {
    dispatchWishlist({
      type: 'ADD_TO_WISHLIST',
      payload: productId
    });
  };

  const removeFromWishlist = (productId: number) => {
    dispatchWishlist({
      type: 'REMOVE_FROM_WISHLIST',
      payload: productId
    });
  };

  // Helper functions
  const isInWishlist = (productId: number): boolean => {
    return wishlist.items.some(item => item.productId === productId);
  };

  const isInCart = (productId: number, size?: string, color?: ProductColor): boolean => {
    if (!size || !color) {
      return cart.items.some(item => item.product.id === productId);
    }
    return cart.items.some(item => 
      item.product.id === productId && 
      item.size === size && 
      item.color.name === color.name
    );
  };

  const getCartItemQuantity = (productId: number, size: string, color: ProductColor): number => {
    const item = cart.items.find(item => 
      item.product.id === productId && 
      item.size === size && 
      item.color.name === color.name
    );
    return item ? item.quantity : 0;
  };

  const value: ShopContextType = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    isInCart,
    getCartItemQuantity,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

// Hook to use the shop context
export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
