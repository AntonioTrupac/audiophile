import { Input, Label } from "~/components";
import { type UseFormRegister } from "react-hook-form";
import { type FormFields } from "~/pages/checkout";

const CheckoutForm = ({
  register,
}: {
  register: UseFormRegister<FormFields>;
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
          <Input placeholder="Email address" {...register("email")} />
        </div>
      </div>

      <div className="flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Phone Number</Label>
          <Input placeholder="Phone number" {...register("phone")} />
        </div>

        <div className="w-1/2" />
      </div>

      <h2 className="mb-4 mt-12 text-[13px] leading-[25px] tracking-[0.929px] text-primary">
        Shipping info
      </h2>

      <div className="mb-6 flex w-full flex-col">
        <Label className="mb-2">Address</Label>
        <Input placeholder="Address" {...register("address")} />
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">ZIP code</Label>
          <Input placeholder="ZIP code" {...register("zip")} />
        </div>

        <div className="w-1/2">
          <Label className="mb-2">City</Label>
          <Input placeholder="City" {...register("city")} />
        </div>
      </div>

      <div className="mb-6 flex w-full gap-4">
        <div className="w-1/2">
          <Label className="mb-2">Country</Label>
          <Input placeholder="Country" {...register("country")} />
        </div>

        <div className="w-1/2" />
      </div>
    </div>
  );
};

export default CheckoutForm;
