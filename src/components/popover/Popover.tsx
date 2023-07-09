import { forwardRef, useLayoutEffect } from "react";
import { useSetPosition } from "~/hooks";
import { useCartStore } from "~/store/cart";
import { CartItem } from "~/components/cart";
import { Button, LinkButton } from "~/components";

const Popover = forwardRef<HTMLDivElement>((_, ref) => {
  const { setPosition } = useSetPosition(ref);
  const store = useCartStore();

  useLayoutEffect(() => {
    setPosition();
    window.addEventListener("resize", setPosition);

    return () => {
      window.removeEventListener("resize", setPosition);
    };
  }, [ref, setPosition]);

  return (
    <div
      ref={ref}
      className="absolute top-20 right-4 z-40 flex h-[490px] flex-col justify-between rounded-lg bg-white p-8 md:w-[375px]"
    >
      <div>
        <div className="flex justify-between">
          <h1 className="flex text-lg tracking-[1.29px]">
            Cart <ItemCounter count={store.items.length} />
          </h1>
          <button
            onClick={store.clearCart}
            disabled={store.items.length === 0}
            className="text-[15px] font-medium leading-[25px] text-black/50 underline hover:text-primary-hover active:text-primary-hover active:underline disabled:text-black/50 disabled:hover:text-black/50 disabled:active:text-black/50"
          >
            Remove all
          </button>
        </div>

        <div className="mt-8">
          {store.items.length > 0 ? (
            store.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                quantity={store.quantity}
                total={store.cartTotal}
                clearCart={store.clearCart}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>

      <div>
        <p className="flex justify-between uppercase text-black/50">
          Total: <span className="ml-2 text-black/100">${store.cartTotal}</span>
        </p>

        <LinkButton
          href="/checkout"
          isDisabled={store.items.length === 0}
          className="mt-8 w-full"
        >
          Checkout
        </LinkButton>
      </div>
    </div>
  );
});

const ItemCounter = ({ count }: { count: number | null }) => {
  if (!count) return null;

  return <span className="ml-1">({count})</span>;
};

Popover.displayName = "Popover";
export default Popover;
