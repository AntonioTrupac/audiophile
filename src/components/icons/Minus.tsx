import { type SVGProps } from "react";

const Minus = ({
  width = 10,
  height = 3,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 3"
      {...rest}
    >
      <defs>
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
        />
      </defs>
      <use fill="currentColor" fillRule="nonzero" xlinkHref="#a" />
    </svg>
  );
};

export default Minus;
