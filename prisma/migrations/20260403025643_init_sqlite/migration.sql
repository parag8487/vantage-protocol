-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "subscriptionStatus" TEXT NOT NULL DEFAULT 'INACTIVE',
    "stripeCustomerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "selectedCharityId" TEXT,
    "charityPercentage" REAL NOT NULL DEFAULT 10.0,
    CONSTRAINT "Profile_selectedCharityId_fkey" FOREIGN KEY ("selectedCharityId") REFERENCES "Charity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Score" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profileId" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "datePlayed" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Score_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Charity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DrawResult" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "monthYear" TEXT NOT NULL,
    "poolTotal" REAL NOT NULL,
    "winningNumbers" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "executedAt" DATETIME
);

-- CreateTable
CREATE TABLE "DrawParticipant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "drawId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "lockedScores" TEXT NOT NULL,
    CONSTRAINT "DrawParticipant_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "DrawResult" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DrawParticipant_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Winner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "drawId" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "matchCount" INTEGER NOT NULL,
    "prizeAmount" REAL NOT NULL,
    "proofImageUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING_PROOF',
    CONSTRAINT "Winner_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "DrawResult" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Winner_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_stripeCustomerId_key" ON "Profile"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "Score_profileId_createdAt_idx" ON "Score"("profileId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "DrawResult_monthYear_key" ON "DrawResult"("monthYear");
