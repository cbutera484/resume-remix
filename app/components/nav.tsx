import { Link } from "@remix-run/react";
import React, { useRef } from "react";
import "../assets/css/nav.css";
import { Hamburger } from "./hamburger";
import { useLocation } from "@remix-run/react";
import ThemeToggle from "./themeToggle";
const LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Resume", to: "/resume" },
  { name: "Portfolio", to: "/portfolio" },

  // { name: "Contact", to: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menu = useRef<HTMLUListElement>(null);

  function NavLink({ to, ...rest }: { to: string }) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
      <li>
        <Link
          onClick={close}
          onKeyUp={(e) => e.key === "Enter" && close()}
          to={to}
          prefetch="intent"
          className={isActive ? "active" : ""}
          {...rest}
        ></Link>
      </li>
    );
  }

  const handleClick = () => {
    if (!isOpen) {
      open();
    } else {
      close();
    }
  };

  function open() {
    if (menu.current) {
      menu.current.classList.add("open");
      window.setTimeout(() => {
        menu.current && menu.current.classList.add("opacity-100");
      }, 100);
    }
    setIsOpen(true);
  }
  function close() {
    //close mobile menu only if open, fixes issues with desktop menu clicks on resize
    if (menu.current?.classList.contains("open")) {
      menu.current.classList.remove("opacity-100");
      menu.current.addEventListener(
        "transitionend",
        () => {
          menu.current && menu.current.classList.remove("open");
        },
        { once: true }
      );
    }
    setIsOpen(false);
  }

  return (
    <nav className="flex mx-auto max-w-7xl items-center justify-between">
      <div className="hamburger-container absolute top-0 right-0 mt-2 mr-2 lg:hidden">
        <Hamburger isOpen={isOpen} onHamburgerClick={handleClick} />
      </div>
      <Link
        prefetch="intent"
        to="/"
        className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
      >
        <h2 className="mt-0">Chris Butera</h2>
      </Link>
      <ul
        ref={menu}
        className="hidden text-center lg:space-x-4 lg:px-10 lg:flex flex-row opacity-0 lg:opacity-100 lg:mt-2 text-sm xl:text-base lg:justify-center lg:items-center"
      >
        {LINKS.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.name}
          </NavLink>
        ))}
        <li className="flex justify-center py-8">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
