import { type CartItem } from "~/store/cart";
import Image from "next/image";
import React from "react";
import { trimProductName } from "~/utils/helpers";
import { Button } from "~/components/buttons";

const CheckoutPaymentDetails = ({
  items,
  total,
}: {
  items: CartItem[];
  total: number;
}) => {
  return (
    <div className="mt-10 mb-20 flex h-fit flex-col rounded-lg bg-white p-8 lg:w-[350px]">
      <h2 className="text-left text-lg font-bold">Summary</h2>

      <div className="mt-8">
        {items.map((item) => {
          const itemName = trimProductName(item.name);

          return (
            <div
              key={item.id}
              className="mb-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md"
                />

                <div>
                  <h3 className="text-sm font-medium text-gray-800">
                    {itemName}
                  </h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              <p className="text-gray-400">x{item.quantity}</p>
            </div>
          );
        })}
      </div>

      <div>
        <div className="">
          <p>Total</p>
          <p>${total}</p>
        </div>

        <Button type="submit" className="mt-8">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPaymentDetails;
