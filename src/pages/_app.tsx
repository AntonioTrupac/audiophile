import { type AppType } from "next/app";
import { Manrope } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Layout } from "~/components";
import classNames from "classnames";

const manrope = Manrope({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <main className={classNames(manrope.className, "max-w-full")}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
