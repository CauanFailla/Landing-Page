export default function Contact() {
    return (
        <section className="relative -mb-16 z-10 pt-20 ">
            <div className="flex justify-between mx-auto items-center bg-white max-w-5xl rounded-md px-8 py-12 shadow-sm border-[1px] border-gray-200">
                <div>
                    <h1 className="text-2xl font-semibold text-primary_text">Let’s work together</h1>
                    <p className="text-muted_text text-sm">
                        Have a project in mind? Tell me about it.
                    </p>
                </div>
                <div>
                    <button className="bg-accent text-white font-medium px-6 py-3 rounded-md">Get in touch</button>
                </div>
            </div>
        </section>
    )
}