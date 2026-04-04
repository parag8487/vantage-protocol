import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
import prisma from '@/lib/prisma.server'

/**
 * Handles Score Entry enforcing the 'Rolling 5' business logic.
 */
export async function POST(req: Request) {
    try {
        const { profileId, value, datePlayed } = await req.json()

        // 1. Validation
        if (value < 1 || value > 45) {
            return NextResponse.json({ error: 'Score must be between 1 and 45' }, { status: 400 })
        }

        // 2. Transaction: Insert new score and enforce array size of 5
        const result = await prisma.$transaction(async (tx: any) => {
            // Insert the new score
            const newScore = await tx.score.create({
                data: {
                    profileId,
                    value,
                    datePlayed: new Date(datePlayed)
                }
            })

            // Fetch all scores for the user ordered by creation descending
            const userScores = await tx.score.findMany({
                where: { profileId },
                orderBy: { createdAt: 'desc' },
                select: { id: true }
            })

            // If user has more than 5 scores, delete the oldest
            const scoresToDelete = userScores.slice(5)

            if (scoresToDelete.length > 0) {
                await tx.score.deleteMany({
                    where: {
                        id: { in: scoresToDelete.map((s: { id: string }) => s.id) }
                    }
                })
            }

            return newScore
        })

        return NextResponse.json({ message: 'Score saved successfully', score: result })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
