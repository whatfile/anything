import Image from "next/image";
import Link from "next/link";
import Github from "../components/GitHub";

export default function Header() {
  return (
    <header className="md:flex text-center justify-between items-center w-full mt-5 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 mb-10 md:mb-0 justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
         🧑🏼‍🏫 Teach Anything
        </h1>
      </Link>
      <div>
         <div className="flex flex-wrap justify-center gap-4 items-center">
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition-colors hover:bg-gray-100"
            href="https://github.com/lvwzhen/teach-anything"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>Star on GitHub</p>
          </a>
          <a href="https://www.buymeacoffee.com/lvwzhen" target="_blank"><img className="h-[38px]" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" /></a>
        </div>
      </div>
      
    </header>
  );
}
