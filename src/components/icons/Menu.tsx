import { type SVGProps } from "react";

const Menu = ({
  width = 16,
  height = 15,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
};

export default Menu;
