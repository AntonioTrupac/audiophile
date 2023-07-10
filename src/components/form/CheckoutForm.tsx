import { Input, Label } from "~/components";

const CheckoutForm = () => {
  return (
    <div className="mt-[38px] mb-[140px] w-full rounded-lg bg-white px-12 py-16">
      <h1 className="mb-12 text-4xl">Checkout</h1>

      <h2 className="mb-4 text-[13px] leading-[25px] tracking-[0.929px] text-primary">
        Billing details
      </h2>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Name</Label>
          <Input />
        </div>

        <div className="w-1/2">
          <Label className="mb-2">Email address</Label>
          <Input />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Name</Label>
          <Input />
        </div>

        <div className="w-1/2" />
      </div>

      <h2 className="mb-4 mt-12 text-[13px] leading-[25px] tracking-[0.929px] text-primary">
        Shipping info
      </h2>

      <div className="mb-6 flex w-full flex-col">
        <Label className="mb-2">Address</Label>
        <Input />
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">ZIP code</Label>
          <Input />
        </div>

        <div className="w-1/2">
          <Label className="mb-2">City</Label>
          <Input />
        </div>
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Country</Label>
          <Input />
        </div>

        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default CheckoutForm;
