import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import { Facebook, Instagram, Twitter } from "~/components";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <footer className="text-neutral-light bg-black py-8 px-4 sm:px-8 lg:px-16">
      <div className="mb-8 flex items-center justify-between">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={143}
          height={25}
        />

        <nav className="ml-8">
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
        </nav>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-between">
          <p className="mb-8 max-w-[540px] text-left text-sm text-white/50">
            Audiophile is an all-in-one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>

          <div className="flex items-center text-white">
            <button className="mr-8 text-lg font-bold hover:text-primary active:text-primary">
              <Facebook />
            </button>
            <button className="mr-8 text-lg font-bold hover:text-primary active:text-primary">
              <Twitter />
            </button>
            <button className="text-lg font-bold hover:text-primary active:text-primary">
              <Instagram />
            </button>
          </div>
        </div>
        <p className="text-left text-sm text-white/50">
          © {new Date().getFullYear()} Audiophile. All rights reserved.
        </p>
      </div>
      {isOpen && <MobileNavigation isOpen={isOpen} onClose={onClose} />}
    </footer>
  );
};

export default Footer;
