import { api } from "~/utils/api";
import { BestGearSection } from "~/components";
import { type GetStaticProps, type NextPage } from "next";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";

const Headphone: NextPage<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = api.product.getBySlug.useQuery({ slug });

  if (isLoading) return <div>loading</div>;

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">{data.name} page</h1>
      <div className="lg:[97px] flex h-[90px] w-full items-end justify-center bg-black 2xl:max-w-[1440px]" />

      <div className="flex w-full max-w-[1110px] flex-col px-6 md:px-10 lg:px-8 xl:px-0">
        <BestGearSection className="my-[120px] lg:my-[160px]" />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") throw new Error("no slug");

  await ssg.product.getBySlug.prefetch({ slug });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      slug,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default Headphone;
