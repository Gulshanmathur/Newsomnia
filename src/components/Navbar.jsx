import { useState } from "react";
import "../App.css"
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    // duration-700 ease-in-out hover:bg-[#000000]
    <nav className="bg-[#1f2937] sticky top-0 start-0 z-10 px-4 py-2 border-b border-grey-200 dark:border-gray-600  ">
      <div className="max-w-[1240px] flex justify-between items-center mx-auto ">
      <span className="self-center text-3xl font-MeowScript font-semibold whitespace-nowrap dark:text-white"><a href="/">NewsOmnia</a></span>
        <div className="text-3xl title-name text-green-300 "></div>
        {toggle ? (
          <IoClose
            className="text-white text-2xl md:hidden block"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineMenuFold
            className="text-white text-2xl md:hidden block "
            onClick={() => setToggle(!toggle)}
          />
        )}
        <ul className="hidden   custom-md:text-[16px]  sm:text-sm md:flex text-white ">
          <li className="p-2"><a href="/" className="hover:text-gray-400 duration-500">Home</a></li>
          <li className="p-2"><a href="/business" className="hover:text-gray-400 duration-500">Business</a></li>
          <li className="p-2"><a href="/entertainment" className="hover:text-gray-400 duration-500">Entertainment</a></li>
          <li className="p-2"><a href="/health" className="hover:text-gray-400 duration-500">Health</a></li>
          <li className="p-2"><a href="/science" className="hover:text-gray-400 duration-500">Science</a></li>
          <li className="p-2"><a href="/sports" className="hover:text-gray-400 duration-500">Sports</a></li>
          <li className="p-2"><a href="/technology" className="hover:text-gray-400 duration-500">Technology</a></li> 
        </ul>
        {/* //responsive menu */}
        <ul
          className={` duration-300 xl:hidden  w-full h-screen z-10 text-white fixed bg-black  top-[49px]
          ${toggle ? "left-[0]" : "left-[-100%]"} 
        `}
        >
          <li className="p-2"><a href="/" className="hover:text-gray-400 duration-500">Home</a></li>
          <li className="p-2"><a href="/business" className="hover:text-gray-400 duration-500">Business</a></li>
          <li className="p-2"><a href="/entertainment" className="hover:text-gray-400 duration-500">Entertainment</a></li>
          <li className="p-2"><a href="/health" className="hover:text-gray-400 duration-500">Health</a></li>
          <li className="p-2"><a href="/science" className="hover:text-gray-400 duration-500">Science</a></li>
          <li className="p-2"><a href="/sports" className="hover:text-gray-400 duration-500">Sports</a></li>
          <li className="p-2"><a href="/technology" className="hover:text-gray-400 duration-500">Technology</a></li> 
        </ul>
      </div>
    </nav>
  );
}
