"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, Users, Heart, ArrowRight, Star, Target, ShieldCheck } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { PageTransition } from "@/components/page-transition"

export default function LandingPage() {
    const [stats, setStats] = useState({ totalMembers: 12450, totalPhilanthropy: 1420000, avgPool: 50000 })

    useEffect(() => {
        fetch('/api/stats').then(res => res.json()).then(data => {
            if (data.totalMembers) setStats(data)
        })
    }, [])

    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

    return (
        <PageTransition>
            <div ref={containerRef} className="relative bg-white">
                {/* Hero Section */}
                <section className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
                    <motion.div style={{ opacity, scale }} className="relative z-10 max-w-5xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center rounded-full bg-indigo-50 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 ring-1 ring-inset ring-indigo-700/10 mb-12"
                        >
                            The Luxury Charity Protocol
                        </motion.span>

                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-neutral-900 font-serif leading-[0.8] italic"
                            >
                                Play Better.
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                                className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-indigo-600 font-serif leading-[0.8] italic"
                            >
                                Give More.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 mx-auto max-w-xl text-lg leading-relaxed text-neutral-500 font-medium"
                        >
                            Transform your performance into purpose. A high-stakes subscription that funds global care while you compete for monthly $50k prize draws.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
                        >
                            <Button size="lg" className="h-20 rounded-full px-16 text-sm font-black uppercase tracking-widest shadow-2xl shadow-indigo-200 hover:scale-105 transition-all group bg-neutral-900 border-none" asChild>
                                <Link href="/signup">
                                    Initialize Membership
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Link href="/pricing" className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 hover:text-neutral-900 transition-colors">
                                View Tier Protocol
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Background Text Overlay */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center select-none overflow-hidden">
                        <span className="text-[30vw] font-black text-neutral-50 opacity-[1] tracking-tighter italic">PHILANTHROPY</span>
                    </div>
                </section>

                {/* Bento Grid Section */}
                <section className="relative bg-neutral-900 py-48 px-6 lg:px-8 z-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8 bg-neutral-800/50 border border-white/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Target className="h-64 w-64 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 block">Core Logic</span>
                                    <h2 className="text-6xl font-black tracking-tighter text-white font-serif leading-none italic mb-8">The Rolling 5 <br />Protocol.</h2>
                                    <p className="text-xl text-white/40 max-w-md font-medium leading-relaxed italic mb-12">
                                        Our proprietary algorithm maintains your five most recent rounds as an immutable validation set. This ensures integrity and rewards consistent excellence.
                                    </p>
                                    <Button variant="ghost" className="rounded-full border border-white/20 text-white font-black uppercase text-[10px] tracking-widest px-8 hover:bg-white hover:text-neutral-900 transition-all" asChild>
                                        <Link href="/impact">Read Whitepaper</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:col-span-4 flex flex-col gap-8">
                                <div className="bg-indigo-600 rounded-[3rem] p-12 text-white flex flex-col justify-between aspect-square lg:aspect-auto flex-1">
                                    <Users className="h-12 w-12 mb-8 opacity-50" />
                                    <div>
                                        <p className="text-6xl font-black font-serif italic tracking-tighter leading-none mb-4">{(stats.totalMembers / 1000).toFixed(1)}k</p>
                                        <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Active verified members</p>
                                    </div>
                                </div>
                                <div className="bg-neutral-800/50 border border-white/5 rounded-[3rem] p-12 text-white flex flex-col justify-between flex-1">
                                    <ShieldCheck className="h-12 w-12 text-emerald-500 mb-8 opacity-50" />
                                    <div>
                                        <p className="text-5xl font-black font-serif italic tracking-tighter leading-none mb-4">100%</p>
                                        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Audited Disbursement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="relative bg-neutral-50 py-32 px-6 lg:px-8 border-y border-neutral-200 z-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
                            <div className="space-y-6">
                                <div className="h-16 w-16 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-indigo-600 shadow-sm border border-neutral-100">
                                    <Star className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-neutral-900 uppercase tracking-widest">Premium Tiers</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">Curated membership levels tailored to your level of impact.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="h-16 w-16 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-indigo-600 shadow-sm border border-neutral-100">
                                    <Heart className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-neutral-900 uppercase tracking-widest">Global Reach</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">Funding everything from local youth clinics to global relief.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="h-16 w-16 bg-white rounded-[2rem] mx-auto flex items-center justify-center text-indigo-600 shadow-sm border border-neutral-100">
                                    <Trophy className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-black text-neutral-900 uppercase tracking-widest">Secure Draws</h3>
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">Transparent, RNG-verified monthly prize distributions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Charity Spotlight */}
                <section className="py-40 px-6 bg-white overflow-hidden relative z-10 border-b border-neutral-100">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-neutral-100 border border-neutral-200">
                                <img
                                    src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1200"
                                    alt="Featured Charity"
                                    className="w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 scale-105 hover:scale-100"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200";
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-12 -right-12 bg-indigo-600 text-white p-16 rounded-[3rem] shadow-2xl max-w-sm hidden lg:block border-[12px] border-white">
                                <p className="text-xs font-black uppercase tracking-[0.3em] mb-6 opacity-80">Impact Spotlight</p>
                                <p className="text-3xl font-serif italic tracking-tighter leading-tight font-black">Empowering the next generation of performance.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-10">
                            <span className="bg-indigo-50 text-indigo-700 px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] border border-indigo-100 shadow-sm">Charter Partner</span>
                            <h2 className="text-7xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">Youth Golf <br />Foundation.</h2>
                            <p className="text-xl text-neutral-500 font-medium leading-relaxed italic max-w-xl">
                                A portion of every Vantage subscription goes directly to funding equipment and professional coaching for inner-city youth programs.
                            </p>
                            <div className="space-y-5 py-6 border-y border-neutral-100">
                                <div className="flex items-center gap-5 text-neutral-900 group">
                                    <div className="h-1 w-8 bg-indigo-600 rounded-full group-hover:w-12 transition-all" />
                                    <span className="text-sm font-black uppercase tracking-widest">1,200+ Scholarships Issued</span>
                                </div>
                                <div className="flex items-center gap-5 text-neutral-900 group">
                                    <div className="h-1 w-8 bg-indigo-600 rounded-full group-hover:w-12 transition-all" />
                                    <span className="text-sm font-black uppercase tracking-widest">Global Outreach Projects</span>
                                </div>
                            </div>
                            <Button className="h-20 rounded-full px-16 bg-neutral-900 text-white font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl hover:bg-neutral-800 hover:-translate-y-1 transition-all" asChild>
                                <Link href="/impact">View Impact Protocol</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
