import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  PlusIcon,
  SparklesIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 flex bg-white px-2 sm:px-4 py-2 shadow-sm items-center">
      <div className="flex relative sm:h-10 sm:w-20 flex-shrink-0 h-6 w-14 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png"
            layout="fill"
          />
        </Link>
      </div>

      <div className="flex items-center mx-2 sm:mx-7 xl:min-w-[300px]">
        <Link href="/">
          <HomeIcon className="h-5 w-5 cursor-pointer" />
        </Link>
        <Link href="/">
          <p className="ml-2 hidden flex-1 cursor-pointer hover:text-gray-400 lg:inline">
            Home
          </p>
        </Link>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-1 sm:space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-1 sm:px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="hidden text-gray-500 space-x-2 mx-5 items-center lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>

      <div className="ml-1 sm:ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign In/Sign Out button */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden items-center lg:flex space-x-2 border border-gray-100 p-1 cursor-pointer hover:after:content-['Sign_Out'] hover:after:absolute after:top-12 after:right-4 after:text-gray-400 hover:after:border-2 after:rounded-sm hover:after:border-[#ff4401] after:bg-gray-50 hover:after:w-[130px] hover:after:text-center"
        >
          <div className="relative h-5 w-5 flex-shrink-0 ">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt="reddit_icon"
            />
          </div>

          <div className="flex-1 text-xs ">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden items-center lg:flex space-x-2 border border-gray-100 p-2 cursor-pointer"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt="reddit_icon"
            />
          </div>

          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
