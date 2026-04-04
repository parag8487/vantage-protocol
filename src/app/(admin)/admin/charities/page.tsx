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
        fetch('/api/charities').then(res => res.json()).then(data => {
            setCharities(data)
            setIsLoading(false)
        })
    }, [])

    const handleAdd = () => {
        const id = (charities.length + 1).toString()
        setCharities([...charities, { id, ...newCharity, isActive: true }])
        setIsAdding(false)
        setNewCharity({ name: "", description: "", category: "Education", location: "Global" })
        toast({ title: "Beneficiary Added", description: "The organization has been registered in the impact ledger." })
    }

    const handleDelete = (id: string) => {
        setCharities(charities.filter(c => c.id !== id))
        toast({ title: "Beneficiary Removed", description: "Organization has been archived from Active Protocol." })
    }

    const filtered = charities.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
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
                        <h1 className="text-5xl font-black tracking-tighter text-white font-serif leading-none italic">Charity Directory.</h1>
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
                        placeholder="Search assets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {isAdding && (
                    <Card className="bg-neutral-900 border-red-900/50 rounded-[2.5rem] p-8 animate-in fade-in slide-in-from-top-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Org Name</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl"
                                    value={newCharity.name}
                                    onChange={e => setNewCharity({ ...newCharity, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Category</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl"
                                    value={newCharity.category}
                                    onChange={e => setNewCharity({ ...newCharity, category: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Description</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl"
                                    value={newCharity.description}
                                    onChange={e => setNewCharity({ ...newCharity, description: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex gap-4 mt-10">
                            <Button onClick={handleAdd} className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 font-black uppercase text-[10px] tracking-widest">
                                <Save className="mr-2 h-3 w-3" /> Commit Asset
                            </Button>
                            <Button variant="ghost" onClick={() => setIsAdding(false)} className="text-neutral-400 hover:text-white rounded-xl uppercase text-[10px] font-black">
                                <X className="mr-2 h-3 w-3" /> Cancel
                            </Button>
                        </div>
                    </Card>
                )}

                <div className="grid gap-6">
                    {filtered.map((charity) => (
                        <Card key={charity.id} className="bg-neutral-900 border-neutral-800 rounded-[2rem] p-8 hover:border-neutral-700 transition-all group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="h-16 w-16 rounded-2xl bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                                        <Globe className="h-6 w-6 text-neutral-500" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-white tracking-tight">{charity.name}</h3>
                                            <Badge variant="outline" className="text-[9px] py-0 bg-neutral-800 border-neutral-700 text-neutral-400">{charity.category}</Badge>
                                        </div>
                                        <p className="text-neutral-500 text-sm max-w-xl">{charity.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl">
                                        <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-xl"
                                        onClick={() => handleDelete(charity.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </PageTransition>
    )
}
