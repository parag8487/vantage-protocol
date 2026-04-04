"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { PageTransition } from "@/components/page-transition"
import { useToast } from "@/hooks/use-toast"

export default function CharitiesPage() {
    const { toast } = useToast()
    const [charities, setCharities] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/api/charities')
            .then(res => res.json())
            .then(data => {
                setCharities(data)
                setIsLoading(false)
            })
    }, [])

    const filtered = charities.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
    )

    if (isLoading) return <div className="h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-indigo-600" /></div>

    return (
        <PageTransition>
            <div className="bg-neutral-50 min-h-screen">
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] mb-4 block">Impact Directory</span>
                            <h2 className="text-5xl font-black tracking-tighter text-neutral-900 sm:text-6xl font-serif italic leading-none">Global Care.</h2>
                            <p className="mt-8 text-lg leading-relaxed text-neutral-500 font-medium">
                                Explore the audited organizations your performance directly supports. 100% of your chosen contribution is routed via secure ledger.
                            </p>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                                <Input
                                    className="pl-12 h-14 rounded-full border-neutral-200 bg-white shadow-sm focus-visible:ring-indigo-600/20"
                                    placeholder="Search protocol beneficiaries..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((charity) => (
                                <Card key={charity.id} className="overflow-hidden flex flex-col hover:shadow-2xl transition-all group rounded-[2.5rem] border-neutral-200/60 bg-white">
                                    <div className="h-56 bg-neutral-100 relative overflow-hidden group">
                                        {charity.image ? (
                                            <img
                                                src={charity.image}
                                                alt={charity.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800";
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <span className="text-indigo-600 font-serif text-4xl font-black opacity-10">Beneficiary</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                            <span className="text-white text-[10px] font-black uppercase tracking-widest">{charity.category || 'Vantage Verified'}</span>
                                        </div>
                                    </div>

                                    <CardHeader className="p-8 pb-4">
                                        <CardTitle className="text-xl font-bold">{charity.name}</CardTitle>
                                        <CardDescription className="line-clamp-2 text-sm font-medium leading-relaxed mt-2">{charity.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="px-8 pb-8">
                                        <div className="mt-4 space-y-3">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Upcoming Events</p>
                                            <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
                                                    <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-tighter italic">
                                                        {charity.upcomingEvent?.name || 'Vantage Charity Golf Day'}
                                                    </span>
                                                </div>
                                                <p className="text-[9px] text-neutral-400 font-medium ml-5 mt-1">
                                                    {charity.upcomingEvent?.date || 'May 14, 2026'} • {charity.upcomingEvent?.location || 'Royal St. Andrews'}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardContent className="flex-1 flex flex-col justify-end p-8 pt-0">
                                        <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-100">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="font-black uppercase text-[10px] tracking-widest border-neutral-200 hover:bg-neutral-50 rounded-xl"
                                                onClick={() => {
                                                    toast({
                                                        title: "Charity Selected",
                                                        description: `Your membership will now prioritize ${charity.name}.`,
                                                    });
                                                    // Optional: window.location.href = `/signup?charity=${charity.id}`;
                                                }}
                                                asChild
                                            >
                                                <Link href={`/signup?charity=${charity.id}`}>Selection</Link>
                                            </Button>
                                            <Button
                                                variant="default"
                                                size="sm"
                                                className="font-black uppercase text-[10px] tracking-widest bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl"
                                                onClick={() => {
                                                    toast({
                                                        title: "Initiating Impact",
                                                        description: `Redirecting to secure contribution layer for ${charity.name}...`,
                                                    });
                                                    setTimeout(() => {
                                                        window.open('https://buy.stripe.com/mock_donation', '_blank');
                                                    }, 1500);
                                                }}
                                            >
                                                Direct Impact
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className="py-20 text-center">
                                <p className="text-neutral-400 font-medium italic">No matches found in the impact registry.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
