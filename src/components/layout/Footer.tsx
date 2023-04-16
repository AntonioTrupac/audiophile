import Image from "next/image";
import Link from "next/link";
import { SocialLinkButtons } from "~/components";

const Footer = () => {
  return (
    <footer className="bg-black px-4 pt-12 pb-8 md:px-10 md:pt-[4.6875rem] md:pb-12 lg:px-16">
      <div className="mb-8 flex max-w-[1110px] flex-col items-center justify-between md:items-start lg:mx-auto lg:flex-row lg:items-center">
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={143}
          height={25}
        />

        <nav className="mt-8 lg:ml-8 lg:mt-0">
          <ul className="flex flex-col gap-[2.125rem] text-center md:flex-row md:text-left">
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

      <div className="mx-auto max-w-[1110px]">
        <div className="flex justify-between ">
          <p className="mb-8 text-center font-medium text-white/50 md:text-left lg:max-w-[540px]">
            Audiophile is an all-in-one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>

          <div className="hidden items-center text-white lg:flex">
            <SocialLinkButtons />
          </div>
        </div>

        <div className="md: flex flex-col items-center text-center md:flex-row md:items-start md:justify-between">
          <p className="text-left text-sm font-bold text-white/50">
            © {new Date().getFullYear()} Audiophile. All rights reserved.
          </p>

          <div className="mt-8 flex items-center text-white md:mt-0 lg:hidden">
            <SocialLinkButtons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
