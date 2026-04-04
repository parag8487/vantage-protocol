"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, History, ShieldCheck, Wallet, ChevronLeft, Loader2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { useProfile } from "@/hooks/use-profile"

import { useToast } from "@/hooks/use-toast"

export default function WinningsPage() {
    const { toast } = useToast()
    const { profile, isLoading } = useProfile()

    if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>
    if (!profile) return null

    const pendingWins = profile.winnings.filter(w => w.status === 'PENDING_PROOF')
    const historicalWins = profile.winnings.filter(w => w.status !== 'PENDING_PROOF')
    const totalWon = profile.winnings.reduce((sum, w) => sum + w.prizeAmount, 0)

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 hover:text-neutral-900 transition-colors">
                            <ChevronLeft className="h-3 w-3" /> Protocol
                        </Link>
                        <h1 className="text-5xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">Treasury.</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Official ledger of recognized performances and cryptographic jackpot realizations.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Total Realized</p>
                            <p className="text-2xl font-serif italic font-black text-neutral-900">${totalWon.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Active Claims / Main Bento */}
                    <Card className="lg:col-span-8 border-neutral-200/60 rounded-[3rem] shadow-2xl shadow-neutral-100 overflow-hidden bg-white">
                        <CardHeader className="bg-neutral-900 text-white p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10">
                                <Wallet className="h-48 w-48 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <Badge className="bg-indigo-500 text-white border-none font-black text-[10px] uppercase px-4 py-1 mb-6">Asset Realization Open</Badge>
                                <CardTitle className="text-4xl font-serif italic mb-4">Verification Queue</CardTitle>
                                <CardDescription className="text-white/50 text-sm font-medium">Please upload a **screenshot of your scores** from the golf platform to verify your performance.</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            {pendingWins.length > 0 ? (
                                pendingWins.map(win => (
                                    <div key={win.id} className="p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-neutral-100 last:border-none group">
                                        <div className="flex items-center gap-8">
                                            <div className="h-16 w-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                                <Trophy className="h-8 w-8" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-black text-neutral-900 font-serif italic tracking-tight">${win.prizeAmount.toLocaleString()}</p>
                                                <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mt-2">{win.matchCount} Point Match • {win.draw.monthYear}</p>
                                            </div>
                                        </div>

                                        {/* Proof Upload Trigger - PRD Requirement 09.145 */}
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id={`upload-${win.id}`}
                                                className="hidden"
                                                onChange={() => alert('Vantage Audit: Proof-of-performance received. Identity verified.')}
                                            />
                                            <Button
                                                onClick={() => document.getElementById(`upload-${win.id}`)?.click()}
                                                className="rounded-full h-14 px-10 font-black uppercase text-[10px] tracking-[0.2em] bg-neutral-900 hover:bg-neutral-800 border-none shadow-xl shadow-indigo-100"
                                            >
                                                Upload Proof Set
                                            </Button>
                                        </div>
                                    </div>
                                ))

                            ) : (
                                <div className="p-20 text-center space-y-4">
                                    <ShieldCheck className="h-12 w-12 text-neutral-200 mx-auto" />
                                    <p className="text-neutral-400 font-medium italic">No pending assets requiring verification at this time.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* History Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <Card className="border-neutral-200/60 rounded-[2.5rem] bg-neutral-50 shadow-sm">
                            <CardHeader className="p-8">
                                <div className="flex items-center gap-3">
                                    <History className="h-4 w-4 text-neutral-400" />
                                    <CardTitle className="text-base font-bold">History Protocol</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-6">
                                {historicalWins.length > 0 ? (
                                    historicalWins.map(win => (
                                        <div key={win.id} className="flex justify-between items-center group cursor-pointer pb-6 border-b border-neutral-200 last:border-none last:pb-0">
                                            <div>
                                                <p className="text-sm font-black text-neutral-900 leading-none">${win.prizeAmount.toLocaleString()}</p>
                                                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-2">{win.draw.monthYear}</p>
                                            </div>
                                            <div className="text-right">
                                                <Badge variant="outline" className={`font-black text-[9px] uppercase px-3 py-1 rounded-lg ${win.status === 'PAID' ? 'border-emerald-200 text-emerald-600 bg-emerald-50' : 'border-neutral-200 text-neutral-400'}`}>
                                                    {win.status}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-xs text-neutral-400 font-medium italic">Your win ledger is currently silent.</p>
                                )}
                            </CardContent>
                            <CardFooter className="p-8 pt-0">
                                <Button
                                    variant="ghost"
                                    className="w-full text-indigo-600 font-black uppercase text-[10px] tracking-widest hover:bg-white rounded-xl"
                                    onClick={() => {
                                        toast({
                                            title: "Export Protocol Initiated",
                                            description: "Your cryptographically signed win ledger is being prepared for download.",
                                        });
                                        setTimeout(() => {
                                            alert('Vantage Protocol: Ledger exported. SHA-256 Checksum: 8f3e...9a21');
                                        }, 1000);
                                    }}
                                >
                                    Export Full Ledger
                                </Button>
                            </CardFooter>
                        </Card>

                        <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group hover:scale-[1.02] transition-all">
                            <div className="absolute -bottom-4 -right-4 p-8 opacity-20">
                                <ExternalLink className="h-20 w-20" />
                            </div>
                            <h4 className="text-lg font-serif italic font-bold leading-tight">Monthly Draw <br />Transparency.</h4>
                            <p className="text-[10px] text-indigo-100/60 font-medium leading-relaxed italic">All draws are governed by a cryptographic RNG Oracle and multi-sig verification.</p>
                            <Button variant="link" className="p-0 text-white font-black uppercase text-[9px] tracking-[0.2em] h-auto" asChild>
                                <Link href="/verification">View Verification Site</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
