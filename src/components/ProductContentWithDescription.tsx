import { LinkButton } from "~/components/buttons";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image: {
    mobile: {
      url: string;
    };
    tablet: {
      url: string;
    };
    desktop: {
      url: string;
    };
    alt: string;
  };
};

interface ProductContentWithDescriptionProps {
  product: Product;
  backgroundColor?: string;
  contentRight?: boolean;
}

const ProductContentWithDescription = ({
  product,
  backgroundColor = "",
  contentRight = false,
}: ProductContentWithDescriptionProps) => {
  return (
    <div
      className={`flex w-full max-w-[1110px] items-center justify-center gap-8 pt-20 pb-16 md:gap-16 md:pt-[3.25rem] lg:items-start lg:gap-[120px] lg:pb-0 ${backgroundColor} flex-col overflow-hidden rounded-md lg:flex-row lg:pt-24`}
    >
      <div
        className={`${
          contentRight ? "order-2" : "order-1"
        } px-6 text-center md:w-[350px] md:px-0 lg:mt-4`}
      >
        <h2 className="text-4xl tracking-[1.29px] text-white md:text-[56px]">
          {product.name}
        </h2>

        <p className="mt-6 text-white/75">{product.description}</p>

        <LinkButton
          variant="secondary"
          href={`/products/${product.id}`}
          className="mt-6 inline-flex text-white md:mt-10"
          style={{ backgroundColor: "#000", borderColor: "#000" }}
        >
          See product
        </LinkButton>
      </div>

      <div
        className={`${
          contentRight ? "order-1" : "order-2"
        } relative aspect-[0.831643002] h-[207px] md:h-[237px] lg:mb-[-0.75rem] lg:h-[473px] lg:self-end`}
      >
        <Image
          src={product.image.desktop.url}
          alt={product.image.alt}
          fill
          className="hidden lg:block"
        />

        <Image
          src={product.image.tablet.url}
          alt={product.image.alt}
          fill
          className="hidden md:block lg:hidden"
        />

        <Image
          src={product.image.mobile.url}
          alt={product.image.alt}
          fill
          className="block md:hidden"
        />
      </div>
    </div>
  );
};

export default ProductContentWithDescription;
