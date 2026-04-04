"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { PageTransition } from "@/components/page-transition"
import { HelpCircle, Shield, Trophy, Heart } from "lucide-react"

export default function FAQPage() {
    const faqs = [
        {
            category: "The Protocol",
            icon: Shield,
            items: [
                { q: "What is the 'Rolling 5' logic?", a: "The system automatically retains your top 5 most recent rounds. When you submit a 6th round, the oldest verified round is archived to maintain the protocol integrity." },
                { q: "Is the platform audited?", a: "Yes. Every draw is executed via an isolated Oracle layer, producing a cryptographic proof recorded on our public Ledger." }
            ]
        },
        {
            category: "Earnings & Odds",
            icon: Trophy,
            items: [
                { q: "How are prize pools calculated?", a: "Prize pools are dynamically calculated based on active subscriber telemetry and the monthly allocation split (40% Tier 1, 35% Tier 2, 25% Tier 3)." },
                { q: "What are the Stableford requirements?", a: "Any verified Stableford round between 1 and 45 points is eligible for the Rolling 5 protocol." }
            ]
        },
        {
            category: "Impact",
            icon: Heart,
            items: [
                { q: "Can I change my charity preference?", a: "Yes. Impact targets can be modified anytime within the 'Preferences' terminal in your secure Dashboard." },
                { q: "Are donations tax-deductible?", a: "Vantage provides monthly impact summaries that can be used for philanthropic record-keeping as per UK/EU guidelines." }
            ]
        }
    ]

    return (
        <PageTransition>
            <div className="max-w-4xl mx-auto py-24 px-6">
                <div className="text-center space-y-4 mb-20">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em]">Knowledge Base</span>
                    <h1 className="text-6xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                        Protocol Intelligence.
                    </h1>
                    <p className="text-neutral-500 font-medium max-w-xl mx-auto text-lg leading-relaxed">
                        Definitive answers to common inquiries regarding Vantage operations and systemic integrity.
                    </p>
                </div>

                <div className="space-y-16">
                    {faqs.map((cat, i) => (
                        <div key={i} className="space-y-6">
                            <div className="flex items-center gap-3 text-neutral-900">
                                <cat.icon className="h-5 w-5 text-indigo-600" />
                                <h3 className="text-xs font-black uppercase tracking-[0.2em]">{cat.category}</h3>
                            </div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {cat.items.map((item, j) => (
                                    <AccordionItem key={j} value={`${i}-${j}`} className="border-neutral-200/60 rounded-[2rem] px-8 bg-white shadow-sm overflow-hidden border">
                                        <AccordionTrigger className="text-left font-bold text-neutral-900 hover:no-underline py-6">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-neutral-500 font-medium leading-relaxed pb-6 pr-12">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-neutral-900 rounded-[3rem] text-center text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <HelpCircle className="h-48 w-48 rotate-12" />
                    </div>
                    <h3 className="text-2xl font-serif italic mb-4 relative z-10">Still Unsure?</h3>
                    <p className="text-white/50 text-sm mb-8 relative z-10 max-w-sm mx-auto">Our support Oracle is available 24/7 for technical and protocol assistance.</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 h-14 font-black uppercase text-[10px] tracking-widest transition-all relative z-10">
                        Inquire Protocol
                    </button>
                </div>
            </div>
        </PageTransition>
    )
}
