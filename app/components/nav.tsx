import { Link } from "@remix-run/react";
import { Hamburger } from "./hamburger";
const LINKS = [
  { name: "About", to: "/about" },
  { name: "Resume", to: "/resume" },
  { name: "Work", to: "/work" },
  { name: "Contact", to: "/contact" },
];

function NavLink({ to, ...rest }: { to: string }) {
  return (
    <li>
      <Link to={to} {...rest}></Link>
    </li>
  );
}

export function Nav() {
  return (
    <nav className="flex mx-auto max-w-7xl items-center justify-between mb-10">
      <div className="hamburger-container absolute top-0 right-0 mt-4 mr-4 lg:hidden">
        <Hamburger />
      </div>
      <Link
        prefetch="intent"
        to="/"
        className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
      >
        <h1>Chris Butera</h1>
      </Link>
      <ul className="hidden space-x-4 px-10 lg:flex flex-row opacity-0 lg:opacity-100 mt-2 text-sm xl:text-base">
        {LINKS.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
