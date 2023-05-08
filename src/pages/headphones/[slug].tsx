import { api } from "~/utils/api";
import {
  BestGearSection,
  CategoryList,
  GallerySection,
  LoadingSpinner,
  ProductSection,
} from "~/components";
import { type GetStaticProps, type NextPage } from "next";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import Link from "next/link";
import FeatureSection from "~/components/sections/FeatureSection";

const Headphone: NextPage<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = api.product.getBySlug.useQuery({ slug });

  console.log(data);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner size={70} />
      </div>
    );

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">{data.name} page</h1>
      <div className="lg:[97px] flex h-[90px] w-full items-end justify-center bg-black 2xl:max-w-[1440px]" />

      <div className="mt-4 flex w-full max-w-[1110px] px-6 md:mt-8 md:px-10 lg:mt-20 lg:px-8 xl:px-0">
        <Link
          href="/headphones"
          className="capitalize text-black/50 hover:text-black/40"
        >
          Go back
        </Link>
      </div>

      <div className="mt-6 flex w-full max-w-[1110px] flex-col px-6 md:px-10 lg:mt-12 lg:px-8 xl:px-0">
        <ProductSection product={data} />
        <FeatureSection
          featureTextDetails={data.featureTextDetails}
          featureTextOverview={data.featureTextOverview}
          accessories={data.accessories}
        />
        <GallerySection galleryImages={data.productGalleryImages} />
        <CategoryList className="pt-10 pb-0" />
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
