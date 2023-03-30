import Image from "next/image";
import { LinkButton } from "~/components";

interface CategoryListItemProps {
  image: {
    src: string;
    alt: string;
  };
  categoryTitle: string;
}

const CategoryListItem = ({ image, categoryTitle }: CategoryListItemProps) => {
  const { src, alt } = image;

  return (
    <li className="flex w-full flex-col items-center justify-center rounded-md bg-grayish">
      <div className="mt-[-2.5rem] lg:mt-[-2.6875rem]">
        <div className="relative block aspect-[1.07] xl:hidden ">
          <Image src={src} alt={alt} fill />
        </div>

        <div className="xl:width-[122px] xl:height-[160px] relative hidden xl:flex">
          <Image src={src} alt={alt} width={122} height={160} />
        </div>

        <p className="text-center font-bold">{categoryTitle}</p>

        <LinkButton
          variant="tertiary"
          hasIcon
          href={`/${categoryTitle.toLowerCase()}`}
        >
          Shop
        </LinkButton>
      </div>
    </li>
  );
};

export default CategoryListItem;
