interface ContentWithImageSectionProps {
  content: string;
  image: {
    src: string;
    alt: string;
  };
  imagePosition: "left" | "right";
}

const ContentWithImageSection = ({
  content,
  image,
  imagePosition,
}: ContentWithImageSectionProps) => {
  return <div>Dada</div>;
};

export default ContentWithImageSection;
