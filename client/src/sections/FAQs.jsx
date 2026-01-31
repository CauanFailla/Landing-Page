import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const faqs = [
    {question: "How long does a project usually take?", answer: "Most projects take between 2 and 4 weeks, depending on scope and complexity."},
    {question: "How does communication work during the project?", answer: "We stay in touch through regular check-ins and updates to make sure everything stays aligned."},
    {question: "Do you offer revisions?", answer: "Yes — revisions are part of the process to ensure the final result meets your expectations."},
    {question: "Do you provide support after launch?", answer: "Yes, we offer post-launch support to handle fixes, improvements, or questions if needed."},
]

export default function FAQs() {
    const [current, setCurrent] = useState(null)
    
    return (
        <section className="flex flex-col items-center py-20 ">
            <div className="text-center">
                <p className="text-accent text-sm">FAQs</p>
                <h1 className="text-3xl font-semibold text-primary_text">Common Questions</h1>
            </div>
            <div className="w-[600px] mt-5">
                {faqs.map((f, i)=>(
                    <div onClick={()=>{current != i ? setCurrent(i) : setCurrent(null)}} className="cursor-pointer border-b-[1px] py-4">
                        <div  className="flex items-center justify-between">
                            <p className="text-primary_text">{f.question}</p>
                            {current != i ?<MdExpandMore size={18}/>:<MdExpandLess size={18}/>}
                        </div>
                        <div className={`${current != i && "hidden"} mt-4`}>
                            <p className="text-sm text-muted_text">{f.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}