export interface Product {
  id: number;
  name: string;
  discount: number;
  price: number;
  status: ProductStatus;
  imageSrc: string;
}

export enum ProductStatus {
  OWNED = 'OWNED',
  NOT_OWNED = 'NOT OWNED',
  IN_CART = 'IN CART'
}
