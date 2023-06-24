import { forwardRef, useLayoutEffect } from "react";
import { useSetPosition } from "~/hooks";
import { useCartStore } from "~/store/cart";
import { CartItem } from "~/components/cart";

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

  const count = 3;

  return (
    <div
      ref={ref}
      className="absolute top-20 right-4 z-40 h-[490px] rounded-lg bg-white p-8 md:w-[375px]"
    >
      <div className="flex justify-between">
        <h1 className="flex text-lg tracking-[1.29px]">
          Cart <ItemCounter count={count} />
        </h1>
        <button className="text-[15px] font-medium leading-[25px] text-black/50 underline hover:text-primary-hover active:text-primary-hover active:underline">
          Remove all
        </button>
      </div>

      <div>
        {store.items.length > 0 ? (
          store.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              quantity={store.quantity}
              total={store.total}
              clearCart={store.clearCart}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
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
