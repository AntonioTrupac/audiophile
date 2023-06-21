import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  total: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  quantity: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  quantity: 0,
  addItem: (item) => {
    set((state) => {
      let itemFound = false;

      const items = state.items.map((itemInCart) => {
        if (itemInCart.id === item.id) {
          itemFound = true;
          return {
            ...itemInCart,
            quantity: itemInCart.quantity + item.quantity,
            total: itemInCart.total + item.price * item.quantity,
          };
        }
        return itemInCart;
      });

      if (!itemFound) {
        items.push({ ...item, total: item.price * item.quantity });
      }

      const total = items.reduce((sum, item) => sum + item.total, 0);
      const quantity = items.reduce((sum, item) => sum + item.quantity, 0);

      return {
        items,
        quantity,
        total,
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
          total: state.total - item.total, // subtract item's total (price * quantity)
        };
      }

      return state;
    });
  },
  clearCart: () => {
    set(() => ({
      items: [],
      total: 0,
      quantity: 0,
    }));
  },
}));
