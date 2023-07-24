import { type NextPage } from "next";
import CheckoutForm from "~/components/form/CheckoutForm";
import { CheckoutPaymentDetails } from "~/components";
import { useCartStore } from "~/store/cart";
import { type SubmitHandler, useForm } from "react-hook-form";

const Checkout: NextPage = () => {
  const store = useCartStore();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 10));
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="sr-only">Checkout page</h1>
      <div className="lg:[97px] flex h-[90px] w-full items-end justify-center bg-black 2xl:max-w-[1440px]" />

      <div className="flex w-full max-w-[1110px] flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[1110px] flex-row gap-8 px-6 md:px-10 lg:px-8 xl:px-0"
        >
          <CheckoutForm register={register} />
          <CheckoutPaymentDetails items={store.items} total={store.cartTotal} />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
