"use client"

import { PageTransition } from "@/components/page-transition"

export default function DrawRulesPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-24 px-6">
                <div className="space-y-4 mb-20 text-center">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Game Protocol</span>
                    <h1 className="text-6xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Draw Rules.
                    </h1>
                </div>

                <div className="prose prose-neutral max-w-none space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">1. Eligibility</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            Subscribers must maintain an active membership and have at least 5 verified Stableford rounds (scores 1-45) within the Rolling 5 Protocol to be eligible for the monthly Oracle draw.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">2. Prize Distribution</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            Prize pools are divided according to the 40/35/25 split. Results are definitive once published to the Ledger by the Operator consensus.
                        </p>
                    </section>

                    <p className="pt-12 text-xs text-neutral-400 font-medium italic border-t border-neutral-100">
                        Authorized Protocol for 2026 Season.
                    </p>
                </div>
            </div>
        </PageTransition>
    )
}
