"use client"

import { PageTransition } from "@/components/page-transition"

export default function TermsPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-24 px-6">
                <div className="space-y-4 mb-20 text-center">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Legal Protocol</span>
                    <h1 className="text-6xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Terms of Service.
                    </h1>
                </div>

                <div className="prose prose-neutral max-w-none space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">1. Protocol Acceptance</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            By initializing a Vantage membership, you agree to abide by the systemic constraints and draw protocols established herein. This platform is designed for charitable impact and high-performance gaming.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">2. Rolling 5 Integrity</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            The 'Rolling 5' logic is immutable. Round verification is subject to Oracle consensus. Any attempt to circumvent the algorithmic selection will result in immediate protocol suspension.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">3. Philanthropic Allocation</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            A minimum of 10% of all platform jackpots are diverted to verified charitable beneficiaries. These allocations are deterministic and recorded on the platform ledger.
                        </p>
                    </section>

                    <p className="pt-12 text-xs text-neutral-400 font-medium italic border-t border-neutral-100">
                        Last Modified: April 2026. Vantage Protocol (UK) Ltd.
                    </p>
                </div>
            </div>
        </PageTransition>
    )
}
