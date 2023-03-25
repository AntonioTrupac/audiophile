import Cart from "~/components/icons/Cart";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 flex w-full justify-center">
      <div className="flex w-full items-center justify-between px-4 xl:max-w-[1110px]">
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
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </nav>

        <button>
          <Cart />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
