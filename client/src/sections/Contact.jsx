export default function Contact() {
    return (
        <section className="relative -mb-16 z-10 pt-20">
            <div className="flex justify-between items-center flex-wrap gap-5 max-w-5xl mx-auto px-8 py-12  bg-white rounded-md shadow-md shadow-gray-100 border border-gray-100">
                <div>
                    <h2 className="text-2xl font-semibold text-primary_text">Let’s work together</h2>
                    <p className="text-muted_text text-sm">Have a project in mind? Tell me about it.</p>
                </div>
                <div className="w-full sm:w-auto">
                    <button type="button" className="w-full sm:w-auto bg-accent text-white font-medium px-6 py-3 rounded-md hover:opacity-90 duration-200">Get in touch</button>
                </div>
            </div>
        </section>
    )
}