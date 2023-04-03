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

interface ProductContentWithImageProps {
  product: Product;
  backgroundColor?: string;
  contentRight?: boolean;
}

const ProductContentWithDescription = ({
  product,
  backgroundColor = "",
  contentRight = false,
}: ProductContentWithImageProps) => {
  return (
    <div
      className={`flex w-full max-w-[1110px] items-start justify-center gap-[120px] ${backgroundColor} overflow-hidden rounded-md pt-24`}
    >
      <div className={`${contentRight ? "order-2" : "order-1"} mt-4 w-[350px]`}>
        <h1 className="text-white">{product.name}</h1>

        <p className="mt-6 text-white">{product.description}</p>

        <LinkButton
          variant="secondary"
          href={`/products/${product.id}`}
          className="mt-10 inline-flex bg-black text-white hover:border-[#4C4C4C] hover:bg-[#4C4C4C] active:border-[#4C4C4C] active:bg-[#4C4C4C]"
        >
          See product
        </LinkButton>
      </div>

      <div
        className={`${
          contentRight ? "order-1" : "order-2"
        } relative mb-[-0.75rem] aspect-[0.831643002] h-[473px] self-end`}
      >
        <Image src={product.image.desktop.url} alt={product.image.alt} fill />
      </div>
    </div>
  );
};

export default ProductContentWithDescription;
