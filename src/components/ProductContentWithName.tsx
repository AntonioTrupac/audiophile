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

interface ProductContentWithNameProps {
  product: Product;
}

const ProductContentWithName = ({
  product: { id, name, image },
}: ProductContentWithNameProps) => {
  return (
    <div className="flex w-full max-w-[1110px] flex-col items-center justify-center">
      <div className={`relative h-[320px] w-full self-end`}>
        <Image
          src={image.desktop.url}
          alt={image.alt}
          fill
          className="rounded-md"
        />

        <div className="absolute top-[100px] left-20 z-10">
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

export default ProductContentWithName;
