import founder from "../assets/img/founder.jpg"

export default function WhyUs() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/3 lg:w-1/4">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <img src={founder} alt="Elliot Marrow, founder of Devora" className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"/>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <p className="text-accent uppercase text-sm mb-3">Why Devora?</p>
                        <h2 className="text-3xl font-semibold text-primary_text mb-3 leading-tight">"Fast, clean websites that stay focused on outcomes"</h2>
                        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                            <p>Devora was built for teams that want a polished build without the bloat—performance-first, accessible, and easy to maintain.</p>
                            <ul className=" text-slate-600 ">
                                <li className="flex gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Performance-first architecture and front-end best practices.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Clean, scalable code that’s straightforward to extend.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Thoughtful UX and accessibility-minded implementation.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold text-primary_text text-lg">Elliot Marrow</p>
                            <p className="text-accent text-sm font-medium">Founder & Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}