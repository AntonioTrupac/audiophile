import Image from "next/image";
import { LinkButton } from "~/components";

type ProductImageSize = {
  id: string;
  desktopURL: string;
  tabletURL: string;
  mobileURL: string;
};

type ProductWithCategoryImages = {
  id: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  categoryImages: {
    imageSizes: ProductImageSize[];
  } | null;
};

interface CategorySectionProps {
  product: ProductWithCategoryImages;
}

const CategorySection = ({ product }: CategorySectionProps) => {
  console.log(product);

  // const { data } = api.product.getHeadphonesCategory.useQuery();

  return (
    <section className="flex flex-col lg:flex-row">
      {product.categoryImages?.imageSizes &&
        product.categoryImages.imageSizes.map((image) => (
          <div
            key={product.id}
            className="relative aspect-[0.928977273] w-full md:aspect-[1.95738636] lg:aspect-[0.964285714]  lg:h-[560px]"
          >
            <Image
              src={image.desktopURL}
              alt={product.name}
              fill
              className="md:hidden lg:flex"
            />

            <Image
              src={image.tabletURL}
              alt={product.name}
              fill
              className="hidden md:flex lg:hidden"
            />

            <Image
              src={image.mobileURL}
              alt={product.name}
              fill
              className="flex md:hidden"
            />
          </div>
        ))}

      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg">{product.description}</p>

        <LinkButton className="self-start" href={`/headphones/${product.slug}`}>
          See product
        </LinkButton>
      </div>
    </section>
  );
};

export default CategorySection;
