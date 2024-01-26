import Link from "next/link";
import { ArrowLeftIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function BackArrow() {
  const LinkIcon = ArrowLeftIcon;
  return (
    <Link
      href={'/'}
      className="w-24 flex items-center mb-5 duration-200 hover:text-gray-500"
    >
      <LinkIcon className="w-6" />
      <span className="ms-3 w-full">Go Back</span>
    </Link>
  )
}