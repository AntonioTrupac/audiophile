import { useCartStore } from "~/store/cart";
import { useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  total?: number;
}

interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Item {
  quantity: number;
  subTotal: number;
}

const useItemCount = (item: Item) => {
  const [count, setCount] = useState(0);
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const store = useCartStore();

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setCartItem({
        ...item,
        subTotal: item.price * newCount,
        quantity: newCount,
      });
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      if (newCount > 0) {
        setCartItem({
          ...item,
          subTotal: item.price * newCount,
          quantity: newCount,
        });
      } else {
        setCartItem(null);
      }
      return newCount;
    });
  };

  const handleCart = () => {
    if (cartItem) {
      store.addItem(cartItem);
      setCount(0);
    }
  };

  return {
    count,
    cartItem,
    handleIncrement,
    handleDecrement,
    handleCart,
  };
};

export default useItemCount;
