import Link from "next/link";
import { ArrowLeftIcon, LinkIcon } from '@heroicons/react/24/outline';

export default function BackArrow() {
  const LinkIcon = ArrowLeftIcon;
  return (
    <Link
      href={'/'}
    >
      <div className="flex">
        <LinkIcon className="w-6" />
        <span className="ms-3">go back</span>
      </div>
    </Link>
  )
}