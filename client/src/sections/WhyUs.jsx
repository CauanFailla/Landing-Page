import founder from "../assets/img/founder.jpg"

export default function WhyUs() {
    return (
        <section class="py-24">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex justify-between flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div class="w-full md:w-1/3 lg:w-1/4">
                        <div class="relative">
                            <div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                            <img src={team} alt="Image" class="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"/>
                        </div>
                    </div>

                    <div class="w-full md:w-2/3">
                        <p class="text-accent uppercase text-sm mb-3">Why Devora?</p>
                        <h1 class="text-3xl font-semibold text-primary_text mb-3 leading-tight">"Fast, clean websites that stay focused on outcomes"</h1>
                        <div class="space-y-3 text-sm text-slate-600 leading-relaxed">
                            <p>Devora was built for teams that want a polished build without the bloat—performance-first, accessible, and easy to maintain.</p>
                            <ul class=" text-slate-600 ">
                                <li class="flex gap-3">
                                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Performance-first architecture and front-end best practices.</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Clean, scalable code that’s straightforward to extend.</span>
                                </li>
                                <li class="flex gap-3">
                                    <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    <span>Thoughtful UX and accessibility-minded implementation.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="mt-5">
                            <p class="font-semibold text-primary_text text-lg">Elliot Marrow</p>
                            <p class="text-accent text-sm font-medium">Founder & Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}