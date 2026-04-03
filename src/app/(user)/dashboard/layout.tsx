"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import { createClient } from "@/lib/supabase-browser"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut, User, Settings, LayoutDashboard, Trophy, PlusCircle } from "lucide-react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const supabase = createClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
        router.refresh()
    }

    const userInitials = user?.email ? user.email.substring(0, 2).toUpperCase() : "JD"

    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col font-outfit">
            <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <div className="flex items-center gap-10">
                        <Link href="/dashboard" className="text-2xl font-black font-serif tracking-tighter text-neutral-900 italic">
                            VANTAGE.
                        </Link>
                        <nav className="hidden md:flex gap-8">
                            <Link href="/dashboard" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2">
                                <LayoutDashboard className="h-3 w-3" /> Overview
                            </Link>
                            <Link href="/dashboard/scores" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2">
                                <PlusCircle className="h-3 w-3" /> Scores
                            </Link>
                            <Link href="/dashboard/winnings" className="text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-2">
                                <Trophy className="h-3 w-3" /> Winnings
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard/settings" className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors">
                            <Settings className="h-5 w-5" />
                        </Link>
                        <div className="h-9 w-9 rounded-full bg-neutral-900 flex items-center justify-center text-white font-black text-[10px] tracking-tighter shadow-lg rotate-3 hover:rotate-0 transition-transform cursor-pointer overflow-hidden group">
                            <span className="group-hover:hidden">{userInitials}</span>
                            <User className="h-4 w-4 hidden group-hover:block" />
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleSignOut}
                            className="font-black uppercase text-[10px] tracking-widest hover:bg-red-50 hover:text-red-600 transition-all rounded-full px-4"
                        >
                            <LogOut className="h-3 w-3 mr-2" /> Exit
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full max-w-7xl px-6 lg:px-8 py-12">
                {children}
            </main>
        </div>
    )
}
