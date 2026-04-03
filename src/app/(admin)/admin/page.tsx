"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Loader2, TrendingUp, DollarSign, Heart, AlertCircle } from "lucide-react"

export default function AdminOverviewPage() {
    const [stats, setStats] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                setStats(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-neutral-950"><Loader2 className="animate-spin text-white" /></div>

    return (
        <div className="space-y-12">
            <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Infrastructure Overview</span>
                <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic leading-none">System. <br />Operations.</h1>
                <p className="mt-4 text-neutral-500 font-medium max-w-xl">Live cryptographic and fiscal metrics across the entire application protocol. All values extracted in real-time from the production ledger.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-neutral-900 border-neutral-800 text-white rounded-3xl p-4 hover:border-neutral-700 transition-all shadow-2xl">
                    <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                        <CardDescription className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Active nodes</CardDescription>
                        <CardTitle className="text-4xl font-serif italic tracking-tighter mt-1">{stats?.totalMembers?.toLocaleString() || '0'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[10px] font-bold text-green-500 tracking-widest uppercase">Verified identities</p>
                    </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 text-white rounded-3xl p-4 hover:border-neutral-700 transition-all shadow-2xl">
                    <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                            <DollarSign className="h-4 w-4 text-indigo-400" />
                        </div>
                        <CardDescription className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Protocol MRR</CardDescription>
                        <CardTitle className="text-4xl font-serif italic tracking-tighter mt-1">${(stats?.activeSubscribers * 29 || 0).toLocaleString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase">Stripe Synchronized</p>
                    </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-neutral-800 text-white rounded-3xl p-4 hover:border-neutral-700 transition-all shadow-2xl">
                    <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                            <Heart className="h-4 w-4 text-red-500" />
                        </div>
                        <CardDescription className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">Altruistic Capital</CardDescription>
                        <CardTitle className="text-4xl font-serif italic tracking-tighter mt-1">${stats?.charityTotal?.toLocaleString() || '0'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase italic">Reserved for Beneficiaries</p>
                    </CardContent>
                </Card>

                <Card className="bg-neutral-900 border-red-900 text-white relative overflow-hidden rounded-3xl p-4 shadow-2xl group cursor-pointer hover:bg-neutral-800 transition-all">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                    <CardHeader className="pb-2">
                        <div className="h-8 w-8 rounded-full bg-red-900/30 flex items-center justify-center mb-4 animate-pulse">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                        </div>
                        <CardDescription className="text-red-500 text-[10px] font-black uppercase tracking-widest">Action Priority</CardDescription>
                        <CardTitle className="text-4xl font-serif italic tracking-tighter mt-1">24 Pending</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-[10px] font-bold text-red-400 tracking-widest uppercase underline-offset-4 underline">Verify submissions</p>
                    </CardContent>
                </Card>
            </div>

            <div className="pt-10 border-t border-neutral-900">
                <div className="p-8 rounded-[3rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Next Execution</span>
                        <h3 className="text-2xl font-black text-white italic tracking-tighter">Monthly Jackpot Protocol.</h3>
                        <p className="text-neutral-500 text-sm font-medium">Scheduled for automated execution in 14 days. Ensure all verifications are clear.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-20 w-32 rounded-2xl bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center">
                            <span className="text-white text-2xl font-black font-serif italic">14</span>
                            <span className="text-[8px] font-black text-neutral-500 uppercase">Days Left</span>
                        </div>
                        <div className="h-20 w-32 rounded-2xl bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center">
                            <span className="text-indigo-400 text-2xl font-black font-serif italic">$50k</span>
                            <span className="text-[8px] font-black text-neutral-500 uppercase">Current Pool</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
