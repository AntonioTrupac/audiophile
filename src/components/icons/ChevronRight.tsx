const ChevronRight = ({
  width = 8,
  height = 12,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.322 1l5 5-5 5"
        stroke="#D87D4A"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ChevronRight;
