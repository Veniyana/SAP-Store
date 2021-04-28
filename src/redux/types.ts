export type Product = {
  name: string;
  price: number;
  image: string;
};

export type RootState = {
  products: Product[];
  counter: number;
};
