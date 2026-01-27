import { MdOutlineMilitaryTech } from "react-icons/md";
import { AiFillControl } from "react-icons/ai";
import { AiOutlineApartment } from "react-icons/ai";
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
        <section className="flex flex-col gap-6 text-muted_text items-center">
            <p className="text-sm">Trusted by top brands, including</p>
            <div className="flex flex-wrap justify-center gap-12">
                {companies.map((c)=>(
                    <div className="flex gap-1  items-center">
                        {<c.logo size={20}/>}
                        {c.title}
                    </div>
                ))}
            </div>
        </section>
    )
}