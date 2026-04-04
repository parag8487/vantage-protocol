import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase-server"

export async function proxy(request: NextRequest) {

    const supabase = await createClient()

    let {
        data: { user },
    } = await supabase.auth.getUser()

    // Vantage Demo Protocol: Bypass if local demo session is active
    const demoSession = request.cookies.get('vantage-demo-session')?.value;
    if (!user && demoSession) {
        user = { id: demoSession, email: 'demo@vantage.golf' } as any;
    }


    // 1. If trying to access dashboard/admin and NOT logged in -> Login
    if (!user && (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/admin'))) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // 2. If trying to access admin and NOT an admin (this requires a check against Prisma/Profile)
    // For now, we'll just check if the user exists. Role-based check can be added if Profile is fetched.

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
