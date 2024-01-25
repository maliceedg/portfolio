'use client';

import Link from "next/link";
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BounceArrow() {
  const LinkIcon = ArrowUpIcon;
  return (
    <Link
      href={'/'}
    >
      <div className="w-16 h-16 animate-bounce rounded-full bg-gray-900 absolute right-0 bottom-0 text-white flex justify-center items-center me-5 mb-5 shadow-lg">
        <LinkIcon className="w-6" />
      </div>
    </Link>
  )
}