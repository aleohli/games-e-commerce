import { CartState } from 'app/core/store/cart/cart.reducer';
import { Product } from 'app/core/models/product';

export function mockCartState(override: Partial<CartState> = {}): CartState {
  return {
    cart: mockCart,
    totalPrice: 20,
    amount: 3,
    ...override
  };
}

export const mockCart: Product[] = [
  {
    id: 1,
    name: 'Mock Game 1',
    price: 19.99,
    imageSrc: 'mock_image_1.png'
  },
  {
    id: 2,
    name: 'Mock Game 2',
    price: 29.99,
    imageSrc: 'mock_image_2.png'
  },
  {
    id: 3,
    name: 'Mock Game 3',
    price: 9.99,
    imageSrc: 'mock_image_2.png'
  }
];
