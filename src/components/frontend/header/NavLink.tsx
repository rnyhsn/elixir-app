import Link from 'next/link'
import { ILink } from './Navbar'
import { MdKeyboardArrowDown } from "react-icons/md";


const NavLink = ({item}: {item: ILink }) => {
  return (
    <div className={`relative ${item.sublink && "group"}`}>
        <Link href={item.path ? item.path : ""} className={`text-primary tracking-wide font-semibold flex items-center gap-1`}>
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
