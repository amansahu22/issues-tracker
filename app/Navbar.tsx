"use client";
import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const navLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Issues", path: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((navLink, idx) => (
          <Link
            key={idx}
            href={navLink.path}
            className={classNames({
              "text-zinc-900": currentPath === navLink.path,
              "text-zinc-500": currentPath !== navLink.path,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {navLink.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
