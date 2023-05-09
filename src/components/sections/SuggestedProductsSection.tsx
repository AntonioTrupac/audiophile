import Image from "next/image";

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

const SuggestedProductsSection = ({
  suggestedProducts,
}: {
  suggestedProducts: SuggestedProduct[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-8 text-2xl font-bold">You may also like</h2>

      {suggestedProducts.map((suggestedProduct) => {
        const product = suggestedProduct.suggestedProduct;
        console.log(product);
        return (
          <div
            key={suggestedProduct.id}
            className="relative flex aspect-[1] w-full md:aspect-[0.585416667] md:min-h-[200px] lg:aspect-[0.964285714] lg:h-[560px] lg:w-[540px]"
          >
            {product.images?.imageSizes &&
              product.images.imageSizes.map((image) => (
                <Image
                  key={image.id}
                  src={image.desktopURL}
                  alt={product.name}
                  fill
                  className="rounded-md md:hidden lg:flex"
                />
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedProductsSection;
