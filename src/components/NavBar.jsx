import React, { useState } from "react";
import { Toggle } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";

const navigation = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Avis", href: "#testimonial" },
  { name: "Équipe", href: "#team" },
  { name: "Contact", href: "#contactus" },
];

const NavBar = () => {
  const [active, setActive] = useState("Accueil");

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-4" aria-label="Menu principal">
      <div className="navbar max-w-xs rounded-full bg-base-100/90 py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              aria-label="Ouvrir le menu de navigation"
              className="btn btn-circle btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow"
              aria-label="Menu déroulant"
            >
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="font-urbanist"
                    onClick={() => setActive(item.name)}
                    aria-current={active === item.name ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost rounded-full font-urbanist text-lg font-semibold"
            aria-label="Accueil NSMobile"
          >
            NSMobile
          </a>
        </div>
        <div className="navbar-center ml-10 hidden lg:flex">
          <ul className="menu menu-horizontal px-1" aria-label="Menu de navigation principal">
            {navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`btn btn-ghost rounded-full font-urbanist text-sm font-light ${
                    active === item.name ? "bg-base-300" : ""
                  }`}
                  onClick={() => setActive(item.name)}
                  aria-current={active === item.name ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end h-10 scale-75">
          <Toggle aria-label="Changer le thème" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;