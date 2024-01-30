import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 mb-5 w-full text-gray-900 pt-5 md:px-0 px-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <span className="font-semibold text-md">
              Maliceedg
            </span>
          </div>
          <div>
            <ul className="flex flex-wrap">
              <span className="font-semibold text-md">Find me:</span>
              <li className="ms-5">
                <a href="https://github.com/maliceedg">
                  <Image
                    src={'/github-mark.svg'}
                    width={30}
                    height={30}
                    alt={'Github Logo'}
                    className="mx-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}