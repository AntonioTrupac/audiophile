const HeroSectionContent = () => {
  return (
    <div className="absolute left-0 top-[40%] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">New product</h1>
      <h2 className="text-2xl font-bold">XX99 Mark II Headphones</h2>
      <p className="text-lg">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative aspect-[0.625] h-auto w-full bg-hero-image-mobile bg-cover bg-center bg-no-repeat md:aspect-[1.0546] md:h-auto md:bg-hero-image-tablet lg:h-[729px] lg:bg-hero-image 2xl:mx-auto 2xl:max-w-[1440px]">
      <HeroSectionContent />
    </section>
  );
};

export default HeroSection;
