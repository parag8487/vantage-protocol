"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, Users, Heart, ArrowRight, CheckCircle2, Star, Target, ShieldCheck } from "lucide-react"
import { useRef, useState, useEffect } from "react"

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
        <div ref={containerRef} className="relative min-h-[200vh] bg-white selection:bg-indigo-100 selection:text-indigo-900">
            {/* Floating Navbar */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl">
                <div className="rounded-full border border-neutral-200/50 bg-white/70 px-6 py-3 backdrop-blur-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            <Trophy className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-serif text-xl font-black tracking-tighter uppercase italic">Vantage.</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/charities" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Charities</Link>
                        <Link href="/pricing" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Membership</Link>
                        <Link href="/login" className="text-[10px] font-black uppercase tracking-widest text-neutral-900">Sign In</Link>
                        <Button size="sm" className="rounded-full px-6 font-black uppercase text-[10px] tracking-widest h-10" asChild>
                            <Link href="/signup">Join Protocol</Link>
                        </Button>
                    </div>
                </div>
            </nav>

            <section className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
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
                        <Link href="/pricing" className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-neutral-900 transition-colors">
                            View Tier Protocol
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Background Text Overlay */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center select-none overflow-hidden">
                    <span className="text-[30vw] font-black text-neutral-50 opacity-[0.02] tracking-tighter italic">PHILANTHROPY</span>
                </div>
            </section>

            {/* Features / Bento Section */}
            <section className="relative bg-neutral-900 py-48 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 bg-neutral-800/50 border border-white/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <Target className="h-64 w-64 text-white" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Core Logic</span>
                                <h2 className="text-5xl lg:text-7xl font-black text-white font-serif italic tracking-tighter leading-none">The Rolling 5 <br />Protocol.</h2>
                                <p className="text-xl text-white/40 max-w-md font-medium leading-relaxed italic">
                                    Our proprietary algorithm maintains your five most recent rounds as an immutable validation set. This ensures integrity and rewards consistent excellence.
                                </p>
                                <Button variant="outline" className="h-14 rounded-full border-white/10 bg-white/5 text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-neutral-900 border-none backdrop-blur-xl px-10">
                                    Read Whitepaper
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-indigo-600 rounded-[3rem] p-12 text-white flex flex-col justify-between h-full group hover:scale-[1.02] transition-transform duration-500">
                                <Users className="h-12 w-12 opacity-50 mb-8" />
                                <div>
                                    <p className="text-5xl font-black font-serif italic tracking-tighter leading-none mb-4">
                                        {(stats.totalMembers / 1000).toFixed(1)}k
                                    </p>
                                    <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em]">Active verified members</p>
                                </div>
                            </div>
                            <div className="bg-neutral-800/50 border border-white/5 rounded-[3rem] p-12 text-white flex flex-col justify-between h-full">
                                <ShieldCheck className="h-12 w-12 text-emerald-500 mb-8 opacity-50" />
                                <div>
                                    <p className="text-5xl font-black font-serif italic tracking-tighter leading-none mb-4">100%</p>
                                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Audited Disbursement</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
                        <div className="space-y-6">
                            <div className="h-16 w-16 bg-white/5 rounded-3xl mx-auto flex items-center justify-center text-indigo-400 border border-white/5">
                                <Star className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">Premium Tiers</h3>
                            <p className="text-sm text-white/30 font-medium leading-relaxed italic">Curated membership levels tailored to your level of impact.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="h-16 w-16 bg-white/5 rounded-3xl mx-auto flex items-center justify-center text-indigo-400 border border-white/5">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">Global Reach</h3>
                            <p className="text-sm text-white/30 font-medium leading-relaxed italic">Funding everything from local youth clinics to global relief.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="h-16 w-16 bg-white/5 rounded-3xl mx-auto flex items-center justify-center text-indigo-400 border border-white/5">
                                <Trophy className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">Secure Draws</h3>
                            <p className="text-sm text-white/30 font-medium leading-relaxed italic">Transparent, RNG-verified monthly prize distributions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-24 px-6 border-t border-neutral-100 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-neutral-900 flex items-center justify-center">
                            <Trophy className="h-3 w-3 text-white" />
                        </div>
                        <span className="font-serif text-lg font-black tracking-tighter uppercase italic">Vantage.</span>
                    </div>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Protocol</Link>
                        <Link href="/legal" className="text-[10px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Compliance</Link>
                    </div>
                    <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest">© 2026 Vantage Protocol</p>
                </div>
            </footer>
        </div>
    )
}
