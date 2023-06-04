import Cart from "~/components/icons/Cart";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "~/components/layout/MobileNavigation";
import { useState } from "react";
import Menu from "~/components/icons/Menu";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClose = () => setIsOpen(false);

  return (
    <header className="absolute top-6 left-0 z-[9999] flex w-full flex-col items-center justify-center px-10 lg:left-1/2 lg:-translate-x-1/2 lg:transform">
      <div className="grid w-full max-w-[1110px] grid-cols-navigation-mobile items-center md:grid-cols-navigation lg:items-start lg:px-0">
        {/* Logo for lg: screens */}
        <div className="col-span-1 hidden items-center justify-start lg:flex">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="hidden gap-[2.125rem] lg:flex">
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

          {isOpen && <MobileNavigation isOpen={isOpen} onClose={onClose} />}
        </nav>

        {/* Cart Button for lg: screens */}
        <div className="col-span-1 hidden items-center justify-end lg:flex ">
          <button onClick={() => console.log("Clicked")}>
            <Cart className="text-white" />
          </button>
        </div>

        {/* Menu Button, Logo, and Cart for mobile and tablet */}
        <div className="col-span-3 flex items-center justify-between lg:hidden">
          <button className="" type="button" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>

          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />

          <button onClick={() => console.log("Clicked")}>
            <Cart className="text-white" />
          </button>
        </div>
      </div>

      {!router.query.slug && (
        <div className="mt-9 h-[1px] w-full bg-white/20 lg:max-w-[1110px]" />
      )}
    </header>
  );
};

export default Navbar;
