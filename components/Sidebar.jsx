"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <aside className="sidebar">
      <h2>Navigation</h2>

      <nav aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}