"use client"

import Link from "next/link"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { PageTransition } from "@/components/page-transition"

export default function PricingPage() {
    const [plans, setPlans] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/plans')
            .then(res => res.json())
            .then(data => {
                setPlans(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" /></div>

    return (
        <PageTransition>
            <div className="bg-neutral-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4 block">Membership Protocol</span>
                        <h2 className="text-4xl font-black tracking-tighter text-neutral-900 sm:text-6xl font-serif italic leading-none">
                            Choose Your Level <br />of Impact.
                        </h2>
                    </div>
                    <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-neutral-500 font-medium">
                        Every subscription powers audited charities while giving you a shot at a massive monthly jackpot. 100% security. 100% transparency.
                    </p>
                    <div className="mt-20 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:max-w-5xl lg:mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative flex flex-col justify-between rounded-[3rem] bg-white p-12 shadow-2xl transition-all hover:scale-[1.02] border-neutral-200/60 ${plan.popular ? 'border-2 border-indigo-600 ring-4 ring-indigo-50 shadow-indigo-100' : 'border shadow-neutral-100'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                                        Community Leader
                                    </div>
                                )}
                                <div>
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h3 className="text-xl font-black tracking-tight text-neutral-900 uppercase italic">{plan.name}</h3>
                                    </div>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-400 italic">{plan.description}</p>
                                    <p className="mt-10 flex items-baseline gap-x-1">
                                        <span className="text-6xl font-serif font-black tracking-tighter text-neutral-900 italic">{plan.price}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">/{plan.period}</span>
                                    </p>
                                    <ul role="list" className="mt-12 space-y-6 text-sm font-medium text-neutral-500">
                                        {plan.features.map((feature: string) => (
                                            <li key={feature} className="flex gap-x-4 items-start">
                                                <div className="h-6 w-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                                                    <Check className="h-3 w-3 text-indigo-600 stroke-[4px]" aria-hidden="true" />
                                                </div>
                                                <span className="italic">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button asChild variant={plan.popular ? 'default' : 'outline'} className={`mt-12 h-20 rounded-[1.5rem] font-black uppercase text-xs tracking-widest transition-all ${plan.popular ? 'bg-neutral-900 hover:bg-neutral-800' : 'border-neutral-200'}`}>
                                    <Link href={`/signup?plan=${plan.id}`}>{plan.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 italic">PROTOCOL_NOTICE: Plans are charged in USD and processed via Stripe Secure Gateway.</p>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
