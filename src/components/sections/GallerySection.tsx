import Image from "next/image";

type ImageSize = {
  id: number;
  desktopURL: string;
  tabletURL: string;
  mobileURL: string;
};

type GalleryImage = {
  id: number;
  imageSizes: ImageSize[];
};

interface GalleryImagesProps {
  galleryImages: GalleryImage[];
}

const GalleryItem = ({
  imageSize,
  className,
}: {
  imageSize: ImageSize;
  className?: string;
}) => {
  return (
    <div className={`relative ${className ? className : ""} w-full`}>
      <Image
        src={imageSize.desktopURL}
        alt="gallery"
        fill
        className="rounded-md md:hidden lg:flex"
      />
    </div>
  );
};

const GallerySection = ({ galleryImages }: GalleryImagesProps) => {
  const firstTwo = galleryImages.slice(0, 2);
  const others = galleryImages.slice(2);

  return (
    <div className="mb-[160px] flex gap-[1.875rem]">
      <div className="flex flex-col gap-8">
        {firstTwo.map((image) =>
          image.imageSizes.map((size) => (
            <GalleryItem
              imageSize={size}
              key={size.id}
              className="aspect-[1.58928571] lg:aspect-auto lg:h-[280px] lg:w-[445px]"
            />
          ))
        )}
      </div>

      <div className="w-full">
        {others.map((image) =>
          image.imageSizes.map((size) => (
            <GalleryItem
              imageSize={size}
              key={size.id}
              className="lg:aspect-auto lg:h-[592px]"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GallerySection;
