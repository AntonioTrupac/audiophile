import Image from "next/image";
import { Button, CounterButtons } from "~/components";
import type { ImageSize } from "./types";
import { useItemCount } from "~/hooks";

type ProductSection = {
  id: number;
  name: string;
  price: number;
  description: string;
  slug: string;
  new: boolean;
  images: {
    imageSizes: ImageSize[];
  } | null;
};

interface ProductSectionProps {
  product: ProductSection;
}

const ProductSection = ({ product }: ProductSectionProps) => {
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.images?.imageSizes[0]?.mobileURL || "",
  };

  const { count, handleIncrement, handleDecrement, handleCart } =
    useItemCount(cartItem);

  return (
    <section className="flex max-w-[1110px] flex-col gap-8 pb-[5.5rem] first:mt-0 md:flex-row md:gap-20 md:pb-[120px] md:first:mt-0 lg:gap-[125px] lg:pb-[160px]">
      {product.images?.imageSizes &&
        product.images.imageSizes.map((image) => (
          <div
            key={product.id}
            className="relative aspect-[1] w-full md:aspect-[0.585416667] md:min-h-[480px] lg:aspect-[0.964285714] lg:h-[560px] lg:w-[540px]"
          >
            <Image
              src={image.desktopURL}
              alt={product.name}
              fill
              className="rounded-md md:hidden lg:flex"
            />

            <Image
              src={image.tabletURL}
              alt={product.name}
              fill
              className="hidden rounded-md md:flex lg:hidden"
            />

            <Image
              src={image.mobileURL}
              alt={product.name}
              fill
              className="flex rounded-md md:hidden"
            />
          </div>
        ))}

      <div className="flex flex-col justify-center text-left">
        {product.new && (
          <span className="overline-custom mb-4 text-primary">new product</span>
        )}

        <h2>{product.name}</h2>
        <p className="my-6 text-black/50 md:mt-8 lg:mb-8 lg:w-auto">
          {product.description}
        </p>

        <p className="mb-12 text-[18px] font-bold leading-[25px] tracking-[1.29px]">
          $<span className="ml-1">{product.price}</span>
        </p>

        <div className="flex gap-4">
          <CounterButtons
            count={count}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
          <Button onClick={handleCart} className="flex-grow md:flex-grow-0">
            add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
