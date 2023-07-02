import { CartItem } from "~/store/cart";
import { trimProductName } from "~/utils/helpers";
import Image from "next/image";
import { Minus, Plus } from "~/components";
import React from "react";

interface CartItemProps {
  item: CartItem;
  quantity: number;
  total: number;
  clearCart: () => void;
}

const CartItem = ({ item }: CartItemProps) => {
  const itemName = trimProductName(item.name);

  return (
    <div className="mb-4 flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-md"
        />

        <div>
          <h3 className="text-sm font-medium text-gray-800">{itemName}</h3>
          <p className="text-sm text-gray-500">${item.price}</p>
        </div>
      </div>

      <div className="flex h-[32px] w-[96px] items-center justify-center bg-grayish p-4">
        <button
          onClick={() => console.log("decrement")}
          aria-label="decrement"
          className="flex border-none bg-transparent px-0 py-0 text-black/25 hover:opacity-80 active:opacity-80"
        >
          <Minus />
        </button>

        <span className="min-w-5 mx-6 my-0 flex items-center justify-center text-[13px] font-semibold leading-[18px]">
          {item.quantity}
        </span>

        <button
          onClick={() => console.log("increment")}
          aria-label="increment"
          className="flex border-none bg-transparent px-0 py-0 text-black/25 hover:opacity-80 active:opacity-80"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
