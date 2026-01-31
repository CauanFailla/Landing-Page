import { useState, useEffect } from "react";
import { TbSquareLetterDFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        const onKeyDown = (e)=>{if (e.key === "Escape") setIsOpen(false)}
        
        if (isOpen) {
            document.addEventListener("keydown", onKeyDown)
            document.body.style.overflow = "hidden"       
        }
        return ()=> {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = ""
        }
    }, [isOpen])
    
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");

        const handleChange = (e) => {
            if (e.matches) setIsOpen(false)
        }

        if (mq.matches) setIsOpen(false)
        mq.addEventListener("change", handleChange);

        return () => {
            mq.removeEventListener("change", handleChange);
        };
    } , []);

    return (
        <header className="sticky top-0 z-20 flex justify-between items-center border-b-[1px] border-gray-100 bg-white/60 backdrop-blur px-5 py-4 md:px-16">
            <a href="#" className="flex items-center gap-1">
                <TbSquareLetterDFilled className="text-accent" size={35}/>
                <h1 className="text-xl font-semibold text-primary_text">Devora</h1>
            </a>
            <nav className="hidden gap-8 text-sm md:flex" aria-label="Primary">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Process</a>
                <a href="#">FAQ</a>
                <div>
                    <a href="#" className="bg-accent py-2 px-4 rounded-md text-white">Get in touch</a>
                </div>
            </nav>
            <button type="button" onClick={()=>setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-menu" className="md:hidden">
                <FaBars className="text-primary_text" fontSize={20}/>
            </button>

            {isOpen&&(
                <div role="dialog" aria-modal="true" className="absolute inset-0 flex justify-center items-center w-full h-screen bg-white/95 md:hidden">
                    <nav id="mobile-menu" className="flex flex-col items-center text-base gap-4 p-6" aria-label="Mobile">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Process</a>
                        <a href="#">FAQ</a>
                        <a href="#" className="bg-accent py-2 px-4 rounded-md text-white">Get in touch</a>
                        <button type="button" onClick={()=>setIsOpen(false)} className="mt-2 inline-flex items-center justify-center" aria-label="Close menu" >
                            <IoIosClose size={30} />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}