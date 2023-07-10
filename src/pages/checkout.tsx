import { type NextPage } from "next";
import CheckoutForm from "~/components/form/CheckoutForm";
import { CheckoutPaymentDetails } from "~/components";

const Checkout: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">Checkout page</h1>
      <div className="lg:[97px] flex h-[90px] w-full items-end justify-center bg-black 2xl:max-w-[1440px]" />

      <div className="flex w-full max-w-[1110px] flex-row gap-8 px-6 md:px-10 lg:px-8 xl:px-0">
        <CheckoutForm />
        <CheckoutPaymentDetails />
      </div>
    </div>
  );
};

export default Checkout;
