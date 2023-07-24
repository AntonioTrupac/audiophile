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
  const shipping = 50;
  const tax = 0.25 * total;
  const grandTotal = total + shipping + tax;

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
        <div className="flex justify-between">
          <p className="text-[15px] text-black/50">Total</p>
          <p className="text-lg font-bold">${total}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[15px] text-black/50">Shipping</p>
          <p className="text-lg font-bold">${shipping}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[15px] text-black/50">VAT</p>
          <p className="text-lg font-bold">${tax}</p>
        </div>

        <div className="mt-4 flex justify-between">
          <p className="text-[15px] text-black/50">Grand Total</p>
          <p className="text-lg text-primary">${grandTotal}</p>
        </div>

        <Button type="submit" className="mt-8 w-full">
          Continue & Pay
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPaymentDetails;
