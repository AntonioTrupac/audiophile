import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  subTotal: number;
  quantity: number;
  imageUrl: string;
};

type CartState = {
  items: CartItem[];
  cartTotal: number;
  quantity: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  cartTotal: 0,
  quantity: 0,
  addItem: (item) => {
    set((state) => {
      const items = [...state.items];
      const itemInCart = items.find((i) => i.id === item.id);

      if (itemInCart) {
        itemInCart.quantity += item.quantity;
        itemInCart.subTotal += item.price * item.quantity;
      } else {
        items.push(item);
      }

      const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items,
        quantity,
        cartTotal: state.cartTotal + item.subTotal,
      };
    });
  },
  removeItem: (id) => {
    set((state) => {
      if (!state.items.length) return state;
      const items = [...state.items];
      const index = items.findIndex((i) => i.id === id);

      if (index !== -1) {
        const item = items[index];

        if (!item) {
          console.error("Item not found");
          return state;
        }

        items.splice(index, 1);

        return {
          items,
          quantity: state.quantity - item.quantity,
          cartTotal: state.cartTotal - item.subTotal,
        };
      }

      return state;
    });
  },
  clearCart: () => {
    set(() => ({
      items: [],
      cartTotal: 0,
      quantity: 0,
    }));
  },
}));
