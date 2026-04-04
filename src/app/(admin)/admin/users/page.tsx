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
        // Mock data for admin user management
        const mockUsers = [
            { id: "1", firstName: "Alexander", lastName: "Thorne", email: "alex@vantage.com", subscriptionStatus: "ACTIVE", tier: "ELITE", scores: [21, 23, 19, 21, 22] },
            { id: "2", firstName: "Sarah", lastName: "Jenks", email: "sarah@golf.io", subscriptionStatus: "ACTIVE", tier: "EXECUTIVE", scores: [18, 15, 20, 21, 14] },
            { id: "3", firstName: "Marcus", lastName: "Vane", email: "mv@nexus.net", subscriptionStatus: "LAPSED", tier: "EXECUTIVE", scores: [12, 11] }
        ]
        setUsers(mockUsers)
        setIsLoading(false)
    }, [])

    const handleSave = () => {
        setUsers(users.map(u => u.id === editingUser.id ? editingUser : u))
        setEditingUser(null)
        toast({ title: "Profile Synchronized", description: "Identity and performance records updated in production ledger." })
    }

    const filtered = users.filter(u =>
        u.firstName.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
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
                        <h1 className="text-5xl font-black tracking-tighter text-white font-serif leading-none italic">User Protocol.</h1>
                        <p className="mt-6 text-neutral-500 font-medium max-w-lg leading-relaxed text-sm">Operator oversight for identity management, subscription lifecycles, and score audit overrides.</p>
                    </div>
                </div>

                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <Input
                        className="pl-12 h-12 rounded-2xl border-neutral-800 bg-neutral-900 text-white focus-visible:ring-red-600/20"
                        placeholder="Search identities..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {editingUser && (
                    <Card className="bg-neutral-900 border-red-900/50 rounded-[2.5rem] p-8 animate-in fade-in slide-in-from-top-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Name</label>
                                <Input
                                    className="bg-neutral-800 border-neutral-700 text-white rounded-xl"
                                    value={`${editingUser.firstName} ${editingUser.lastName}`}
                                    onChange={e => {
                                        const [f, ...l] = e.target.value.split(" ")
                                        setEditingUser({ ...editingUser, firstName: f, lastName: l.join(" ") })
                                    }}
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Status / Tier</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <select
                                        className="bg-neutral-800 border-neutral-700 text-white rounded-xl h-10 px-4 text-xs font-bold"
                                        value={editingUser.subscriptionStatus}
                                        onChange={e => setEditingUser({ ...editingUser, subscriptionStatus: e.target.value })}
                                    >
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="LAPSED">LAPSED</option>
                                        <option value="CANCELLED">CANCELLED</option>
                                    </select>
                                    <select
                                        className="bg-indigo-600 border-none text-white rounded-xl h-10 px-4 text-xs font-bold"
                                        value={editingUser.tier}
                                        onChange={e => setEditingUser({ ...editingUser, tier: e.target.value })}
                                    >
                                        <option value="EXECUTIVE">EXECUTIVE</option>
                                        <option value="ELITE">ELITE</option>
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-4">
                                <label className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Active Scores (Rolling 5 Audit)</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {editingUser.scores.map((s: number, i: number) => (
                                        <Input
                                            key={i}
                                            type="number"
                                            className="bg-neutral-800 border-neutral-700 text-white rounded-xl text-center font-bold"
                                            value={s}
                                            onChange={e => {
                                                const newScores = [...editingUser.scores]
                                                newScores[i] = parseInt(e.target.value) || 0
                                                setEditingUser({ ...editingUser, scores: newScores })
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-10">
                            <Button onClick={handleSave} className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 font-black uppercase text-[10px] tracking-widest">
                                <Save className="mr-2 h-3 w-3" /> Commit Changes
                            </Button>
                            <Button variant="ghost" onClick={() => setEditingUser(null)} className="text-neutral-400 hover:text-white rounded-xl uppercase text-[10px] font-black">
                                <X className="mr-2 h-3 w-3" /> Cancel
                            </Button>
                        </div>
                    </Card>
                )}

                <div className="grid gap-6">
                    {filtered.map((user) => (
                        <Card key={user.id} className="bg-neutral-900 border-neutral-800 rounded-[2rem] p-8 hover:border-neutral-700 transition-all group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="h-16 w-16 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
                                        <Shield className={`h-6 w-6 ${user.tier === 'ELITE' ? 'text-indigo-400' : 'text-neutral-500'}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold text-white tracking-tight">{user.firstName} {user.lastName}</h3>
                                            <Badge variant="outline" className={`text-[9px] py-0 ${user.subscriptionStatus === 'ACTIVE' ? 'bg-green-950/30 text-green-500 border-green-900/50' : 'bg-red-950/30 text-red-500 border-red-900/50'}`}>
                                                {user.subscriptionStatus}
                                            </Badge>
                                            {user.tier === 'ELITE' && <Badge className="bg-indigo-600 text-[9px] py-0 uppercase border-none">Elite</Badge>}
                                        </div>
                                        <p className="text-neutral-500 text-sm">{user.email}</p>
                                        <div className="flex gap-2 mt-2">
                                            {user.scores.map((s: number, i: number) => (
                                                <span key={i} className="h-6 w-8 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-400">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl"
                                        onClick={() => setEditingUser(user)}
                                    >
                                        <Edit2 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-xl"
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
