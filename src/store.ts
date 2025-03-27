import axios from "axios";
import { create } from "zustand";
import { ProductStore } from "./types";
export const useMyProductStore = create<ProductStore>((set) => ({
  productsData: [],
  cart: [],
  loading: false,

  fetchProducts: () => {
    set({ loading: true });
    axios
      .get("https://nt.softly.uz/api/front/products?page=1&limit=10")
      .then((res) => {
        console.log(res.data);
        set({ productsData: res.data.items, loading: false });
      })
      .catch(() => {
        set({ loading: false });
      });
  },
  addToCart: (product) => {
    set((item) => ({
      cart: [...item.cart, product],
    }));
  },
}));
