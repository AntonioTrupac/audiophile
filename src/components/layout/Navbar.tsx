import Cart from "~/components/icons/Cart";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="absolute top-6 left-0 z-[9999] flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between lg:mx-12 lg:max-w-[1110px] xl:mx-0">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={143}
          height={25}
        />

        <nav>
          <ul className="flex gap-[2.125rem]">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/headphones" className="hover:text-primary">
                Headphones
              </Link>
            </li>
            <li>
              <Link href="/speakers" className="hover:text-primary">
                Speakers
              </Link>
            </li>
            <li>
              <Link href="/earphones" className="hover:text-primary">
                Earphones
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={() => console.log("Clicked")}>
          <Cart className="text-white" />
        </button>
      </div>

      <div className="mt-9 h-[1px] w-full bg-white/20 lg:max-w-[1110px]" />
    </header>
  );
};

export default Navbar;
