import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isDisabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isDisabled, onChange, onBlur, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          className="block rounded-lg border border-input-grayish px-6 py-[1.125rem] text-sm font-bold leading-[18px] tracking-[-0.25px] text-black caret-primary placeholder:text-black/40 invalid:border-[#CD2C2C] invalid:text-[#CD2C2C] focus:outline-primary aria-disabled:border-gray-400 aria-disabled:text-gray-400"
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
          aria-disabled={isDisabled}
          readOnly={isDisabled && rest.readOnly}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
