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
    const [stats, setStats] = useState({ totalMembers: 12450, avgPool: 50000 })

    useEffect(() => {
        fetch('/api/stats').then(res => res.json()).then(data => {
            if (data.totalMembers) setStats(data)
        })
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
                        <span className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">
                            <Terminal className="h-3 w-3" /> Execution Deck
                        </span>
                        <h1 className="text-5xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">Monthly Draw Engine</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Secure terminal for monthly jackpot execution and algorithmic verification.</p>
                    </div>
                    <div className="flex items-center gap-4 p-2 bg-neutral-100 rounded-2xl">
                        <Badge variant="outline" className="bg-white border-neutral-200 py-1.5 px-4 font-black text-[10px]">AUTH_LEVEL: LEVEL_4</Badge>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card className="border-neutral-200/60 shadow-sm rounded-[2rem] bg-white overflow-hidden p-0">
                        <div className="p-8">
                            <div className="flex justify-between items-center">
                                <CardDescription className="uppercase tracking-[0.2em] text-[10px] font-black text-neutral-400">Eligible Base</CardDescription>
                                <Users className="h-4 w-4 text-neutral-300" />
                            </div>
                            <CardTitle className="text-5xl mt-4 font-serif italic text-neutral-900">{stats.totalMembers.toLocaleString()}</CardTitle>
                        </div>
                    </Card>
                    <Card className="border-neutral-200/60 shadow-sm rounded-[2rem] bg-white overflow-hidden">
                        <div className="p-8">
                            <div className="flex justify-between items-center">
                                <CardDescription className="uppercase tracking-[0.2em] text-[10px] font-black text-neutral-400">Active Pool</CardDescription>
                                <Wallet className="h-4 w-4 text-emerald-500" />
                            </div>
                            <CardTitle className="text-5xl mt-4 font-serif italic text-emerald-600">${stats.avgPool.toLocaleString()}</CardTitle>
                        </div>
                    </Card>
                    <Card className="rounded-[2rem] bg-indigo-600 text-white border-none overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <CheckCircle2 className="h-12 w-12" />
                        </div>
                        <div className="p-8">
                            <CardDescription className="uppercase tracking-[0.2em] text-[10px] font-black text-indigo-200">Draw Window</CardDescription>
                            <CardTitle className="text-5xl mt-4 font-serif italic">Open</CardTitle>
                        </div>
                    </Card>
                </div>

                <Card className="border-neutral-200/60 shadow-2xl shadow-neutral-100 rounded-[3rem] bg-white overflow-hidden">
                    <div className="bg-neutral-900 px-8 py-5 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500/50" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                            <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                        </div>
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">ADMIN://SECURE_RUNTIME</span>
                    </div>
                    <CardContent className="p-12">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-neutral-900 tracking-tight">Master Execution Protocol</h3>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                        Initiating the draw will perform an atomic sequence: lock subscriber scores, execute RNG matching, partition the pool, and notify the audited winners via Resend SMTP.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Button
                                        size="lg"
                                        className="rounded-[1.5rem] h-20 font-black w-full bg-indigo-600 hover:bg-indigo-700 shadow-2xl shadow-indigo-100 group transition-all"
                                        onClick={runSimulation}
                                        disabled={isSimulating}
                                    >
                                        {isSimulating ? (
                                            <span className="flex items-center gap-3">
                                                <RotateCcw className="h-5 w-5 animate-spin" />
                                                Running Oracle Engine...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-3">
                                                <Play className="h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                                                Launch Protocol Simulation
                                            </span>
                                        )}
                                    </Button>
                                    <Button variant="outline" size="lg" className="rounded-[1.5rem] h-16 font-bold w-full border-neutral-200 hover:bg-neutral-50">
                                        Refresh Participant Cache
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-neutral-50 rounded-[2.5rem] p-12 border border-neutral-100 flex flex-col items-center text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="h-20 w-20 rounded-[2rem] bg-white border border-neutral-200 flex items-center justify-center mb-8 shadow-sm relative z-10">
                                    <ShieldCheck className="h-10 w-10 text-neutral-900" />
                                </div>
                                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 relative z-10">Security Gate</p>
                                <p className="text-xs text-neutral-500 font-bold mb-10 italic relative z-10">Verification required via Biometric MFA before production commitment.</p>
                                <div className="flex items-center gap-3 text-amber-600 bg-amber-50 px-6 py-3 rounded-2xl relative z-10 border border-amber-100">
                                    <AlertTriangle className="h-4 w-4" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.1em]">Irreversible Chain Action</span>
                                </div>
                            </div>
                        </div>

                        {(isSimulating || simData) && (
                            <div className="mt-20 p-10 bg-neutral-900 rounded-[2.5rem] text-emerald-400 font-mono text-xs space-y-4 animate-in fade-in slide-in-from-bottom-8">
                                <p className="flex items-center gap-3">
                                    <span className={`h-2 w-2 rounded-full ${isSimulating ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500'}`} />
                                    [SYSTEM] : Oracle state: {isSimulating ? 'PROCESSING' : 'FINALIZED'}
                                </p>
                                {simData && (
                                    <>
                                        <p className="ml-5 text-indigo-400 font-black tracking-widest">[NUMBERS] : {simData.winningNumbers.join(', ')}</p>
                                        <p className="ml-5 text-white/50">[STATS] : Matches(5): {simData.matches5} | Matches(4): {simData.matches4} | Matches(3): {simData.matches3}</p>
                                        <p className="ml-5 text-emerald-500 font-bold">[POOL] : ${simData.poolTotal?.toLocaleString() || '50,000'} successfully partitioned.</p>
                                    </>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </PageTransition>
    )
}
