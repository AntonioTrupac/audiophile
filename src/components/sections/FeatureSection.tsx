type Accessory = {
  accessory: {
    id: number;
    name: string;
  };
  accessoryId: number;
  productId: number;
  quantity: number;
};

interface FeatureSectionProps {
  accessories: Accessory[];
  featureTextDetails: string;
  featureTextOverview: string;
}

const AccessoryItem = ({ accessory }: { accessory: Accessory }) => {
  return (
    <div className="mb-2 flex">
      <li className="mr-6 font-bold text-primary">{accessory.quantity}x</li>
      <li className="text-black/50">{accessory.accessory.name}</li>
    </div>
  );
};

const FeatureSection = ({
  featureTextDetails,
  featureTextOverview,
  accessories,
}: FeatureSectionProps) => {
  return (
    <section className="mb-[5.5rem] flex flex-col gap-[5.5rem] md:mb-[120px] md:gap-[120px] lg:mb-[160px] lg:grid lg:grid-cols-feature lg:gap-[125px]">
      <div>
        <h3 className="mb-8">Features</h3>
        <p className="mb-6 text-black/50">{featureTextOverview}</p>
        <p className="text-black/50">{featureTextDetails}</p>
      </div>

      <div className="justify-between md:flex md:max-w-[550px] lg:block">
        <h3 className="mb-8">In the box</h3>
        <ul>
          {accessories.map((accessory) => (
            <AccessoryItem accessory={accessory} key={accessory.accessoryId} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;
