'use client';

import {
  EnvelopeIcon, UserIcon
} from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation"; // Figure out in which view the user is
import Link from 'next/link';
import clsx from 'clsx';
import { inter } from "../../app/ui/fonts";

const links = [
  { href: 'mailto:edgardogonzp@gmail.com', icon: EnvelopeIcon },
  { href: 'https://github.com/maliceedg', icon: UserIcon },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className='mb-10 relative z-20'
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto min-w-screen lg:py-5 p-5">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className={`${inter.className} self-center text-3xl whitespace-nowrap text-gray-900`}>Edgardo</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {links.map((link, i) => {
            const LinkIcon = link.icon;
            return (
              <Link
                href={link.href}
                key={i}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-gray-500 duration-200 md:flex-none md:justify-start md:p-2 md:px-3'
                )}
              >
                <LinkIcon className="w-6" /></Link>
            );
          })}
        </div>
      </div>
    </nav>
  )
}
