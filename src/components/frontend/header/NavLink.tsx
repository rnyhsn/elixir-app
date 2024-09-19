"use client";
import Link from 'next/link'
import { ILink } from './Navbar'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { usePathname } from 'next/navigation';


const NavLink = ({item}: {item: ILink }) => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<any>(pathname);
  
  return (
    <div className={`relative ${item.sublink && "group"}`}>
        <Link onClick={()=> setSelected(item.path)} href={item.path ? item.path : ""} className={`text-primary tracking-wide font-semibold flex items-center gap-1 hover:text-secondary ${selected === item.path ? "text-secondary" : ""}`}>
            {item.title} { item.sublink && <MdKeyboardArrowDown /> } 
        </Link>
    {
        item.sublink && (
            <div className="hidden group-hover:flex flex-col pl-4 pr-8 gap-1 rounded-sm bg-white absolute w-max shadow-md text-primary font-semibold py-3">
            {
                 item.sublink.map((sublink) => (
                    <Link href={sublink.path}> {sublink.title} </Link>
                 ))
            }
            </div>
        )
    }
    </div>
  )
}

export default NavLink
