"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, Globe, Users, TrendingUp, DollarSign, Award } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function ImpactPage() {
    const metrics = [
        { icon: DollarSign, label: "Total Raised", value: "$4.2M", desc: "Aggregate philanthropic delivery since inception." },
        { icon: Heart, label: "Charities Audited", value: "128+", desc: "Verified organizations receiving periodic metadata syncs." },
        { icon: Users, label: "Active Donors", value: "15k+", desc: "Subscribers contributing to the global impact ledger." }
    ]

    const milestones = [
        { year: "2025", title: "Protocol Genesis", desc: "First cross-border charitable gaming license secured in the UK." },
        { year: "2026", title: "Oracle Integration", desc: "Implementation of deterministic draw verification for absolute transparency." }
    ]

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto py-24 px-6">
                <div className="text-center space-y-4 mb-24">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">The Vantage Impact Ledger</span>
                    <h1 className="text-7xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Proof of Purpose.
                    </h1>
                    <p className="text-neutral-500 font-medium max-w-2xl mx-auto text-xl leading-relaxed">
                        We leverage high-performance gaming to drive systemic change. Every round played fuels the next generation of global philanthropy.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mb-32">
                    {metrics.map((m, i) => (
                        <Card key={i} className="rounded-[2.5rem] border-neutral-200/60 bg-white shadow-xl shadow-indigo-100/20 overflow-hidden group hover:border-indigo-400 transition-all">
                            <CardHeader className="p-10">
                                <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <m.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-4xl font-serif italic mb-2 tracking-tighter">{m.value}</CardTitle>
                                <CardDescription className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{m.label}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-10 pb-10">
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed">{m.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div className="relative">
                        <div className="absolute -top-24 -left-24 h-96 w-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
                        <div className="relative bg-neutral-900 rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <Globe className="h-64 w-64 rotate-12" />
                            </div>
                            <h2 className="text-4xl font-serif italic mb-8 relative z-10">Systemic Integrity.</h2>
                            <div className="space-y-12 relative z-10">
                                {milestones.map((m, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-indigo-400 font-black text-xs pt-1">{m.year}</div>
                                        <div className="space-y-2">
                                            <h4 className="font-bold text-lg">{m.title}</h4>
                                            <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-4xl font-black tracking-tighter text-neutral-900 font-serif leading-tight italic">Beyond the Jackpot.</h3>
                        <p className="text-neutral-500 font-medium text-lg leading-relaxed">
                            While the draw offers life-changing potential for our subscribers, the Vantage Protocol ensures that every participation creates a positive externality.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "100% of draw fees diverted to verified beneficiaries.",
                                "Quarterly impact audits available via the Ledger.",
                                "Direct donor influence through the Charity Selection protocol."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-sm font-bold text-neutral-700">
                                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
