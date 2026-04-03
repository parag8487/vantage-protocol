"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminVerificationPage() {
    const { toast } = useToast()
    const [verifications, setVerifications] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchVerifications()
    }, [])

    const fetchVerifications = async () => {
        setIsLoading(true)
        try {
            const res = await fetch('/api/admin/verifications')
            const data = await res.json()
            setVerifications(data)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    const handleAction = async (id: string, action: 'APPROVE' | 'REJECT') => {
        try {
            const res = await fetch('/api/admin/verifications', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ winningId: id, action })
            })

            if (res.ok) {
                setVerifications(prev => prev.filter(v => v.id !== id))
                toast({ title: `Proof ${action === 'APPROVE' ? 'Verified' : 'Rejected'}`, description: `Asset claim protocol updated.` })
            }
        } catch (err: any) {
            toast({ title: 'Error', description: err.message, variant: 'destructive' })
        }
    }

    if (isLoading) return <div className="py-20 flex justify-center"><Loader2 className="animate-spin" /></div>

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold font-serif">Verification Queue</h1>
                <p className="text-neutral-400">Audit submitted proof images and authorize prize payouts.</p>
            </div>

            <div className="grid gap-6">
                {verifications.map((v) => (
                    <Card key={v.id} className="bg-neutral-900 border-neutral-800 text-white overflow-hidden shadow-2xl">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-64 h-48 bg-neutral-800 flex items-center justify-center border-r border-neutral-800">
                                <span className="text-xs text-neutral-500 font-mono tracking-tighter">[PROOF_AWAITING_UPLOAD]</span>
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold text-indigo-400 uppercase tracking-widest leading-none mb-2">{v.matchCount} Matches</p>
                                        <h3 className="text-xl font-bold">{v.profile?.email || 'Unknown Protocol Member'}</h3>
                                        <p className="text-neutral-500 text-sm mt-1">Claim created on {new Date(v.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black font-serif text-white">${v.prizeAmount?.toLocaleString()}</p>
                                        <p className="text-xs text-neutral-500 font-medium">Draw Protocol #{v.draw?.monthYear}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <Button onClick={() => handleAction(v.id, 'APPROVE')} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black tracking-widest uppercase text-[10px]">Authorize Protocol Verification</Button>
                                    <Button onClick={() => handleAction(v.id, 'REJECT')} variant="outline" className="border-red-900/50 text-red-400 hover:bg-red-950/30 hover:text-red-300 font-black tracking-widest uppercase text-[10px]">Reject Evidence</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}

                {verifications.length === 0 && (
                    <div className="h-64 border-2 border-dashed border-neutral-800 rounded-3xl flex flex-col items-center justify-center text-neutral-500 space-y-4">
                        <span className="text-4xl">✓</span>
                        <p className="font-medium tracking-widest uppercase text-xs">No pending verifications. Ledger settled.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
