import Image from "next/image";

const bestGearData = {
  desktop: {
    src: "/assets/shared/desktop/image-best-gear.jpg",
  },
  tablet: {
    src: "/assets/shared/tablet/image-best-gear.jpg",
  },
  mobile: {
    src: "/assets/shared/mobile/image-best-gear.jpg",
  },
  alt: "Best audio gear",
};

const BestGearSection = () => {
  return (
    <div className="mt-[7.5rem] flex w-full max-w-[1110px] flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[125px]">
      <div className="relative aspect-[1.09] w-full md:aspect-[2.29666667] lg:order-2 lg:aspect-[0.92517] lg:max-h-[588px]">
        <Image
          src={bestGearData.mobile.src}
          alt={bestGearData.alt}
          fill
          className="rounded-md md:hidden"
        />

        <Image
          src={bestGearData.tablet.src}
          alt={bestGearData.alt}
          fill
          className="hidden rounded-md md:block lg:hidden"
        />

        <Image
          src={bestGearData.desktop.src}
          alt={bestGearData.alt}
          fill
          className="hidden rounded-md md:hidden lg:block"
        />
      </div>

      <div className="text-center md:px-[56px] lg:order-1 lg:max-w-[445px] lg:px-0 lg:text-left">
        <h4 className="lg:text-[40px] lg:leading-[44px] lg:tracking-[1.42857px]">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h4>

        <p className="mt-8 text-black/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BestGearSection;
