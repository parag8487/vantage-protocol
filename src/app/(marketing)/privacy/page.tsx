"use client"

import { PageTransition } from "@/components/page-transition"

export default function PrivacyPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-24 px-6">
                <div className="space-y-4 mb-20 text-center">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Identity Protocol</span>
                    <h1 className="text-6xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Privacy Policy.
                    </h1>
                </div>

                <div className="prose prose-neutral max-w-none space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">1. Data Encryption</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            All user telemetry, including Stableford round history and donation preferences, is stored using AES-256 standard encryption. Your identity is anonymized within the Oracle layer.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-neutral-900 font-serif italic">2. Metric Synchronization</h2>
                        <p className="text-neutral-500 leading-relaxed font-medium">
                            Your performance data is synchronized solely with the Vantage Ledger for draw eligibility. We do not transmit PII (Personally Identifiable Information) to third-party marketing entities.
                        </p>
                    </section>

                    <p className="pt-12 text-xs text-neutral-400 font-medium italic border-t border-neutral-100">
                        Version 2.1. Certified Compliance 2026.
                    </p>
                </div>
            </div>
        </PageTransition>
    )
}
