import { Cart, ListProductSearchQuery, Product } from './types';

export type Endpoints = {
  createCart(): Promise<Cart>;
  listProducts(query?: ListProductSearchQuery): Promise<Product[]>;
  productDetails(id: string): Promise<Product>;
};
