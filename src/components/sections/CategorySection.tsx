import Image from "next/image";
import { useRouter } from "next/router";
import { LinkButton } from "~/components";
import { type ImageSize } from "./types";

type ProductWithCategoryImages = {
  id: number;
  name: string;
  price: number;
  description: string;
  slug: string;
  new: boolean;
  categoryImages: {
    imageSizes: ImageSize[];
  } | null;
};

interface CategorySectionProps {
  product: ProductWithCategoryImages;
  isContentLeft?: boolean;
}

const CategorySection = ({ product, isContentLeft }: CategorySectionProps) => {
  const router = useRouter();
  console.log(product.slug);
  console.log("ROUTER", router);
  return (
    <section
      className={`mt-20 flex max-w-[1110px] flex-col gap-8 first:mt-0 md:mt-[120px] md:gap-14 md:first:mt-0 lg:mt-[160px] lg:flex-row lg:gap-[125px] ${
        isContentLeft ? "lg:flex-row-reverse" : ""
      }`}
    >
      {product.categoryImages?.imageSizes &&
        product.categoryImages.imageSizes.map((image) => (
          <div
            key={product.id}
            className="relative aspect-[0.928977273] w-full md:aspect-[1.95738636] lg:aspect-[0.964285714] lg:h-[560px] lg:w-[540px]"
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

      <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
        {product.new && (
          <span className="overline-custom mb-4 text-primary">new product</span>
        )}

        <h2 className="px-8 md:px-40 lg:px-0">{product.name}</h2>
        <p className="my-6 text-black/50 md:mt-8 md:w-[572px] lg:mb-10 lg:w-auto">
          {product.description}
        </p>

        <LinkButton
          className="self-center lg:self-start"
          href={`${router.route}/${product.slug}`}
        >
          See product
        </LinkButton>
      </div>
    </section>
  );
};

export default CategorySection;
