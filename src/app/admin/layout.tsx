"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const menuItems = [
  { name: "Add new product", slug: "products" },
  { name: "Sign in & security", slug: "sign-in-and-security" },
  { name: "Visibility", slug: "visibility" },
  { name: "Data privacy", slug: "data-privacy" },
  { name: "Advertising data", slug: "advertising-data" },
  { name: "Notifications", slug: "notifications" },
];

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black border-r p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.slug}
            href={`/admin/${item.slug}`}
            className={clsx(
              "block px-3 py-2 rounded hover:bg-rose-900",
              pathname?.includes(item.slug) && "bg-gray-900 font-semibold"
            )}
          >
            {item.name}
          </Link>
        ))}
      </aside>
      <main className="flex-1 p-6 bg-grey-50">{children}</main>
    </div>
  );
}
