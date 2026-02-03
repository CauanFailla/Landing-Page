import { FaPager, FaMedapps } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";

const services = [
    {title: "Landing Pages", description: "High-performance, conversion-focused websites built to turn visitors into leads", icon: FaPager},
    {title: "Full-Stack Web Apps", description: "Scalable web applications with clean architecture and secure APIs.", icon: FaMedapps},
    {title: "Performance & Optimization", description: "Improve load times, accessibility, and reliability for better user experience", icon: GrOptimize}
]

export default function Services() {
    return (
        <section className="relative -mx-5 py-20 bg-gray-50 ">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"/>
            <div className="relative z-10 mx-auto max-w-6xl px-5">
                <div className="text-center">
                    <p className="text-accent text-sm">SERVICES</p>
                    <h2 className="text-3xl font-semibold text-primary_text">Expertise</h2>
                    <p className="m-3 text-muted_text text-sm">
                        <span className="block">Clear, focused services for growing businesses.</span>
                        <span className="block">Launch and scale</span>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    {services.map((s)=>(
                        <div key={s.title} className="flex flex-col items-center gap-2 w-[300px] p-5 bg-white rounded-xl border border-slate-200 shadow-sm transition  hover:shadow-md">
                            <div className="mb-1 inline-flex h-7 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-600 ">
                                <s.icon fontSize={20} aria-hidden="true"/>
                            </div>
                            <h3>{s.title}</h3>
                            <p className="text-sm text-muted_text">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}