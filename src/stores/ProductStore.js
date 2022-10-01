import { defineStore } from "pinia";
import products from "@/data/products.json";

const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products,
    };
  },
});

export default useProductStore;
