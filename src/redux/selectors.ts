import { RootState } from "./types";

export const getCounter = (state: RootState) => state.counter;

export const getProducts = (state: RootState) => state.products;
