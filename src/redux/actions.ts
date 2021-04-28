import { Product } from "./types";

export const addToCart = (counter: number) => ({
  type: "addToCart",
  counter
});

export const addProduct = (product: Product) => ({
  type: "addProduct",
  product
});
