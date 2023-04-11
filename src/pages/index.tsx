import { type NextPage } from "next";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import {
  BestGearSection,
  CategoryList,
  HeroSection,
  ProductContentWithDescription,
  ProductContentWithName,
  ProductSplitContent,
} from "~/components";
import { productMockData } from "~/mockData/product";

const Home: NextPage = () => {
  // const { data, isLoading } = api.product.getAll.useQuery();
  const user = useUser();
  //
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  //
  // if (!data) {
  //   return <div>Something went wrong</div>;
  // }

  return (
    <>
      <Head>
        <title>Home | Audiophile</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto flex min-h-screen w-full flex-col items-center">
        <HeroSection />

        <CategoryList />

        <div className="flex w-full flex-col items-center gap-10 px-6 md:px-10 xl:px-0">
          {productMockData[0] && (
            <ProductContentWithDescription
              key={productMockData[0].id}
              product={productMockData[0]}
              backgroundColor="bg-primary"
              contentRight
            />
          )}

          {productMockData[1] && (
            <ProductContentWithName product={productMockData[1]} />
          )}

          {productMockData[2] && (
            <ProductSplitContent product={productMockData[2]} />
          )}
        </div>

        <div className="flex w-full flex-col items-center px-6 md:px-10 xl:px-0">
          <BestGearSection />
        </div>
        {/*<div>*/}
        {/*  {!user.isSignedIn ? (*/}
        {/*    <SignInButton>Sign in with Clerk</SignInButton>*/}
        {/*  ) : (*/}
        {/*    <SignOutButton />*/}
        {/*  )}*/}
        {/*</div>*/}
      </section>
    </>
  );
};

export default Home;
