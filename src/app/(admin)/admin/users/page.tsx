"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { Users, Search, Edit2, Shield, Loader2, Save, X, Trash2, Award } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"

export default function AdminUsersPage() {
    const { toast } = useToast()
    const [users, setUsers] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [editingUser, setEditingUser] = useState<any>(null)

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await fetch('/api/admin/users')
                if (!res.ok) throw new Error('API unreachable')
                const data = await res.json()
                const transformed = data.map((u: any) => ({
                    ...u,
                    scores: (u.scores || []).map((s: any) => s.value)
                }))
                setUsers(transformed)
            } catch (e) {
                console.error('Failed to load users', e)
            } finally {
                setIsLoading(false)
            }
        }
        loadUsers()
    }, [])

    const handleSave = async () => {
        try {
            const res = await fetch('/api/admin/users', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editingUser)
            })
            if (!res.ok) throw new Error('Update failed')

            setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
            setEditingUser(null)
            toast({ title: "Profile Synchronized", description: "Identity and performance records updated in production ledger." })
        } catch (e: any) {
            toast({ variant: 'destructive', title: "Sync Error", description: e.message })
        }
    }

    const filtered = users.filter(u =>
        (u.firstName || "").toLowerCase().includes(search.toLowerCase()) ||
        (u.lastName || "").toLowerCase().includes(search.toLowerCase()) ||
        (u.email || "").toLowerCase().includes(search.toLowerCase())
    )

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-neutral-950"><Loader2 className="animate-spin text-white" /></div>

    return (
        <PageTransition>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="flex items-center gap-2 text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">
                            <Users className="h-3 w-3" /> Identity Deck
                        </span>
                        <h1 className="text-5xl font-black tracking-tighter text-white font-serif leading-none italic uppercase">User Protocol.</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Operator oversight for identity management, subscription lifecycles, and score audit overrides.</p>
                    </div>
                </div>

                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <Input
                        className="pl-12 h-12 rounded-2xl border-neutral-800 bg-neutral-900 text-white focus-visible:ring-red-600/20"
                        placeholder="Search identities by name or email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {editingUser && (
                    <Card className="bg-neutral-900 border-red-900/50 rounded-[2.5rem] p-8 animate-in fade-in slide-in-from-top-4 border-2 shadow-2xl">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Identity</label>
                                <div className="space-y-3">
                                    <Input
                                        className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-11"
                                        placeholder="First Name"
                                        value={editingUser.firstName || ""}
                                        onChange={e => setEditingUser({ ...editingUser, firstName: e.target.value })}
                                    />
                                    <Input
                                        className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-11"
                                        placeholder="Last Name"
                                        value={editingUser.lastName || ""}
                                        onChange={e => setEditingUser({ ...editingUser, lastName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Protocol Tier</label>
                                <div className="space-y-3">
                                    <select
                                        className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-xl h-11 px-4 text-xs font-bold appearance-none cursor-pointer hover:border-neutral-500 transition-colors"
                                        value={editingUser.subscriptionStatus}
                                        onChange={e => setEditingUser({ ...editingUser, subscriptionStatus: e.target.value })}
                                    >
                                        <option value="ACTIVE">STATUS: ACTIVE</option>
                                        <option value="LAPSED">STATUS: LAPSED</option>
                                        <option value="CANCELLED">STATUS: CANCELLED</option>
                                        <option value="INACTIVE">STATUS: INACTIVE</option>
                                    </select>
                                    <select
                                        className="w-full bg-indigo-600 border-none text-white rounded-xl h-11 px-4 text-xs font-bold appearance-none cursor-pointer hover:bg-indigo-500 transition-colors"
                                        value={editingUser.tier}
                                        onChange={e => setEditingUser({ ...editingUser, tier: e.target.value })}
                                    >
                                        <option value="EXECUTIVE">TIER: EXECUTIVE</option>
                                        <option value="ELITE">TIER: ELITE</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Performance Audit</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {(editingUser.scores || [0, 0, 0, 0, 0]).map((s: number, i: number) => (
                                        <Input
                                            key={i}
                                            type="number"
                                            className="bg-neutral-800 border-neutral-700 text-white rounded-xl text-center font-bold h-11 px-1"
                                            value={s}
                                            onChange={e => {
                                                const newScores = [...(editingUser.scores || [0, 0, 0, 0, 0])]
                                                newScores[i] = parseInt(e.target.value) || 0
                                                setEditingUser({ ...editingUser, scores: newScores })
                                            }}
                                        />
                                    ))}
                                </div>
                                <p className="text-[8px] text-neutral-600 font-bold uppercase tracking-tighter">Rolling 5 Score Synchronization</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-10 border-t border-neutral-800 pt-8">
                            <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-12 h-12 font-black uppercase text-[10px] tracking-widest shadow-xl shadow-red-900/20">
                                <Save className="mr-2 h-4 w-4" /> Commit Protocol Changes
                            </Button>
                            <Button variant="ghost" onClick={() => setEditingUser(null)} className="text-neutral-400 hover:text-white rounded-xl uppercase text-[10px] font-black h-12 px-8">
                                <X className="mr-2 h-4 w-4" /> Discard
                            </Button>
                        </div>
                    </Card>
                )}

                <div className="grid gap-6">
                    {filtered.map((user) => (
                        <Card key={user.id} className="bg-neutral-900 border-neutral-800 rounded-[2rem] p-8 hover:border-neutral-700 transition-all group shadow-xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="h-16 w-16 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                                        <Shield className={`h-6 w-6 ${user.tier === 'ELITE' ? 'text-indigo-400' : 'text-neutral-500'}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-white tracking-tight uppercase italic font-serif">{user.firstName} {user.lastName}</h3>
                                            <Badge variant="outline" className={`text-[9px] py-0 ${user.subscriptionStatus === 'ACTIVE' ? 'bg-green-950/30 text-green-500 border-green-900/50' : 'bg-red-950/30 text-red-500 border-red-900/50'}`}>
                                                {user.subscriptionStatus}
                                            </Badge>
                                            {user.tier === 'ELITE' && <Badge className="bg-indigo-600 text-[9px] py-0 uppercase border-none text-white font-black">Elite</Badge>}
                                        </div>
                                        <p className="text-neutral-500 text-sm font-mono tracking-tighter lowercase">{user.email}</p>
                                        <div className="flex gap-2 mt-4">
                                            {(user.scores || []).slice(0, 5).map((s: number, i: number) => (
                                                <span key={i} className="h-8 w-10 rounded-lg bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center text-[11px] font-black text-white">{s}</span>
                                            ))}
                                            {(!user.scores || user.scores.length === 0) && <span className="text-[10px] text-neutral-600 italic">No scores on ledger</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl px-4 h-10 font-bold uppercase text-[9px] tracking-widest"
                                        onClick={() => setEditingUser(user)}
                                    >
                                        <Edit2 className="h-3 w-3 mr-2" /> Audit Identity
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-600/50 hover:text-red-500 hover:bg-red-950/20 rounded-xl h-10 w-10 flex items-center justify-center"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                    {filtered.length === 0 && (
                        <div className="py-20 flex flex-col items-center justify-center border-2 border-dashed border-neutral-900 rounded-[3rem] text-neutral-600">
                            <Users className="h-12 w-12 mb-4 opacity-20" />
                            <p className="font-black uppercase text-xs tracking-widest">No Identities Match Query</p>
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    )
}
