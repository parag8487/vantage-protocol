import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ReactNode } from "react"
import { createClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma.server"

export default async function AdminLayout({ children }: { children: ReactNode }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Vantage Admin Demo Protocol
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const demoSession = cookieStore.get('vantage-demo-session')?.value;

    if (demoSession === 'demo_admin_root') {
        return (
            <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
                <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
                    <div className="mx-auto flex h-14 items-center justify-between px-6">
                        <div className="flex items-center gap-8">
                            <Link href="/admin" className="text-lg font-black tracking-tighter text-white flex items-center gap-2 uppercase italic">
                                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                                Operator <Badge className="ml-2 bg-indigo-500/20 text-indigo-400 border-indigo-500/30 text-[8px]">ROOT</Badge>
                            </Link>
                            <nav className="hidden md:flex gap-8">
                                <Link href="/admin" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Metrics</Link>
                                <Link href="/admin/users" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Identity Deck</Link>
                                <Link href="/admin/draws" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Draw Engine</Link>
                                <Link href="/admin/charities" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Charity Assets</Link>
                                <Link href="/admin/verifications" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Verifications</Link>
                            </nav>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300">Exit Admin</Link>
                        </div>
                    </div>
                </header>
                <main className="flex-1 mx-auto w-full px-6 py-10">
                    {children}
                </main>
            </div>
        )
    }

    if (!user) {
        redirect("/login")
    }

    // Role check
    const profile = await prisma.profile.findUnique({
        where: { id: user.id }
    })

    if (!profile || profile.role !== 'ADMIN') {
        redirect("/dashboard?error=unauthorized")
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col font-sans">
            <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
                <div className="mx-auto flex h-14 items-center justify-between px-6">
                    <div className="flex items-center gap-8">
                        <Link href="/admin" className="text-lg font-black tracking-tighter text-white flex items-center gap-2 uppercase italic">
                            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                            Operator
                        </Link>
                        <nav className="hidden md:flex gap-8">
                            <Link href="/admin" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Metrics</Link>
                            <Link href="/admin/users" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Identity Deck</Link>
                            <Link href="/admin/draws" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Draw Engine</Link>

                            <Link href="/admin/charities" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Charity Assets</Link>
                            <Link href="/admin/verifications" className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Verifications</Link>

                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300">Exit Admin</Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 mx-auto w-full px-6 py-10">
                {children}
            </main>
        </div>
    )
}
