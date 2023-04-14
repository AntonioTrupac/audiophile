import { api } from "~/utils/api";
import { CategorySection } from "~/components";

const Headphones = () => {
  const { data, isLoading } = api.product.getHeadphonesCategory.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="flex flex-col">
      <h1>Headphones</h1>

      <div>
        {data.map((item) => (
          <CategorySection product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Headphones;
