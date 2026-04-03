"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LayoutDashboard, Target, Heart, TrendingUp, Calendar, ChevronRight, Loader2 } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { useProfile } from "@/hooks/use-profile"
import { useState, useEffect } from "react"

export default function DashboardPage() {
    const { profile, isLoading } = useProfile()
    const [stats, setStats] = useState({ avgPool: 50000 })

    useEffect(() => {
        fetch('/api/stats').then(res => res.json()).then(data => {
            if (data.avgPool) setStats(data)
        })
    }, [])

    if (isLoading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
            </div>
        )
    }

    if (!profile) return null

    const totalPhilanthropy = profile.winnings.reduce((sum, w) => sum + (w.prizeAmount * (profile.charityPercentage / 100)), 0)
    const displayPhilanthropy = totalPhilanthropy > 0 ? `$${totalPhilanthropy.toLocaleString()}` : "$0"

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse" />
                            System Authenticated
                        </span>
                        <h1 className="text-5xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">
                            Welcome back, {profile.firstName || 'Vantage Player'}.
                        </h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">
                            Your performance protocol is active. This month you have contributed to the {profile.selectedCharity?.name || 'global pool'}.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="rounded-full px-8 font-bold border-neutral-200">Export Report</Button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12">
                    {/* Subscription Bento (Large) */}
                    <Card className="md:col-span-3 lg:col-span-4 bg-indigo-600 text-white border-transparent overflow-hidden relative group rounded-[2.5rem]">
                        <div className="absolute -top-12 -right-12 p-24 opacity-10 group-hover:opacity-20 transition-opacity">
                            <LayoutDashboard className="h-64 w-64 rotate-12" />
                        </div>
                        <CardHeader className="relative z-10">
                            <CardDescription className="text-indigo-100 font-black uppercase tracking-[0.2em] text-[10px]">Membership Tier</CardDescription>
                            <CardTitle className="text-3xl mt-4 font-serif italic">
                                {profile.subscriptionStatus === 'ACTIVE' ? 'Active Vantage' : 'Protocol Pending'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="mt-16 relative z-10">
                            <p className="text-sm text-indigo-100 font-medium flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {profile.subscriptionStatus === 'ACTIVE' ? `Renewal: ${new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : 'Awaiting Initialization'}
                            </p>
                            <Button variant="secondary" className="mt-8 w-full text-indigo-600 font-black bg-white hover:bg-neutral-100 border-none h-12 rounded-2xl">Manage Subscription</Button>
                        </CardContent>
                    </Card>

                    {/* Charity Impact (Medium) */}
                    <Card className="md:col-span-3 lg:col-span-5 border-neutral-200/60 bg-neutral-50/50 rounded-[2.5rem] flex flex-col justify-between shadow-sm">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardDescription className="uppercase tracking-[0.2em] text-[10px] font-black text-neutral-400">Total Philanthropy</CardDescription>
                                <div className="h-10 w-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center">
                                    <Heart className="h-5 w-5 text-indigo-600" />
                                </div>
                            </div>
                            <CardTitle className="text-6xl mt-6 font-serif italic tracking-tighter text-neutral-900">{displayPhilanthropy}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-8">
                            <div className="flex justify-between items-end mb-4">
                                <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest">Cause: {profile.selectedCharity?.name || 'Community Fund'}</p>
                                <p className="text-[10px] text-neutral-900 font-black uppercase tracking-widest">Active Influence</p>
                            </div>
                            <div className="h-1.5 w-full bg-neutral-200/60 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-indigo-600 rounded-full" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Next Draw (Compact) */}
                    <Card className="md:col-span-6 lg:col-span-3 flex flex-col justify-between hover:border-indigo-400 transition-all cursor-pointer rounded-[2.5rem] group border-neutral-200/60 shadow-sm text-decoration-none">
                        <Link href="/dashboard/scores" className="h-full flex flex-col justify-between p-0">
                            <CardHeader className="pb-2">
                                <CardDescription className="uppercase tracking-[0.2em] text-[10px] font-black text-neutral-400 group-hover:text-indigo-600 transition-colors">Projected Match</CardDescription>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <Target className="h-4 w-4" />
                                    </div>
                                    <CardTitle className="text-3xl font-serif italic text-neutral-900">${(stats.avgPool / 1000).toFixed(0)}k</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-xs text-neutral-500 font-medium leading-relaxed">Estimated matches for the {new Date().toLocaleString('default', { month: 'long' })} payout event.</p>
                            </CardContent>
                            <CardFooter className="pb-8 pt-0">
                                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center hover:gap-2 transition-all">
                                    Update Scores <ChevronRight className="h-3 w-3" />
                                </span>
                            </CardFooter>
                        </Link>
                    </Card>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.3em]">Recent Activity Protocol</h3>
                        <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest hover:bg-neutral-100 rounded-full px-6">View Historical Audit</Button>
                    </div>
                    <div className="space-y-4">
                        {profile.scores.length > 0 ? (
                            profile.scores.map(score => (
                                <div key={score.id} className="flex items-center justify-between p-8 bg-white border border-neutral-100 rounded-[2.5rem] group hover:border-indigo-100 hover:bg-neutral-50/30 transition-all cursor-pointer shadow-sm">
                                    <div className="flex items-center gap-6">
                                        <div className="h-14 w-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-indigo-600 group-hover:bg-white transition-all">
                                            <TrendingUp className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-base font-bold text-neutral-900 leading-none">Score Entry Processed</p>
                                            <p className="text-xs text-neutral-400 font-medium mt-2">
                                                Verified Stableford Round • {new Date(score.datePlayed).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-black text-neutral-900 font-serif italic">+{score.value}pts</span>
                                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">Verified</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-12 text-center border-2 border-dashed border-neutral-100 rounded-[2.5rem]">
                                <p className="text-sm text-neutral-400 font-medium">No activity records found for this protocol session.</p>
                                <Button variant="link" className="mt-4 text-indigo-600 font-black h-auto p-0" asChild>
                                    <Link href="/dashboard/scores">Initialize First Round</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
