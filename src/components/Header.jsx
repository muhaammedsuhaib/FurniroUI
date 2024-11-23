import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Header = () => {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Asgaard Sofa", href: "/shop/asgaard-sofa" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-6 w-full flex items-center bg-[#F9F1E7]"
    >
      <ol className="inline-flex items-center space-x-2 md:space-x-4 text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.name} className="inline-flex items-center">
            <a
              href={breadcrumb.href}
              className={`${
                index === breadcrumbs.length - 1
                  ? "text-black font-semibold"
                  : "hover:text-gray-800 transition"
              }`}
            >
              {breadcrumb.name}
            </a>
            {index < breadcrumbs.length - 1 && (
              <FiChevronRight className="text-gray-500 mx-2" />
            )}
          </li>
        ))}
        <li>
          <span className="hidden md:inline-block text-gray-400">|</span>
        </li>
      </ol>
    </nav>
  );
};

export default Header;
