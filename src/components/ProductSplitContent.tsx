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
    <div className="flex w-full max-w-[1110px] flex-col items-center justify-center gap-[1.875rem] md:flex-row">
      <div className="relative aspect-[1.059375] h-[200px] w-full md:h-[320px] lg:aspect-[1.68780488]">
        <Image
          src={image.desktop.url}
          alt={image.alt}
          fill
          className="hidden rounded-md lg:block"
        />

        <Image
          src={image.tablet.url}
          alt={image.alt}
          fill
          className="hidden rounded-md md:block lg:hidden"
        />

        <Image
          src={image.mobile.url}
          alt={image.alt}
          fill
          className="block rounded-md md:hidden"
        />
      </div>

      <div className="relative flex h-[320px] w-full flex-col items-center justify-center rounded-md bg-grayish">
        <div className="absolute left-[40px] top-[100px] lg:left-[95px]">
          <h4>{name}</h4>

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
