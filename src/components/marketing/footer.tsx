import { Trophy, ShieldCheck, Globe, Award } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="py-32 px-6 border-t border-neutral-100 bg-neutral-50 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center">
                                <Trophy className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-serif text-3xl font-black tracking-tighter uppercase italic leading-none">VANTAGE</span>
                        </div>
                        <p className="text-sm text-neutral-500 font-medium leading-relaxed max-w-[240px]">
                            Architecting a new paradigm in charitable gaming. High stakes, higher impact.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-neutral-900">Protocol</h4>
                        <ul className="space-y-4">
                            <li><Link href="/charities" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Impact Directory</Link></li>
                            <li><Link href="/pricing" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Yield Protocol</Link></li>
                            <li><Link href="/verification" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Verification</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-neutral-900">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/terms" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Service Terms</Link></li>
                            <li><Link href="/privacy" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Privacy Shield</Link></li>
                            <li><Link href="/draw-rules" className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-medium">Draw Rules</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-neutral-900">Registry</h4>
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center hover:bg-neutral-50 cursor-pointer transition-all">
                                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center hover:bg-neutral-50 cursor-pointer transition-all">
                                <Globe className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center hover:bg-neutral-50 cursor-pointer transition-all">
                                <Award className="h-5 w-5 text-indigo-600" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.4em]">© 2026 Vantage Protocol. Built for Global Care.</p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            ISO 27001 Certified
                        </span>
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest italic">UK & EU Compliance</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
