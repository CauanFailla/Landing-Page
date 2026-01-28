export default function Process() {
    return (
        <section className="py-20">
            <div className="text-center">
                <p className="text-muted_text  text-sm">PROCESS</p>
                <h1 className="text-3xl font-semibold text-primary_text">Process Overview</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10 text-sm">
                
                <div className="flex w-80">
                    <div className="mb-1 inline-flex h-9  items-center justify-center rounded-full bg-slate-100 px-3 text-base font-medium text-slate-600 mr-5 ">
                        01
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Planning</h1>
                        <p className="text-muted_text ">We discuss your goals, requirements, and timeline.</p>
                    </div>
                </div>
                <div className="flex w-80">
                    <div className="mb-1 inline-flex h-9  items-center justify-center rounded-full bg-slate-100 px-3 text-base font-medium text-slate-600 mr-5 ">
                        02
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Development</h1>
                        <p className="text-muted_text">We design and build a clean, scalable solution</p>
                    </div>
                    
                </div>
                <div className="flex w-80">
                    <div className="mb-1 inline-flex h-9 items-center justify-center rounded-full bg-slate-100 px-3 text-base font-medium text-slate-600 mr-5 ">
                        03
                    </div>
                    <div className="">   
                        <h1 className="text-lg font-semibold">Launch</h1>
                        <p className="text-muted_text">Project launch and we provide post-launch support if needed</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}