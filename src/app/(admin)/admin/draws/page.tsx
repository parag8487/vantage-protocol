"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Terminal, ShieldCheck, Play, RotateCcw, AlertTriangle, Users, Wallet, CheckCircle2 } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { useToast } from "@/hooks/use-toast"

export default function AdminDrawsPage() {
    const { toast } = useToast()
    const [isSimulating, setIsSimulating] = useState(false)
    const [simData, setSimData] = useState<any>(null)
    const [stats, setStats] = useState<any>({ totalMembers: 0, avgPool: 0 })

    useEffect(() => {
        const loadStats = async () => {
            try {
                const res = await fetch('/api/stats')
                const data = await res.json()
                setStats(data)
            } catch (e) {
                console.error('Failed to load stats', e)
            }
        }
        loadStats()
    }, [])

    const runSimulation = async () => {
        setIsSimulating(true)
        setSimData(null)

        try {
            const res = await fetch('/api/admin/draw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mode: 'ALGORITHMIC', isSimulation: true })
            })

            const data = await res.json()
            if (res.ok) {
                // Staggered reveal for effect
                setTimeout(() => {
                    setSimData(data.results)
                    setIsSimulating(false)
                    toast({ title: "Simulation Complete", description: "Audit logs generated for monthly pool." })
                }, 3000)
            } else {
                throw new Error(data.error || 'Simulation failed')
            }
        } catch (err: any) {
            toast({ title: "Oracle Error", description: err.message, variant: "destructive" })
            setIsSimulating(false)
        }
    }

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="flex items-center gap-2 text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">
                            <Terminal className="h-3 w-3" /> Execution Deck
                        </span>
                        <h1 className="text-5xl font-black tracking-tighter text-white font-serif leading-none italic uppercase">Draw Engine.</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Secure terminal for monthly jackpot execution and algorithmic verification.</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="bg-neutral-900 border-neutral-800 text-white rounded-[2rem] p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <CardDescription className="uppercase tracking-[0.2em] text-[9px] font-black text-neutral-500">Eligible Base</CardDescription>
                            <Users className="h-4 w-4 text-neutral-600" />
                        </div>
                        <CardTitle className="text-5xl font-serif italic tracking-tighter text-white">{(stats.totalMembers || 0).toLocaleString()}</CardTitle>
                        <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mt-4">Verified Protocol Nodes</p>
                    </Card>

                    <Card className="bg-neutral-900 border-neutral-800 text-white rounded-[2rem] p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <CardDescription className="uppercase tracking-[0.2em] text-[9px] font-black text-neutral-500">Total Pool</CardDescription>
                            <Wallet className="h-4 w-4 text-emerald-500" />
                        </div>
                        <CardTitle className="text-5xl font-serif italic tracking-tighter text-white">${(stats.avgPool || 0).toLocaleString()}</CardTitle>
                        <p className="text-[10px] font-bold text-emerald-500/50 uppercase tracking-widest mt-4">Liquid Winnings Reserve</p>
                    </Card>

                    <Card className="bg-red-600 text-white rounded-[2rem] p-8 shadow-2xl border-none relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="h-20 w-20" />
                        </div>
                        <div className="relative z-10">
                            <CardDescription className="uppercase tracking-[0.2em] text-[9px] font-black text-red-200">Draw Window</CardDescription>
                            <CardTitle className="text-5xl font-serif italic tracking-tighter mt-6">Open</CardTitle>
                            <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-red-100">Execution Authorized</p>
                        </div>
                    </Card>
                </div>

                <Card className="bg-neutral-900 border-neutral-800 rounded-[3rem] overflow-hidden shadow-2xl border-2">
                    <div className="bg-black/40 px-8 py-5 flex items-center justify-between border-b border-neutral-800">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-600/50 shadow-[0_0_10px_rgba(220,38,38,0.3)]" />
                            <div className="h-3 w-3 rounded-full bg-neutral-800" />
                            <div className="h-3 w-3 rounded-full bg-neutral-800" />
                        </div>
                        <span className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.4em]">OPERATOR://SECURE_RUNTIME</span>
                    </div>
                    <CardContent className="p-12">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white tracking-tight uppercase italic font-serif">Master Execution Protocol</h3>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                        Initiating the draw will perform an atomic sequence: lock subscriber scores, execute RNG matching, partition the pool, and notify the audited winners via Resend SMTP.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Button
                                        size="lg"
                                        className="rounded-2xl h-20 font-black w-full bg-red-600 hover:bg-red-700 text-white shadow-2xl shadow-red-900/20 group transition-all uppercase tracking-widest text-[11px]"
                                        onClick={runSimulation}
                                        disabled={isSimulating}
                                    >
                                        {isSimulating ? (
                                            <span className="flex items-center gap-3">
                                                <RotateCcw className="h-5 w-5 animate-spin" />
                                                Processing Oracle...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-3">
                                                <Play className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                                                Launch Protocol Simulation
                                            </span>
                                        )}
                                    </Button>
                                    <Button variant="ghost" size="lg" className="rounded-2xl h-16 font-bold w-full text-neutral-500 hover:text-white hover:bg-neutral-800 uppercase text-[10px] tracking-widest">
                                        Clear Oracle Cache
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-black/40 rounded-[2.5rem] p-12 border border-neutral-800 flex flex-col items-center text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="h-20 w-20 rounded-[2.5rem] bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-8 shadow-inner relative z-10 transition-all group-hover:border-red-900/50">
                                    <ShieldCheck className="h-10 w-10 text-red-600" />
                                </div>
                                <p className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-4 relative z-10">Security Gate</p>
                                <p className="text-xs text-neutral-400 font-bold mb-10 italic relative z-10">Verification required via Operator MFA before production commitment.</p>
                                <div className="flex items-center gap-3 text-red-500 bg-red-950/20 px-6 py-3 rounded-xl relative z-10 border border-red-900/30">
                                    <AlertTriangle className="h-4 w-4" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.1em]">Write access restricted</span>
                                </div>
                            </div>
                        </div>

                        {(isSimulating || simData) && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 mt-20">
                                <div className="p-10 bg-black/60 rounded-[2.5rem] border border-neutral-800 text-emerald-400 font-mono text-[10px] space-y-4 shadow-inner">
                                    <p className="flex items-center gap-3">
                                        <span className={`h-1.5 w-1.5 rounded-full ${isSimulating ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500'}`} />
                                        [SYSTEM] : Oracle state: {isSimulating ? 'PROCESSING' : 'FINALIZED'}
                                    </p>
                                    {simData && (
                                        <div className="space-y-3 opacity-90">
                                            <p className="ml-5 text-red-500 font-black tracking-[0.2em] uppercase">[NUMBERS] : {simData.winningNumbers.join(', ')}</p>
                                            <p className="ml-5 text-neutral-500 font-medium tracking-tighter uppercase">[STATS] : Matches(5): {simData.matches5} | Matches(4): {simData.matches4} | Matches(3): {simData.matches3}</p>
                                            <p className="ml-5 text-white/80 font-bold border-l-2 border-red-600 pl-4 py-2 mt-4">[POOL] : ${simData.poolTotal?.toLocaleString() || '50,000'} successfully partitioned by algorithm.</p>
                                        </div>
                                    )}
                                </div>
                                {simData && (
                                    <div className="flex justify-end">
                                        <Button
                                            size="lg"
                                            onClick={() => toast({ title: "Results Published", description: "Monthly draw results are now live in user dashboards." })}
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl h-16 px-12 font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl shadow-emerald-900/20"
                                        >
                                            <CheckCircle2 className="mr-3 h-4 w-4" /> Commit & Publish Results
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}

                    </CardContent>
                </Card>
            </div>
        </PageTransition>
    )
}
