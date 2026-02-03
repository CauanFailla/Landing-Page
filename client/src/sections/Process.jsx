const processes = [
    {title: "Planning", description: "We discuss your goals, requirements, and timeline."},
    {title: "Development", description: "We design and build a clean, scalable solution."},
    {title: "Launch", description: "Project launch and we provide post-launch support if needed."}
]

export default function Process() {
    return (
        <section className="relative -mx-5 py-24 bg-gray-50">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"/>
            <div className="mx-auto max-w-6xl px-5">
                <div className="text-center">
                    <p className="text-accent text-sm">PROCESS</p>
                    <h2 className="text-3xl font-semibold text-primary_text">Process Overview</h2>
                </div>
                <ol className="flex flex-wrap justify-center gap-10 mt-10 text-sm">
                    {processes.map((p, i)=>(
                        <li key={p.title} className="flex w-80">
                            <span aria-hidden="true" className="mb-1 inline-flex h-8  items-center justify-center rounded-full bg-slate-100 px-2 text-base font-medium text-slate-600 mr-5 ">0{i+1}</span>
                            <div>
                                <h3 className="text-lg font-semibold">{p.title}</h3>
                                <p className="text-muted_text ">{p.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}