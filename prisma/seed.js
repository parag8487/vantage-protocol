const { PrismaClient } = require('../src/generated/client')
const prisma = new PrismaClient()

async function main() {
    console.log('Seeding data...')

    // 1. Create Charities
    const charities = [
        { name: 'Pure Water Project', description: 'Providing clean water to remote communities.' },
        { name: 'Youth Golf Fund', description: 'Getting kids into sports early.' },
        { name: 'Oceans Foundation', description: 'Cleaning the world\'s oceans.' }
    ]

    for (const c of charities) {
        await prisma.charity.upsert({
            where: { id: c.name }, // This is just for seeding, usually ID is UUID
            update: {},
            create: {
                id: c.name.toLowerCase().replace(/\s+/g, '-'),
                name: c.name,
                description: c.description
            }
        })
    }

    // 2. Create a Mock User (for local testing without real Supabase redirect)
    const testUser = await prisma.profile.upsert({
        where: { email: 'test@vantage.pro' },
        update: {},
        create: {
            id: 'test-user-id',
            email: 'test@vantage.pro',
            firstName: 'Test',
            lastName: 'User',
            role: 'ADMIN',
            subscriptionStatus: 'ACTIVE'
        }
    })

    // 3. Create some scores
    for (let i = 0; i < 7; i++) {
        await prisma.score.create({
            data: {
                profileId: testUser.id,
                value: 30 + Math.floor(Math.random() * 10),
                datePlayed: new Date(Date.now() - i * 24 * 60 * 60 * 1000)
            }
        })
    }

    console.log('Seed completed.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
