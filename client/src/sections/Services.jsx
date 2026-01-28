import { FaPager } from "react-icons/fa";
import { FaMedapps } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";

export default function Services() {
    return (
        <section className="flex flex-col items-center -mx-5 relative overflow-hidden bg-gray-50 py-20">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"/>
            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-primary_text">Services</h1>
                    <p className="text-muted_text text-sm m-3">
                        <span className="block">Clear, focused services designed to help businesses</span>
                        <span className="block">launch and scale</span>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mt-5">
                    <div className="flex flex-col gap-2 items-center p-5  w-[300px] rounded-xl border border-slate-200  shadow-sm bg-white transition  hover:shadow-md">
                        <div className="mb-1 inline-flex h-7 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-600 ">
                            <FaPager fontSize={20}/>
                        </div>
                        <h1 >Landing Pages</h1>
                        <p className="text-sm text-muted_text">
                            High-performance, conversion-focused websites built to turn visitors into leads.
                        </p>
                    </div>
                    <div className="flex flex-col  gap-2 items-center p-5 w-[300px] rounded-xl border border-slate-200  shadow-sm bg-white transition  hover:shadow-md">
                        <div className="mb-1 inline-flex h-7 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-600">
                            <FaMedapps fontSize={20}/>
                        </div>
                        <h1>Full-Stack Web Apps</h1>
                        <p className="text-sm text-muted_text">
                            Scalable web applications with clean architecture and secure APIs.
                        </p>
                    </div>
                    <div className="flex flex-col  gap-2 items-center p-5 w-[300px] rounded-xl border border-slate-200  shadow-sm bg-white transition  hover:shadow-md">
                        <div className="mb-1 inline-flex h-7 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-600">
                            <GrOptimize fontSize={20}/>
                        </div>
                        <h1 >Performance & Optimization</h1>
                        <p className="text-sm text-muted_text">
                            Improve load times, accessibility, and reliability for better user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}