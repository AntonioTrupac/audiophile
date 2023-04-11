import { Facebook, Instagram, Twitter } from "~/components";
import Link from "next/link";

const SocialLinkButtons = () => {
  return (
    <>
      <Link
        href="#"
        className="mr-8 text-lg font-bold hover:text-primary active:text-primary"
      >
        <Facebook />
      </Link>
      <Link
        href="#"
        className="mr-8 text-lg font-bold hover:text-primary active:text-primary"
      >
        <Twitter />
      </Link>
      <Link
        href="#"
        className="text-lg font-bold hover:text-primary active:text-primary"
      >
        <Instagram />
      </Link>
    </>
  );
};

export default SocialLinkButtons;
