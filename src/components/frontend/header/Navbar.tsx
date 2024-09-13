import Image from 'next/image'
import NavLink from './NavLink'

export interface ILink {
    title: string 
    path?: string 
    sublink?: {title: string, path: string}[]
}

const links: ILink[] = [
    {title: "Home", path: "/"},
    {title: "Services", path: "/services"},
    {title: "About", path: "/about"},
    {title: "News", sublink: [
        {title: "Newsroom", path: "/news-room"},
        {title: "Single News", path: "/single-news"}
    ]},
    {title: "Contact", path: "/contact"},
]

const Navbar = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28 py-4 flex justify-between bg-white shadow-md">
        <div className="flex gap-8 items-center">
            <Image src="/logo.png" alt="" width={120} height={50} className="" />
            {
                links.map((item) => (
                    <NavLink item={item} key={item.title} />
                ))
            }
        </div>
        <div>
            <button className="py-1 px-6 font-semibold text-sm tracking-wide hover:bg-primary hover:text-white rounded-full border-2 border-primary text-primary transition-all duration-200">Purchase</button>
        </div>
    </div>
  )
}

export default Navbar
