import Link from "next/link";
import { Close } from "~/components";

const MobileNavigation = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`z-[1000] flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-[100%]"
      } fixed left-0 right-[30%] top-0 h-full bg-white`}
    >
      <button
        className="pt-7 pl-6 active:text-primary"
        type="button"
        onClick={onClose}
      >
        <Close />
      </button>

      <ul className="flex flex-col gap-10 pl-10 pt-16">
        <li className="">
          <Link href="/" className="text-black active:text-primary">
            Home
          </Link>
        </li>

        <li>
          <Link href="/headphones" className="text-black active:text-primary">
            Headphones
          </Link>
        </li>

        <li>
          <Link href="/speakers" className="text-black active:text-primary">
            Speakers
          </Link>
        </li>

        <li>
          <Link href="/earphones" className="text-black active:text-primary">
            Earphones
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
