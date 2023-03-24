import { forwardRef } from "react";
import Link, { type LinkProps } from "next/link";
import { ChevronRight } from "../icons";
import { baseClasses, variantClasses } from "~/components/buttons/shared";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  isDisabled?: boolean;
  hasIcon?: boolean;
  isExternal?: boolean;
  externalHref?: string;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      hasIcon = false,
      isExternal = false,
      ...props
    },
    ref
  ) => {
    const combinedClassName = `${className} ${
      variantClasses[variant] || ""
    } ${baseClasses}`;

    const content = (
      <>
        {children}
        {hasIcon && (
          <span className="ml-3">
            <ChevronRight />
          </span>
        )}
      </>
    );

    if (isExternal) {
      return (
        <Link ref={ref} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </Link>
      );
    }

    return (
      <Link ref={ref} className={combinedClassName} {...props}>
        {content}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
