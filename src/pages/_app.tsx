import { type AppType } from "next/app";
import { Manrope } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const manrope = Manrope({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <main className={manrope.className}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
