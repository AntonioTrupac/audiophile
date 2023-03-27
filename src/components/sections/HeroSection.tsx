const HeroSectionContent = () => {
  return (
    <div className="xsm:w- absolute left-0 right-0 top-[33%] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="overline-custom mb-4 text-white/50">New product</h2>
      <h2 className="mb-6 text-white">XX99 Mark II Headphones</h2>
      <p className="text-white/75">
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
