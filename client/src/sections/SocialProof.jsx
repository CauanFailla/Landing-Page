import { MdOutlineMilitaryTech } from "react-icons/md";
import { AiFillControl, AiOutlineApartment } from "react-icons/ai";
import { TbSquareLetterAFilled } from "react-icons/tb";
import { PiWaveSquareBold } from "react-icons/pi";

const companies = [
    {title: "Northbridge", logo: AiFillControl},
    {title: "Meridian", logo: AiOutlineApartment},
    {title: "Apexwell", logo: TbSquareLetterAFilled},
    {title: "Everstone", logo: MdOutlineMilitaryTech},
    {title: "NeonStack", logo: PiWaveSquareBold},
]

export default function SocialProof() {
    return (
        <section className="flex flex-col items-center gap-6 pb-20 text-muted_text">
            <p className="text-sm">Trusted by top brands, including</p>
            <div className="flex flex-wrap justify-center gap-10">
                {companies.map((c)=>(
                    <div key={c.title} className="flex gap-1 items-center">
                        <c.logo aria-hidden="true" size={20}/>
                        <span>{c.title}</span> 
                    </div>
                ))}
            </div>
        </section>
    )
}