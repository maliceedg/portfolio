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
    <div className="mb-10">
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto min-w-screen py-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className={`${inter.className} self-center text-3xl whitespace-nowrap dark:text-white`}>Edgardo</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link
                  href={link.href}
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                  )}
                >
                  <LinkIcon className="w-6" /></Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
