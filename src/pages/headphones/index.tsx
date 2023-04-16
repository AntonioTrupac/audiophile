import { api } from "~/utils/api";
import {
  BestGearSection,
  CategoryList,
  CategorySection,
  LoadingSpinner,
} from "~/components";

const HeadphonesList = () => {
  const { data, isLoading } = api.product.getHeadphonesCategory.useQuery();

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoadingSpinner size={70} />
      </div>
    );
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <CategorySection
          product={item}
          key={item.id}
          isContentLeft={index === 1}
        />
      ))}
    </div>
  );
};

const Headphones = () => {
  // fetch early
  // since this is React query under the hood, it will be cached, so it fetches only once
  api.product.getHeadphonesCategory.useQuery();

  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">Headphones page</h1>

      <div className="flex h-[192px] w-full items-end justify-center bg-black md:h-[336px] 2xl:max-w-[1440px]">
        <h2 className="mb-[32px] text-white md:mb-[95px] lg:text-[3.5rem]">
          Headphones
        </h2>
      </div>

      <div className="flex flex-col px-6 md:px-10 lg:px-8">
        <HeadphonesList />

        <CategoryList className="pt-10 pb-0" />

        <BestGearSection />
      </div>
    </div>
  );
};

export default Headphones;
