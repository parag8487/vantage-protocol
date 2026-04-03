"use client"

import { useState, useEffect } from 'react'

export interface Profile {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    subscriptionStatus: string
    charityPercentage: number
    selectedCharityId: string | null
    selectedCharity: {
        id: string
        name: string
        description: string
    } | null
    scores: {
        id: string
        value: number
        datePlayed: string
        createdAt: string
    }[]
    winnings: {
        id: string
        prizeAmount: number
        matchCount: number
        status: string
        draw: {
            monthYear: string
        }
    }[]
}

export function useProfile() {
    const [profile, setProfile] = useState<Profile | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProfile = async () => {
        try {
            setIsLoading(true)
            const res = await fetch('/api/profile')
            if (!res.ok) throw new Error('Failed to fetch profile')
            const data = await res.json()
            setProfile(data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    return { profile, isLoading, error, refreshProfile: fetchProfile }
}
