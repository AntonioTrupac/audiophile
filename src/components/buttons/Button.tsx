import { forwardRef } from "react";
import { ChevronRight } from "../icons";
import { baseClasses, variantClasses } from "~/components/buttons/shared";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  hasIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      onClick,
      isDisabled,
      hasIcon = false,
      ...props
    },
    ref
  ) => {
    const combinedClassName = `${className} ${
      variantClasses[variant] || ""
    } ${baseClasses}`;

    return (
      <button
        ref={ref}
        className={combinedClassName}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
        {...props}
        aria-disabled={isDisabled}
      >
        {children}
        {hasIcon && (
          <span className="ml-3">
            <ChevronRight />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
