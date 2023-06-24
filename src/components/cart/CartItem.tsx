import { CartItem } from "~/store/cart";

interface CartItemProps {
  item: CartItem;
  // item: CartItem & {
  //   image: {
  //     url: string;
  //   };
  // };
  quantity: number;
  total: number;
  clearCart: () => void;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="mb-4 flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        {/*<img*/}
        {/*  src={item.image.url}*/}
        {/*  alt={item.name}*/}
        {/*  className="h-16 w-16 rounded-md object-cover"*/}
        {/*/>*/}
        <div>
          <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">
            {item.quantity} x ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
