import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
    return (
        <section className="flex flex-col items-center pt-28 pb-16">
            <div className="flex items-center cursor-pointer gap-1 mb-6 bg-accent text-accent text-sm bg-opacity-15 rounded-full px-4 py-1">
                <p>View featured project</p>
                <FaArrowRight fontSize={10}/>
            </div>
            <h1 className="text-center text-4xl font-semibold space-y-5 tracking-tight md:text-[3.25rem]">
                <span className="block">High-quality web experiences</span>
                <span className="block">built for performance</span>
            </h1>
            <p className="text-muted_text text-center my-6">
                <span className="block">Fast, reliable websites and web applications that help businesses</span>
                <span className="block">convert and scale</span>
            </p>
            <div className="flex gap-2">
                <button className="bg-accent text-white font-medium px-4 py-2 rounded-md">Get in touch</button>
                <button className="px-4 py-2 text-accent font-medium">See projects</button>
            </div>
        </section>
    )
}