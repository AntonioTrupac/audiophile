import Image from "next/image";
import { LinkButton } from "~/components/buttons";

type Product = {
  id: string;
  name: string;
  description?: string;
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

interface ProductSplitContentProps {
  product: Product;
}

const ProductSplitContent = ({
  product: { id, name, image },
}: ProductSplitContentProps) => {
  return (
    <div className="flex w-full max-w-[1110px] items-center justify-center gap-[1.875rem]">
      <div className="relative aspect-[1.6875] h-[320px]">
        <Image
          src={image.desktop.url}
          alt={image.alt}
          fill
          className="rounded-md"
        />
      </div>

      <div className="relative flex h-[320px] w-full flex-col items-center justify-center bg-grayish">
        <div className="absolute top-[100px] left-[95px]">
          <h4 className="font-bold">{name}</h4>

          <LinkButton
            href={`/products/${id}`}
            className="mt-8 inline-flex"
            variant="secondary"
          >
            See product
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ProductSplitContent;
