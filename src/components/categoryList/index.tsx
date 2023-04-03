import CategoryListItem from "~/components/categoryList/CategoryListItem";

const image = {
  src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
  alt: "Speakers",
};

const listData = [
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      alt: "Speakers",
    },
    categoryTitle: "Speakers",
  },
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      alt: "Headphones",
    },
    categoryTitle: "Headphones",
  },
  {
    image: {
      src: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      alt: "Earphones",
    },
    categoryTitle: "Earphones",
  },
];

const CategoryList = () => {
  return (
    <div className="w-full max-w-[1110px] py-16 px-6 lg:py-[7.5rem]">
      <ul className="flex flex-col gap-16 md:flex-row lg:gap-[1.875rem]">
        {listData.map((item) => (
          <CategoryListItem
            key={item.categoryTitle}
            image={item.image}
            categoryTitle={item.categoryTitle}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
