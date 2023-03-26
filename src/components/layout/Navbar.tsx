import Cart from "~/components/icons/Cart";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-[9999] flex w-full justify-center">
      <div className="flex w-full items-center justify-between xl:max-w-[1110px]">
        <div>
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </div>

        <nav>
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/headphones">Headphones</Link>
            </li>
            <li>
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="/earphones">Earphones</Link>
            </li>
          </ul>
        </nav>

        <button onClick={() => console.log("Clicked")}>
          <Cart />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
