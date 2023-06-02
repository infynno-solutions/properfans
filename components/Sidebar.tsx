import Image from 'next/image'
import Logo from '../public/properfans.svg'
import Verified from '../public/verified.svg'
import Link from 'next/link'
import {
  MdGridView,
  MdOutlineInbox,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { IoMdCompass } from 'react-icons/io'
import { RiChat1Line } from 'react-icons/ri'
import { Creator } from '@/app/api/suggested-creators/route'

const menuItems = [
  {
    title: 'Feed',
    href: '/feed',
    icon: (
      <MdGridView className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
  {
    title: 'Discover',
    href: '/discover',
    icon: (
      <IoMdCompass className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
  {
    title: 'Properchat',
    href: '/properchat',
    icon: (
      <RiChat1Line className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
  {
    title: 'Inbox',
    href: '/inbox',
    icon: (
      <MdOutlineInbox className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: (
      <MdOutlinePersonOutline className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
  {
    title: 'Account Center',
    href: '/account-center',
    icon: (
      <MdOutlineSettings className="w-5 h-5 text-black text-opacity-20 group-hover:text-purple-700" />
    ),
  },
]

const Sidebar = ({ mySubs }: any) => {
  return (
    <aside className="lg:w-[76px] xl:w-[280px] md:min-h-screen bg-white shadow-sidebar md:px-2.5 fixed flex md:flex-col flex-row w-full md:w-auto bottom-0 h-16 z-50">
      <Link
        href="/"
        className="hidden md:flex justify-start gap-3 py-10 pl-2.5"
      >
        <div className="w-[46px] h-[46px] bg-gray-100 rounded-full" />
        <Image className="hidden xl:block" src={Logo} alt="ProperFans" />
      </Link>
      {/* Menu */}
      <div className="hidden xl:block px-2.5 text-sm font-normal text-gray-500">
        Menu
      </div>
      <nav className="pt-2.5 flex flex-row md:flex-col justify-between w-full">
        {menuItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex items-center justify-center xl:justify-start gap-4 py-4 px-3 hover:bg-black hover:bg-opacity-5 rounded-[10px] group"
          >
            {item.icon}
            <span className="hidden xl:block text-black font-semibold text-base">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
      {/* Subscriptions */}
      <div className="hidden xl:block pt-10 px-2.5 text-sm font-normal text-gray-500">
        Subscriptions
      </div>
      <nav className="pt-2.5 hidden md:block">
        {mySubs.subscriptions.map((sub: Creator, index: number) => (
          <Link
            href={`/${sub.username}`}
            key={index}
            className="flex items-center justify-center xl:justify-start gap-3.5 py-3.5 px-2.5"
          >
            <div className="relative w-9 h-9 rounded-full bg-gray-100">
              <Image
                src={sub.image}
                alt={sub.name}
                fill
                className="rounded-full"
              />
            </div>
            <div className="hidden xl:block">
              <div className="text-base text-black font-semibold flex items-center gap-1">
                <span>{sub.name}</span>
                {sub.verified && <Image src={Verified} alt="Verified" />}
              </div>
              <div className="text-sm text-gray-500 font-semibold">
                {sub.username}
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
