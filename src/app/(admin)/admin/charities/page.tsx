"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Plus, Search, Edit2, Trash2, Globe, Heart, Loader2, Save, X } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { useToast } from "@/hooks/use-toast"

export default function AdminCharitiesPage() {
    const { toast } = useToast()
    const [charities, setCharities] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [isAdding, setIsAdding] = useState(false)
    const [newCharity, setNewCharity] = useState({ name: "", description: "", category: "Education", location: "Global" })

    useEffect(() => {
        const loadCharities = async () => {
            try {
                const res = await fetch('/api/charities')
                if (!res.ok) throw new Error('API unreachable')
                const data = await res.json()
                setCharities(data)
            } catch (e) {
                console.error('Failed to load charities', e)
            } finally {
                setIsLoading(false)
            }
        }
        loadCharities()
    }, [])

    const handleAdd = async () => {
        try {
            const res = await fetch('/api/charities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCharity)
            })
            if (!res.ok) throw new Error('Failed to create beneficiary')
            const saved = await res.json()

            setCharities([...charities, saved])
            setIsAdding(false)
            setNewCharity({ name: "", description: "", category: "Education", location: "Global" })
            toast({ title: "Beneficiary Added", description: "The organization has been registered in the impact ledger." })
        } catch (e: any) {
            toast({ variant: 'destructive', title: "Sync Error", description: e.message })
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`/api/charities?id=${id}`, {
                method: 'DELETE'
            })
            if (!res.ok) throw new Error('Failed to archive beneficiary')

            setCharities(charities.filter(c => c.id !== id))
            toast({ title: "Beneficiary Removed", description: "Organization has been archived from Active Protocol." })
        } catch (e: any) {
            toast({ variant: 'destructive', title: "Sync Error", description: e.message })
        }
    }

    const filtered = charities.filter(c =>
        (c.name || "").toLowerCase().includes(search.toLowerCase()) ||
        (c.description || "").toLowerCase().includes(search.toLowerCase())
    )

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-neutral-950"><Loader2 className="animate-spin text-white" /></div>

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="flex items-center gap-2 text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">
                            <Heart className="h-3 w-3" /> Asset Management
                        </span>
                        <h1 className="text-5xl font-black tracking-tighter text-white font-serif leading-none italic uppercase">Charity Directory.</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Operator control for beneficiary onboarding, media management, and ledger assignment.</p>
                    </div>
                    <Button
                        onClick={() => setIsAdding(true)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-2xl h-14 px-8 font-black uppercase text-[10px] tracking-widest shadow-xl shadow-red-900/20"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add Protocol Beneficiary
                    </Button>
                </div>

                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <Input
                        className="pl-12 h-12 rounded-2xl border-neutral-800 bg-neutral-900 text-white focus-visible:ring-red-600/20"
                        placeholder="Search assets by name or description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {isAdding && (
                    <Card className="bg-neutral-900 border-red-900/50 rounded-[2.5rem] p-8 animate-in fade-in slide-in-from-top-4 border-2 shadow-2xl transition-all">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Beneficiary Name</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-12"
                                    placeholder="Enter organization title"
                                    value={newCharity.name}
                                    onChange={e => setNewCharity({ ...newCharity, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Impact Category</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-12"
                                    placeholder="e.g. Education, Health"
                                    value={newCharity.category}
                                    onChange={e => setNewCharity({ ...newCharity, category: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Protocol Description</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-12"
                                    placeholder="Define the beneficiary's role and impact mission..."
                                    value={newCharity.description}
                                    onChange={e => setNewCharity({ ...newCharity, description: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 mt-10 border-t border-neutral-800 pt-8">
                            <Button onClick={handleAdd} className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-12 h-12 font-black uppercase text-[10px] tracking-widest shadow-xl shadow-red-900/20">
                                <Save className="mr-2 h-4 w-4" /> Commit Asset to Ledger
                            </Button>
                            <Button variant="ghost" onClick={() => setIsAdding(false)} className="text-neutral-400 hover:text-white rounded-xl uppercase text-[10px] font-black h-12 px-8">
                                <X className="mr-2 h-4 w-4" /> Cancel
                            </Button>
                        </div>
                    </Card>
                )}

                <div className="grid gap-6">
                    {filtered.map((charity) => (
                        <Card key={charity.id} className="bg-neutral-900 border-neutral-800 rounded-[2rem] p-8 hover:border-neutral-700 transition-all group shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="h-16 w-16 rounded-2xl bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700 shadow-inner group-hover:bg-neutral-700 transition-colors">
                                        <Globe className="h-6 w-6 text-neutral-500 group-hover:text-red-500 transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-white tracking-tight uppercase italic font-serif">{charity.name}</h3>
                                            <Badge variant="outline" className="text-[9px] py-0 bg-neutral-800 border-neutral-700 text-neutral-400 font-black uppercase tracking-widest">{charity.category}</Badge>
                                        </div>
                                        <p className="text-neutral-500 text-sm max-w-xl font-medium leading-relaxed">{charity.description}</p>
                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[9px] font-black text-neutral-600 uppercase tracking-[0.2em]">Active Beneficiary Protocol</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl px-4 h-10 font-bold uppercase text-[9px] tracking-widest">
                                        <Edit2 className="h-3 w-3 mr-2" /> Modify Asset
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-600/50 hover:text-red-500 hover:bg-red-950/20 rounded-xl h-10 w-10 flex items-center justify-center"
                                        onClick={() => handleDelete(charity.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                    {filtered.length === 0 && (
                        <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-neutral-900 rounded-[3rem] text-neutral-600">
                            <Heart className="h-12 w-12 mb-4 opacity-20" />
                            <p className="font-black uppercase text-xs tracking-widest">No Beneficiaries Identified</p>
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    )
}
