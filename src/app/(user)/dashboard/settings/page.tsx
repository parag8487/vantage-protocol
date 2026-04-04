"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { Heart, User, Shield, Sliders, ChevronLeft, Loader2, Save } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { useProfile } from "@/hooks/use-profile"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
    const { profile, isLoading, refreshProfile } = useProfile()
    const { toast } = useToast()
    const [charities, setCharities] = useState<any[]>([])
    const [selectedCharity, setSelectedCharity] = useState("")
    const [percentage, setPercentage] = useState(10)
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        fetch('/api/charities').then(res => res.json()).then(data => setCharities(data))
        if (profile) {
            setSelectedCharity(profile.selectedCharityId || "")
            setPercentage(profile.charityPercentage || 10)
        }
    }, [profile])

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const res = await fetch('/api/profile/update', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    profileId: profile?.id,
                    selectedCharityId: selectedCharity,
                    charityPercentage: percentage
                })
            })

            if (res.ok) {
                toast({ title: "Settings Protocol Updated", description: "Your impact preferences have been synchronized." })
                refreshProfile()
            } else {
                throw new Error('Update failed')
            }
        } catch (err: any) {
            toast({ title: "Synchronization Error", description: err.message, variant: "destructive" })
        } finally {
            setIsSaving(false)
        }
    }

    if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>
    if (!profile) return null

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 hover:text-neutral-900 transition-colors">
                            <ChevronLeft className="h-3 w-3" /> Dashboard
                        </Link>
                        <h1 className="text-5xl font-black tracking-tighter text-neutral-900 font-serif leading-none italic">Preferences.</h1>
                    </div>
                    <Button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="rounded-full px-8 font-black uppercase text-[10px] tracking-widest h-12 shadow-xl shadow-indigo-100"
                    >
                        {isSaving ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Save className="mr-2 h-4 w-4" />}
                        Save Protocol
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Section */}
                        <Card className="border-neutral-200/60 rounded-[2.5rem] shadow-sm overflow-hidden bg-neutral-50/30">
                            <CardHeader className="bg-white border-b border-neutral-100 p-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                                        <User className="h-5 w-5 text-neutral-900" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold">Identity Profile</CardTitle>
                                        <CardDescription className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Personal Encryption Data</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-900 uppercase tracking-widest ml-1">First Name</label>
                                    <Input defaultValue={profile.firstName || ""} className="h-14 rounded-2xl bg-white border-neutral-200 focus-visible:ring-indigo-600/20" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-neutral-900 uppercase tracking-widest ml-1">Last Name</label>
                                    <Input defaultValue={profile.lastName || ""} className="h-14 rounded-2xl bg-white border-neutral-200 focus-visible:ring-indigo-600/20" />
                                </div>
                                <div className="space-y-3 md:col-span-2 opacity-50">
                                    <label className="text-[10px] font-black text-neutral-900 uppercase tracking-widest ml-1">Verified Email</label>
                                    <Input value={profile.email} readOnly className="h-14 rounded-2xl bg-neutral-100 border-neutral-200 cursor-not-allowed" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Charity Selection */}
                        <Card className="border-neutral-200/60 rounded-[2.5rem] shadow-sm overflow-hidden bg-neutral-50/30">
                            <CardHeader className="bg-white border-b border-neutral-100 p-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                                        <Heart className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-bold">Protocol Destination</CardTitle>
                                        <CardDescription className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Impact Target Management</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 space-y-10">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {charities.map(charity => (
                                        <div
                                            key={charity.id}
                                            onClick={() => setSelectedCharity(charity.id)}
                                            className={`p-6 rounded-[2rem] border transition-all cursor-pointer group flex flex-col justify-between h-40 ${selectedCharity === charity.id
                                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100'
                                                : 'bg-white border-neutral-200 hover:border-indigo-400'
                                                }`}
                                        >
                                            <p className="text-sm font-bold leading-tight">{charity.name}</p>
                                            <p className={`text-[10px] font-medium leading-relaxed italic ${selectedCharity === charity.id ? 'text-indigo-100' : 'text-neutral-400'}`}>
                                                {charity.description.slice(0, 80)}...
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 pt-6 border-t border-neutral-200/60">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Philanthropic Split</p>
                                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Allocation: {percentage}%</p>
                                        </div>
                                        <span className="text-3xl font-serif italic font-black text-neutral-900">{percentage}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        step="5"
                                        value={percentage}
                                        onChange={(e) => setPercentage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                    />
                                    <p className="text-xs text-neutral-400 font-medium italic">Protocol minimum is set to 10% of all platform jackpots.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        {/* Security Protocol */}
                        <Card className="border-neutral-200/60 rounded-[2.5rem] shadow-sm bg-neutral-900 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <Shield className="h-12 w-12" />
                            </div>
                            <CardHeader className="p-8">
                                <CardTitle className="text-xl font-bold font-serif italic text-white">Trust Protocol</CardTitle>
                                <CardDescription className="text-white/40 text-[10px] font-black uppercase tracking-widest">System Integrity Status</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-6 relative z-10">
                                <div className="flex items-center gap-4 text-xs font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Biometric MFA Active
                                </div>
                                <div className="flex items-center gap-4 text-xs font-bold bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    SSL/TLS 1.3 Encryption
                                </div>
                                <Button
                                    variant="secondary"
                                    className="w-full h-14 rounded-2xl font-black uppercase text-[10px] tracking-widest border-none bg-white hover:bg-neutral-100 text-neutral-900 mt-4"
                                    onClick={() => {
                                        toast({ title: "Audit Protocol Initialized", description: "Analyzing 128-bit encrypted access records for Alexander Thorne." })
                                    }}
                                >
                                    Audit Access Logs
                                </Button>

                            </CardContent>
                        </Card>

                        {/* Impact Log Summary */}
                        <Card className="border-neutral-200/60 rounded-[2.5rem] shadow-sm bg-white overflow-hidden border-dashed">
                            <CardHeader className="p-8">
                                <CardTitle className="text-xl font-bold">System Log</CardTitle>
                                <CardDescription className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Recent Registry Changes</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-4 font-mono text-[10px] text-neutral-500">
                                <p className="flex justify-between border-b border-neutral-50 pb-2">
                                    <span>[AUTH_LOG]</span>
                                    <span className="text-neutral-300">08:45:12</span>
                                </p>
                                <p className="flex justify-between border-b border-neutral-50 pb-2 text-indigo-600">
                                    <span>[ALLOC_MOD]</span>
                                    <span className="text-neutral-300">08:42:01</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>[SESSION_INIT]</span>
                                    <span className="text-neutral-300">08:40:55</span>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
