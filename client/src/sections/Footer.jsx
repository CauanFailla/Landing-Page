import { TbSquareLetterDFilled } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-gray-100 p-28 pb-2">
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-1">
                        <TbSquareLetterDFilled className="text-accent"  size={35}/>
                        <h1 className="text-xl font-semibold text-primary_text">Devora</h1>
                    </div>
                    <div className="my-3">
                        <p className="text-sm text-muted_text">
                            <span className="block">High-quality web experiences built</span>
                            <span className="block">for performance.</span>
                        </p>
                    </div>
                </div>
                <div className="flex gap-20">
                    <div>
                        <p className="text-sm font-medium text-slate-900">Navigation</p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            <li>Services</li>
                            <li>Process</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-900">Contact</p>
                        <p className="mt-3 text-sm text-slate-600">
                            +1-347-829-5614
                        </p>
                        <p className="mt-3 text-sm text-slate-600">
                            hello@devora.dev
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-10">
                © 2026 Devora. All rights reserved
            </div>
        </footer>
    )
}