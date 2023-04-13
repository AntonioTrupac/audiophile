import { api } from "~/utils/api";

const Headphones = () => {
  const { data, isLoading } = api.product.getAll.useQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!data) {
    return <div>Something went wrong</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>Headphones</h1>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headphones;
