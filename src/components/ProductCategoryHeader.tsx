const ProductCategoryHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex h-[192px] w-full items-end justify-center bg-black md:h-[336px] 2xl:max-w-[1440px]">
      <h2 className="mb-[32px] text-white md:mb-[95px] lg:text-[3.5rem]">
        {title}
      </h2>
    </div>
  );
};

export default ProductCategoryHeader;
