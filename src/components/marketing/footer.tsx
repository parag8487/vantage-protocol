export function Footer() {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200 pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-black font-serif tracking-tighter text-neutral-900 mb-6 block">VANTAGE.</span>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                            Architecting a new paradigm in charitable gaming. High stakes, higher impact.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="/charities" className="hover:text-indigo-600 transition-colors">Charities</a></li>
                            <li><a href="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                            <li><a href="/faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                            <li><a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="/draw-rules" className="hover:text-indigo-600 transition-colors">Draw Rules</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-widest mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded-full bg-neutral-200" />
                            <div className="h-10 w-10 rounded-full bg-neutral-200" />
                            <div className="h-10 w-10 rounded-full bg-neutral-200" />
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-xs font-medium">
                    <p>© 2026 Vantage Protocol. Built for Impact.</p>
                    <p>UK & EU Compliance Certified</p>
                </div>
            </div>
        </footer>
    )
}
