'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const navbar = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/contact', name: 'Contact' },
  ];
  const pathname = usePathname();
  return (
    <div className="flex justify-between">
      <span className="text-3xl font-medium">@ann.</span>
      <div className="flex gap-5">
        {navbar.map((e) => (
          <Link
            href={e.href}
            className={`hover:text-main duration-300 ${
              e.href === pathname ? 'text-main' : ''
            }`}
            key={e.name}
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
