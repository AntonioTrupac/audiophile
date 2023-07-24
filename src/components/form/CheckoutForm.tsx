import { Input, Label } from "~/components";
import { type UseFormRegister } from "react-hook-form";

const CheckoutForm = ({
  register,
}: {
  register: UseFormRegister<{ name: string }>;
}) => {
  return (
    <div className="mt-[38px] mb-[140px] w-[730px] rounded-lg bg-white px-12 py-16">
      <h1 className="mb-12 text-4xl">Checkout</h1>

      <h2 className="mb-4 text-[13px] leading-[25px] tracking-[0.929px] text-primary">
        Billing details
      </h2>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Name</Label>
          <Input placeholder="Name" {...register("name")} />
        </div>

        <div className="w-1/2">
          <Label className="mb-2">Email address</Label>
          <Input placeholder="Email address" />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Phone Number</Label>
          <Input placeholder="Phone number" />
        </div>

        <div className="w-1/2" />
      </div>

      <h2 className="mb-4 mt-12 text-[13px] leading-[25px] tracking-[0.929px] text-primary">
        Shipping info
      </h2>

      <div className="mb-6 flex w-full flex-col">
        <Label className="mb-2">Address</Label>
        <Input placeholder="Address" />
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">ZIP code</Label>
          <Input placeholder="ZIP code" />
        </div>

        <div className="w-1/2">
          <Label className="mb-2">City</Label>
          <Input placeholder="City" />
        </div>
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Country</Label>
          <Input placeholder="Country" />
        </div>

        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default CheckoutForm;
