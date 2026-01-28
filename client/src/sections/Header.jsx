import { useState, useEffect } from "react";
import { TbSquareLetterDFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-20 flex justify-between items-center border-b-[1px] border-gray-100 bg-white/60 backdrop-blur px-5 py-4 md:px-16">
            <div className="flex items-center gap-1">
                <TbSquareLetterDFilled className="text-accent" size={35}/>
                <h1 className="text-xl font-semibold text-primary_text">Devora</h1>
            </div>
            <nav className="hidden gap-8 text-sm md:flex">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Process</a>
                <a href="#">FAQ</a>
                <div>
                    <a href="#" className="bg-accent py-2 px-4 rounded-md text-white">Get in touch</a>
                </div>
            </nav>
            <button onClick={()=>setIsOpen(!isOpen)} className="md:hidden">
                <FaBars className="text-primary_text" fontSize={20}/>
            </button>
            {isOpen&&(
                <div className="absolute  top-0 left-0 flex justify-center items-center w-full h-[100vh] bg-white/95 md:hidden">
                    <nav className="flex flex-col items-center text-base gap-4 p-6">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Process</a>
                        <a href="#">FAQ</a>
                        <a href="#" className="bg-accent py-2 px-4 rounded-md text-white">Get Started</a>
                        <IoIosClose className="cursor-pointer" size={30} onClick={()=>setIsOpen(false)}/>
                    </nav>
                </div>
            )}
        </header>
    )
}