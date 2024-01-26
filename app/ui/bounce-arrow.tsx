'use client';

import Link from "next/link";
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BounceArrow() {
  const LinkIcon = ArrowUpIcon;
  return (
    <Link
      href={'/'}
      className="sticky"
      style={{float: 'right', bottom: 0}}
    >
      <div className="w-16 h-16 animate-bounce rounded-full bg-gray-900 text-white flex justify-center items-center me-5 mb-5 shadow-lg">
        <LinkIcon className="w-6" />
      </div>
    </Link>
  )
}