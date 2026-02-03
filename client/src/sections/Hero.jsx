import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="pt-28 pb-16">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    <a href="#" className="flex items-center gap-1 mb-3 px-4 py-1 bg-accent/15 text-accent text-sm rounded-full hover:bg-accent/20 duration-200">
                        <span>View featured project</span>
                        <FaArrowRight fontSize={10}/>
                    </a>
                   <h1 className="text-4xl font-semibold tracking-tight  leading-tight md:text-[3.25rem] max-w-3xl">
                        High-quality web experiences built for performance
                    </h1>
                   <p className="mt-4 text-muted_text max-w-lg">
                        Fast, reliable websites and web applications that help businesses
                        convert and scale
                    </p>
                    <div className="flex gap-2 mt-5">
                        <button type="button" className="py-2 px-4 bg-accent text-white font-medium rounded-md hover:opacity-90 duration-200">Get in touch</button>
                        <button type="button" className="py-2 px-4 text-accent font-medium hover:opacity-90">See projects</button>
                    </div>
                </div>
            </div>
        </section>
    )
}