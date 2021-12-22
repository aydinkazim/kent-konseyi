/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkında", href: "/hakkinda" },
    { name: "Galeri", href: "#" },
    { name: "Haberler", href: "#" },
    { name: "İletişim", href: "#" },
  ];

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 lg:px-24 px-8 ">
        <Link href="/">
          <a className="inline-flex items-center  mr-4 ">
            <img src="images/hiy-logo.svg"></img>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto text-acikGri font-['Roboto'] font-normal text-lg">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-koyuMor hover:font-medium ">
                  {item.name}
                </a>
              </Link>
            ))}
            {/* <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-koyuMor ">
                Anasayfa
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Hakkında
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Galeri
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Haberler
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                İletişim
              </a>
            </Link> */}
          </div>
        </div>
        {/* <div className={styles.top}></div> */}
      </nav>
    </>
  );
}

export default Navbar;
