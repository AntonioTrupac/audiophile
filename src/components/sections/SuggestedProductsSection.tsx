import Image from "next/image";
import { Button, LinkButton } from "../buttons";

type ImageSize = {
  id: number;
  desktopURL: string;
  tabletURL: string;
  mobileURL: string;
};

type SuggestedProduct = {
  id: number;
  suggestedProduct: {
    id: number;
    name: string;
    images: {
      imageSizes: ImageSize[];
    } | null;
  };
};

function removeProductType(productName: string): string {
  return productName.replace(/\s*(headphones|earphones)\s*/gi, " ").trim();
}

const SuggestedProductsSection = ({
  suggestedProducts,
}: {
  suggestedProducts: SuggestedProduct[];
}) => {
  return (
    <div className="flex w-full flex-col items-center md:mb-[120px] lg:mb-[160px]">
      <h2 className="mb-8 text-2xl font-bold">You may also like</h2>

      <div className="flex w-full gap-[1.875rem]">
        {suggestedProducts.map((suggestedProduct) => {
          const product = suggestedProduct.suggestedProduct;

          const productName = removeProductType(product.name);

          return (
            <div
              key={suggestedProduct.id}
              className="flex flex-grow flex-col items-center"
            >
              <div className="relative flex aspect-[1.101] w-full">
                {product.images?.imageSizes &&
                  product.images.imageSizes.map((image) => (
                    <Image
                      key={image.id}
                      src={image.mobileURL}
                      alt={product.name}
                      fill
                    />
                  ))}
              </div>

              <div>
                <h3 className="mt-6 mb-2 text-xl font-bold">{productName}</h3>
              </div>

              <div className="mt-8">
                <LinkButton href={`/`}>See product</LinkButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedProductsSection;
