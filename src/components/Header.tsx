import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#EBEBEB] p-8 text-center sm:text-left">
      <div className="header-container container mx-auto  sm:flex sm:justify-between sm:border sm:border-red-500 sm:items-center">
        <div className="logo mb-4">
          <h1 className="font-normal text-3xl text-[#143774]">
            Living the simple life
          </h1>
          <p className="text-[0.6rem] font-bold text-[#1792D2] tracking-widest uppercase">
            A blog exploring minimalism in life
          </p>
        </div>
        <nav>
          <ul className="sm:flex sm:justify-between sm:items-center">
            <li>
              <Link
                className=" inline-block text-sm font-semibold text-[#717171] uppercase px-2 mb-2 py-1 tracking-wide border-b-2 border-[#717171] sm:ml-2 sm:mb-0"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block text-sm font-semibold text-[#717171] uppercase px-2 mb-2 py-1 tracking-wide sm:ml-2 sm:mb-0"
                href={"#"}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block text-sm font-semibold text-[#717171] uppercase px-2 mb-2 py-1 tracking-wide sm:ml-2 sm:mb-0"
                href={"#"}
              >
                Recent Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
