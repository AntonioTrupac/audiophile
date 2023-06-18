import { forwardRef, useCallback, useLayoutEffect } from "react";

const Popover = forwardRef<HTMLDivElement>((_, ref) => {
  const setPosition = useCallback(() => {
    const buttonSelector =
      window.innerWidth >= 1024
        ? '[data-cart-button="large"]'
        : '[data-cart-button="small"]';

    const button = document.querySelector(buttonSelector) as HTMLElement;

    if (!button) return;

    const buttonRect = button.getBoundingClientRect();

    if (ref && "current" in ref) {
      // This is a RefObject (useRef), so we can modify .current
      const refObject = ref;
      if (refObject.current) {
        // If the screen is smaller than 768px, make the popover full-width with some margin
        if (window.innerWidth < 768) {
          refObject.current.style.left = `16px`;
          refObject.current.style.right = `16px`;
        }
        // For screens larger than or equal to 768px and smaller than 1024px, align the popover with the cart button
        else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          const calculatedLeft =
            buttonRect.right - refObject.current.offsetWidth;
          // Ensuring the popover does not overflow the left or right of the screen
          const safeLeft = Math.max(
            16,
            Math.min(
              calculatedLeft,
              window.innerWidth - refObject.current.offsetWidth - 16
            )
          );

          refObject.current.style.left = `${safeLeft}px`;
          refObject.current.style.right = "auto";
        }
        // For screens larger than or equal to 1024px, align the popover's right side with the right side of the cart button
        else {
          const popoverWidth = refObject.current.offsetWidth;
          refObject.current.style.left = `${
            buttonRect.right + window.scrollX - popoverWidth
          }px`;
          refObject.current.style.right = "auto";
        }
      }
    }
  }, [ref]);

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
      className="absolute top-20 right-4 z-40 h-[490px] rounded-sm bg-white py-0 px-4 shadow-popover-light md:w-[375px]"
    >
      <div>
        <h1>Cart</h1>
      </div>
    </div>
  );
});

Popover.displayName = "Popover";
export default Popover;
