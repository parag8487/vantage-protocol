"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Target, Calendar, ArrowRight, CheckCircle2, ChevronLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { useProfile } from "@/hooks/use-profile"
import { useToast } from "@/hooks/use-toast"

export default function ScoreEntryPage() {
    const { profile, isLoading, refreshProfile } = useProfile()
    const { toast } = useToast()
    const [score, setScore] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async () => {
        if (!score || isNaN(Number(score))) return

        setIsSubmitting(true)
        try {
            const res = await fetch('/api/scores', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    profileId: profile?.id,
                    value: parseInt(score),
                    datePlayed: new Date().toISOString()
                })
            })

            if (res.ok) {
                toast({
                    title: "Score Committed",
                    description: "Round successfully added to the Rolling 5 Protocol.",
                })
                setScore("")
                refreshProfile()
            } else {
                const data = await res.json()
                throw new Error(data.error || 'Failed to submit score')
            }
        } catch (err: any) {
            toast({
                title: "Protocol Error",
                description: err.message,
                variant: "destructive"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>

    return (
        <PageTransition>
            <div className="max-w-2xl mx-auto py-12 px-6">
                <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-12 hover:text-neutral-900 transition-colors">
                    <ChevronLeft className="h-3 w-3" /> Back to Protocol
                </Link>

                <div className="space-y-12">
                    <div className="text-center">
                        <div className="h-16 w-16 rounded-3xl bg-indigo-600 mx-auto flex items-center justify-center shadow-xl shadow-indigo-200 mb-8 mt-12">
                            <Target className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-5xl font-black text-neutral-900 tracking-tighter font-serif leading-none italic">New Entry.</h1>
                        <p className="mt-6 text-neutral-500 font-medium">The system automatically retains your top 5 most recent rounds.</p>
                    </div>

                    <Card className="border-neutral-200/60 shadow-2xl shadow-neutral-100 rounded-[3rem] p-4 overflow-hidden">
                        <CardHeader className="text-center pb-0 pt-8">
                            <CardDescription className="uppercase tracking-[0.3em] text-[10px] font-black text-neutral-400">Score Validation</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-10 pb-12 space-y-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-900 uppercase tracking-[0.2em] block text-center">Stableford Points</label>
                                <Input
                                    type="number"
                                    placeholder="00"
                                    className="h-24 text-7xl text-center font-serif font-black border-none bg-neutral-50 rounded-[2rem] focus-visible:ring-offset-0 focus-visible:ring-indigo-600/20"
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-neutral-50 rounded-[2rem] flex flex-col items-center group cursor-pointer hover:bg-white border border-transparent hover:border-neutral-200 transition-all">
                                    <Calendar className="h-6 w-6 text-neutral-400 group-hover:text-indigo-600 transition-colors mb-4" />
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest group-hover:text-neutral-900 transition-colors">Today</span>
                                </div>
                                <div className="p-8 bg-neutral-50 rounded-[2rem] flex flex-col items-center group cursor-pointer hover:bg-white border border-transparent hover:border-neutral-200 transition-all">
                                    <CheckCircle2 className="h-6 w-6 text-neutral-400 group-hover:text-emerald-600 transition-colors mb-4" />
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest group-hover:text-neutral-900 transition-colors">Verified</span>
                                </div>
                            </div>
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitting || !score}
                                className="w-full h-20 rounded-[2rem] text-lg font-black group shadow-xl shadow-indigo-100 bg-neutral-900 hover:bg-neutral-800 border-none text-white transition-all transform hover:scale-[1.02]"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin h-6 w-6" /> : "Commit Score"}
                                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="p-10 bg-indigo-50/50 rounded-[3rem] border border-indigo-100/50 flex items-start gap-6">
                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-indigo-100 shadow-sm">
                            <span className="text-indigo-600 text-xs font-black italic">!</span>
                        </div>
                        <p className="text-xs text-indigo-900/60 font-medium leading-relaxed italic">
                            PROTOCOL_ADVISORY: Your sixth oldest score will be permanently archived upon submission to maintain the Rolling 5 Protocol integrity.
                        </p>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
