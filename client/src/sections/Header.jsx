import { useState, useEffect } from "react";
import { TbSquareLetterDFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
]

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
        <header className="sticky top-0 z-20 flex justify-between items-center px-5 py-4 md:px-16 border-b border-gray-100 bg-white/60 backdrop-blur">
            <a href="#" className="flex items-center gap-1">
                <TbSquareLetterDFilled aria-hidden="true" className="text-accent" size={35}/>
                <h1 className="text-xl font-semibold text-primary_text">Devora</h1>
            </a>
            <nav className="hidden gap-8 text-sm md:flex md:items-center" aria-label="Primary">
                {navLinks.map((l)=>(
                    <a key={l.label} href={l.href} className="hover:opacity-80 duration-200">{l.label}</a>
                ))}
                <a href="#" className="py-2 px-4 bg-accent text-white rounded-md hover:opacity-90 duration-200">Get in touch</a>
            </nav>
            <button type="button" onClick={()=>setIsOpen(!isOpen)} aria-label="Open menu" aria-expanded={isOpen} aria-controls="mobile-menu" className="md:hidden">
                <FaBars className="text-primary_text" fontSize={20}/>
            </button>

            {isOpen&&(
                <div role="dialog" aria-modal="true" className="absolute inset-0 flex justify-center items-center h-screen bg-white/95 md:hidden">
                    <nav id="mobile-menu" className="flex flex-col items-center gap-4 p-6 text-base " aria-label="Mobile">
                        {navLinks.map((l)=>(
                            <a key={l.label} href={l.href} className="hover:opacity-80 duration-200">{l.label}</a>
                        ))}
                        <a href="#" className="py-2 px-4 bg-accent text-white rounded-md hover:opacity-90 duration-200">Get in touch</a>
                        <button type="button" onClick={()=>setIsOpen(false)} className="inline-flex justify-center items-center mt-2" aria-label="Close menu">
                            <IoIosClose size={30} />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}