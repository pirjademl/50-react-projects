import dev from "../assets/dev.png";
import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
export default function Header() {
  return (
    <header className="p-4 bg-slate-100">
      <nav className=" flex justify-between items-center">
        <a href="#logo">
          <img src={dev} alt="" />
        </a>
        <ul>
          <p className=" text-gray-600 text-lg">
            Infinite Image gallery scrolling using react tailwind
          </p>
        </ul>
        <ul className="flex gap-2">
          <a
            className="bg-[#207448] text-sm p-2 text-white rounded-md flex gap-2 items-center"
            href="https://github.com/pirjademl"
          >
            <GithubIcon color={'gray'} size={20} />
            Github
          </a>
          <a
            className="bg-[#405DE6] p-2 text-white rounded-md flex gap-2 items-center text-sm"
            href="https://instagram.com/magdum._pirjade"
          >
            <InstagramIcon color={'purple'}  size={20} />
            Instagram
          </a>
          <a
            className="bg-[#1DA1F2] p-2 text-white rounded-md flex gap-2 items-center text-sm"
            href="https://twitter.com/iampirjade"
          >
            <TwitterIcon color={'blue'} fill={'blue'}  size={20} />
            Twitter
          </a>
        </ul>
      </nav>
    </header>
  );
}
