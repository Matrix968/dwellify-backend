import { useState, useEffect } from "react";
import { Star, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <div>
      <nav className="flex fixed justify-between md:px-10 text-white px-6 py-4 w-full text-sm">
        <Link to={"/"} className="py-1 font-black text-2xl px-5 md:px-20">Dwellify</Link>
        <div className="flex gap-8 md:gap-10">
            <div className="flex gap-3 py-3">
                <Star className="border rounded" size={19}/>
            <li className="list-none font-medium">EN</li>
            </div>
            <div className="md:flex gap-5 hidden">
                <Link className=" px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 rounded-full">Support</Link>
                <Link className="border border-white/5 bg-white items-center px-6 py-2 cursor-pointer font-semibold text-gray-900 rounded-full pb-0">Register</Link>
            </div>
            <div onClick={() =>setIsOpen(!isOpen)} className="py-2 cursor-pointer">
                {isOpen ? <X/> : <Menu/>}
            </div>
        </div>
      </nav>
    </div>
  );
}
