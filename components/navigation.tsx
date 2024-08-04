"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "../styles/globals.css";

export default function Navigation() {
  const path = usePathname();
  const router = useRouter();

  const getLinkClassName = (linkPath: String) => {
    const isActive = path === linkPath;
    return `block py-2 px-3 md:p-0 rounded focus:outline-none ${
      isActive
        ? "text-blue-700 dark:text-blue-500"
        : "text-gray-900 hover:bg-gray-100 md:hover:bg-trasparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    }`;
  };

  const handleGetStartedClick = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            English Together
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleGetStartedClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={getLinkClassName("/")}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={getLinkClassName("/about-us")}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
