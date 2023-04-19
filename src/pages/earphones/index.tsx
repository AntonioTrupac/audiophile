import {
  BestGearSection,
  CategoryList,
  CategorySection,
  LoadingSpinner,
  ProductCategoryHeader,
} from "~/components";
import { api } from "~/utils/api";

const EarphonesList = () => {
  const { data, isLoading } =
    api.product.getProductsByCategory.useQuery("earphones");

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
    <div className="mt-16 mb-[120px] md:my-[120px] lg:my-[160px]">
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

const Earphones = () => {
  api.product.getProductsByCategory.useQuery("earphones");

  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">Earphones page</h1>

      <ProductCategoryHeader title="Earphones" />

      <div className="flex w-full max-w-[1110px] flex-col px-6 md:px-10 lg:px-8">
        <EarphonesList />

        <CategoryList className="pt-10 pb-0" />

        <BestGearSection className="my-[120px] lg:my-[160px]" />
      </div>
    </div>
  );
};

export default Earphones;
