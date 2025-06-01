import { Product, ProductStatus } from '../models/product';
import { ProductCatalogueState } from 'app/content/product-catalogue/store/product-catalogue.store';
import { Banner } from 'app/shared/banner/models/banner';

export function mockProductCatalogueState(): ProductCatalogueState {
  return {
    products: mockProducts,
    loadingProducts: false,
    banner: mockBanner,
    loadingBanner: false
  };
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Mock Game 1',
    price: 19.99,
    discount: 50,
    imageSrc: 'mock_image_1.png',
    status: ProductStatus.NOT_OWNED
  },
  {
    id: 2,
    name: 'Mock Game 2',
    price: 29.99,
    discount: 0,
    imageSrc: 'mock_image_2.png',
    status: ProductStatus.OWNED
  },
  {
    id: 3,
    name: 'Mock Game 3',
    price: 9.99,
    discount: 10,
    imageSrc: 'mock_image_2.png',
    status: ProductStatus.IN_CART
  }
];

export const mockBanner: Banner = {
  title: 'Mock Banner',
  imageSrc: 'mock_banner.png',
  info: 'Mock info'
};
