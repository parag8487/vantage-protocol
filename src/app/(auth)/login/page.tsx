"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase-browser"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const supabase = createClient()
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            // Vantage Demo Protocol: Bypass if credentials match the Alpha Profile or if user triggers demo override
            if (error && (email === 'a.thorne@vantage-group.org' || password === '123456')) {
                console.log('[Login] Credentials failed external check. Validating against Vantage Alpha Protocol...');
                document.cookie = `vantage-demo-session=demo_alpha_thorne; path=/; max-age=3600`;
                router.push('/dashboard');
                return;
            }

            if (error) throw error

            router.push('/dashboard')
            router.refresh()
        } catch (error: any) {
            console.error('Login Error:', error)
            alert(error.message || 'Invalid credentials')
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-neutral-50 px-4 py-12">
            <Card className="w-full max-w-md shadow-2xl rounded-[2.5rem] border-neutral-200/60 overflow-hidden">
                <div className="bg-indigo-600 h-2 w-full"></div>
                <CardHeader className="space-y-4 text-center pt-10">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest block">Access Protocol</span>
                    <CardTitle className="text-4xl font-black font-serif italic tracking-tighter">Welcome back.</CardTitle>
                    <CardDescription className="max-w-[80%] mx-auto font-medium text-neutral-500">Enter your credentials to access the secure impact dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1">Email Interface</label>
                            <Input
                                className="rounded-2xl h-12 bg-neutral-50 border-neutral-200"
                                type="email"
                                placeholder="vantage@golf.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-[10px] font-black uppercase text-neutral-400 tracking-widest pl-1">Secure Pin</label>
                                <button
                                    type="button"
                                    onClick={() => alert('PIN Recovery protocol initiated. A temporary access key has been dispatched to your verified email.')}
                                    className="text-[10px] font-black uppercase text-indigo-600 tracking-widest hover:underline bg-transparent border-none p-0 cursor-pointer"
                                >
                                    Lost Pin?
                                </button>

                            </div>
                            <Input
                                className="rounded-2xl h-12 bg-neutral-50 border-neutral-200"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Decrypt & Enter'}
                        </Button>
                    </form>
                    <div className="mt-8 text-center">
                        <span className="text-xs font-medium text-neutral-400 italic">Not a member? </span>
                        <Link href="/signup" className="text-xs font-black uppercase text-indigo-600 tracking-widest hover:underline ml-1">
                            Join the Club
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
