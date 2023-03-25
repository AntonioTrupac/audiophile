import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Button, Input, Label, LinkButton } from "~/components";

const Home: NextPage = () => {
  const { data, isLoading } = api.product.getAll.useQuery();
  const user = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  console.log(data);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center">
        <div>
          {!user.isSignedIn ? (
            <SignInButton>Sign in with Clerk</SignInButton>
          ) : (
            <SignOutButton />
          )}
        </div>

        <div>
          <h1>Components</h1>
          <div>
            <Button>see product</Button>

            <Button variant="secondary">
              <span>see product</span>
            </Button>

            <Button variant="tertiary" hasIcon>
              shop
            </Button>
          </div>

          <div>
            <LinkButton href={"/"}>see product</LinkButton>

            <LinkButton href={"/"} variant="secondary">
              see product
            </LinkButton>

            <LinkButton href={"/"} variant="tertiary" hasIcon>
              see product
            </LinkButton>
          </div>
        </div>

        <div>
          <h1>Form components</h1>

          <div>
            <Label htmlFor="name" className="mb-2">
              <span>Name</span>
            </Label>
            <Input placeholder="Name" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Products</h1>
          <div>
            {data?.map((product) => (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
