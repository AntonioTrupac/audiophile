import { LinkButton } from "~/components";

const HeroSectionContent = () => {
  return (
    <div className="absolute left-0 right-0 top-[33%] m-auto flex w-full flex-col items-center justify-center px-6 text-center md:top-[30%] md:w-[387px] md:px-0 lg:left-[8%] lg:m-0 lg:hidden lg:w-[396px] lg:items-start lg:text-left xl:left-[11%]">
      <h2 className="overline-custom mb-4 text-white/50 md:mb-6">
        New product
      </h2>
      <h2 className="mb-6 text-white md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125rem]">
        XX99 Mark II Headphones
      </h2>
      <p className="text-white/75 md:px-4 lg:px-0">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>

      <LinkButton href="/headphones" className="mt-10">
        See product
      </LinkButton>
    </div>
  );
};

const HeroSectionContentDesktop = () => {
  return (
    <div className="mx-auto hidden h-full max-w-[1110px] items-center lg:flex">
      <div className="mx-auto grid max-w-2xl grid-cols-hero-2 place-content-start gap-4">
        <div className="flex flex-col items-start">
          <h2 className="overline-custom mb-4 text-white/50 md:mb-6">
            New product
          </h2>
          <h2 className="mb-6 text-white md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125rem]">
            XX99 Mark II Headphones
          </h2>
          <p className="text-white/75 md:px-4 lg:px-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <LinkButton href="/headphones" className="mt-10">
            See product
          </LinkButton>
        </div>
        <div />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative aspect-[0.625] h-auto w-full bg-hero-image-mobile bg-cover bg-center bg-no-repeat md:aspect-[1.0546] md:bg-hero-image-tablet lg:h-[729px] lg:bg-hero-image lg:px-10 xl:px-0 2xl:mx-auto 2xl:max-w-[1440px]">
      <HeroSectionContent />
      <HeroSectionContentDesktop />
    </section>
  );
};

export default HeroSection;
