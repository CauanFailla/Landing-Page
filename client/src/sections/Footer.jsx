import { TbSquareLetterDFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-gray-50 px-6 py-28 md:px-28 pb-2">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-wrap justify-between">
                    <div>
                        <div className="flex items-center gap-1">
                            <TbSquareLetterDFilled aria-hidden="true" className="text-accent" size={35}/>
                            <h2 className="text-xl font-semibold text-primary_text">Devora</h2>
                        </div>
                        <div className="my-3">
                            <p className="text-sm text-muted_text">
                                <span className="block">High-quality web experiences built</span>
                                <span className="block">for performance.</span>
                            </p>
                        </div>
                    </div>
                    <nav className="flex gap-20">
                        <div>
                            <p className="text-sm font-medium text-slate-900">Navigation</p>
                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Process</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Contact</p>
                            <p className="mt-3 text-sm text-slate-600">
                                <a href="#">+1-347-829-5614</a>
                            </p>
                            <p className="mt-3 text-sm text-slate-600">
                                <a href="#">hello@devora.dev</a>
                            </p>
                        </div>
                    </nav>
                </div>
                <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-10">
                    © 2026 Devora. All rights reserved
                </div>
            </div>
        </footer>
    )
}