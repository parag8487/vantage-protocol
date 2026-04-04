"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle2, Lock, Cpu, Globe, Search } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { Badge } from "@/components/ui/badge"

export default function VerificationPage() {
    const proofs = [
        { id: "DRAW-2026-03", date: "March 15, 2026", hash: "0x8f2a...de91", status: "VERIFIED", numbers: [4, 12, 22, 31, 44] },
        { id: "DRAW-2026-02", date: "February 15, 2026", hash: "0x31b4...ac02", status: "VERIFIED", numbers: [7, 19, 21, 38, 41] },
        { id: "DRAW-2026-01", date: "January 15, 2026", hash: "0x99e1...ff22", status: "VERIFIED", numbers: [2, 11, 25, 33, 45] }
    ]

    return (
        <PageTransition>
            <div className="max-w-5xl mx-auto py-24 px-6">
                <div className="space-y-4 mb-20 text-center">
                    <span className="flex items-center justify-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">
                        <Shield className="h-3 w-3" /> Oracle Verification Protocol
                    </span>
                    <h1 className="text-6xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Transparent. Audited.
                    </h1>
                    <p className="text-neutral-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                        Every Vantage draw is executed via an isolated Oracle layer, producing a cryptographic proof recorded on the platform ledger.
                    </p>
                </div>

                <div className="grid gap-12 sm:grid-cols-3 mb-24">
                    {[
                        { icon: Lock, label: "Encrypted", desc: "SHA-256 Hashed Results" },
                        { icon: Cpu, label: "Deterministic", desc: "Zero-Human Intervention" },
                        { icon: Globe, label: "Publicly Audited", desc: "Third-party Compliance" }
                    ].map((feat, i) => (
                        <div key={i} className="space-y-4 text-center">
                            <div className="mx-auto h-12 w-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-indigo-600">
                                <feat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-neutral-900 uppercase tracking-widest text-xs">{feat.label}</h3>
                            <p className="text-sm text-neutral-400 font-medium">{feat.desc}</p>
                        </div>
                    ))}
                </div>

                <Card className="rounded-[3rem] border-neutral-200/60 overflow-hidden shadow-2xl shadow-indigo-100/50">
                    <CardHeader className="bg-neutral-900 text-white p-12">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-3xl font-serif italic mb-2">Registry Ledger</CardTitle>
                                <CardDescription className="text-white/40 font-black uppercase tracking-widest text-[10px]">Official Historical Proofs</CardDescription>
                            </div>
                            <div className="hidden md:flex items-center gap-2 text-emerald-400 font-mono text-[10px]">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                SYSTEM_NODE_ACTIVE
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-neutral-100">
                            {proofs.map((proof) => (
                                <div key={proof.id} className="p-12 hover:bg-neutral-50/50 transition-all group">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <h4 className="text-xl font-bold text-neutral-900 tracking-tight">{proof.id}</h4>
                                                <Badge className="bg-emerald-100 text-emerald-700 border-none text-[9px] uppercase">{proof.status}</Badge>
                                            </div>
                                            <p className="text-xs text-neutral-400 font-medium">Finalized on {proof.date}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {proof.numbers.map((n, i) => (
                                                <div key={i} className="h-10 w-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center font-black text-xs text-indigo-600 shadow-sm group-hover:border-indigo-200 transition-all">
                                                    {n}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">Audit Hash</p>
                                            <code className="text-[10px] font-mono bg-neutral-100 p-2 rounded-lg text-neutral-600">{proof.hash}</code>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-20 text-center">
                    <p className="text-xs text-neutral-400 font-medium italic">
                        For deep-audit requirements, please contact <span className="text-indigo-600 font-bold underline">compliance@vantage.io</span>
                    </p>
                </div>
            </div>
        </PageTransition>
    )
}
