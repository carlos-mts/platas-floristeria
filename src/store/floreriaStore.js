import { create } from "zustand";
import { existingProducts } from './mockData.js';

export const useFloreriaStore = create((set) => ({
  products: existingProducts,
  updateProduct: (updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    })),
  deleteProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  addProduct: (newProduct) =>
    set((state) => ({
      products: [...state.products, newProduct],
    })),
}));
