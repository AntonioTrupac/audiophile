import { type LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isDisabled?: boolean;
}

const Label = ({ isDisabled = false, ...rest }: LabelProps) => {
  return (
    <label
      {...rest}
      className={`${
        isDisabled ? "pointer-events-none" : ""
      } block text-sm font-bold leading-[18px] tracking-[-0.25px] text-black peer-invalid:text-[#CD2C2C] ${
        rest.className || ""
      }`}
    >
      {rest.children}
    </label>
  );
};

export default Label;
