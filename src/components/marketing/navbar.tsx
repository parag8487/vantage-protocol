"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase-browser"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function Navbar() {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const supabase = createClient()

    useEffect(() => {
        const checkUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        checkUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null)
        })

        return () => subscription.unsubscribe()
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
        router.refresh()
    }
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-2xl font-black font-serif tracking-tighter text-neutral-900">
                        VANTAGE
                    </Link>
                    <div className="hidden md:flex gap-8">
                        <Link href="/charities" className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Charities</Link>
                        <Link href="/pricing" className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Pricing</Link>
                        <Link href="/impact" className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors underline-offset-4 hover:underline">Our Impact</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {user ? (
                        <>
                            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleSignOut} className="rounded-full px-6">
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                                <Link href="/login">Sign in</Link>
                            </Button>
                            <Button size="sm" asChild className="rounded-full px-6 bg-neutral-900 hover:bg-neutral-800 transition-all active:scale-95 shadow-lg">
                                <Link href="/signup">Join the Club</Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
