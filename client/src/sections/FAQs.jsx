import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const faqs = [
    {question: "How long does a project usually take?", answer: "Most projects take between 2 and 4 weeks, depending on scope and complexity."},
    {question: "How does communication work during the project?", answer: "We stay in touch through regular check-ins and updates to make sure everything stays aligned."},
    {question: "Do you offer revisions?", answer: "Yes — revisions are part of the process to ensure the final result meets your expectations."},
    {question: "Do you provide support after launch?", answer: "Yes, we offer post-launch support to handle fixes, improvements, or questions if needed."},
]

export default function FAQs() {
    const [current, setCurrent] = useState(null)
    
    return (
        <section className="py-20">
            <div className="mx-auto max-w-6xl ">
                <div className="text-center">
                    <p className="text-accent text-sm">FAQs</p>
                    <h2 className="text-3xl font-semibold text-primary_text">Common Questions</h2>
                </div>
                <div className="flex flex-col items-center">
                    <div className="max-w-[605px] w-full mt-5">
                        <ul>
                            {faqs.map((f, i)=>{
                                const isOpen = current === i
                                return (
                                    <li key={f.question} className="border-b-[1px] ">
                                        <button type="button" onClick={()=>setCurrent(isOpen ? null : i)} aria-expanded={isOpen} className="flex justify-between items-center w-full text-left py-4 px-2 text-primary_text">
                                            <span className="">{f.question}</span>
                                            <span aria-hidden="true">
                                                {!isOpen ?<MdExpandMore size={18}/>:<MdExpandLess size={18}/>}
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="pb-4 px-2">
                                                <p className="text-sm text-muted_text text-start">{f.answer}</p>
                                            </div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}