import { Input, Label } from "~/components";

const CheckoutForm = () => {
  return (
    <div className="mt-[38px] mb-[140px] rounded-lg bg-white px-12 py-16">
      <h1>Checkout</h1>

      <h2>Billing details</h2>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label>Name</Label>
          <Input />
        </div>

        <div className="w-1/2">
          <Label>Email address</Label>
          <Input />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label>Name</Label>
          <Input />
        </div>

        <div className="w-1/2" />
      </div>

      <h2>Shipping info</h2>
      <div className="flex w-full flex-col">
        <Label>Address</Label>
        <Input />
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label>ZIP code</Label>
          <Input />
        </div>

        <div className="w-1/2">
          <Label>City</Label>
          <Input />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label>Country</Label>
          <Input />
        </div>

        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default CheckoutForm;
