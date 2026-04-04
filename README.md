# Vantage Protocol
**A Premium Impact Subscription & Luxury Monthly Draw Engine**

Welcome to the **Vantage Protocol**, a next-generation SaaS platform built to seamlessly blend recurring subscription management with high-end, transparent, and algorithmic monthly charitable draws. Designed with a 'Luxury Hero' aesthetic, it caters to elite subscribers while giving back to impactful global charities.

## 🚀 Production Credentials
To access the fully featured Operator Dashboard, use the following secure credentials:
- **Email:** `admin@vantage.golf`
- **Access Key:** `999999`

> **Note on Deployed Environments (Vercel / Supabase):** 
> Yes, these credentials and the entire administrative suite will work flawlessly on your deployed application. Production environments run native Linux containers where the standard Prisma binaries connect directly to your live Supabase Ledger. The platform is architected to scale automatically without local hardware constraints.

---

## 💎 Core Architecture & Features

### 1. Subscription & Payment Gateway (Stripe)
- Integrated Stripe Checkout for `EXECUTIVE` and `ELITE` membership tiers.
- Real-time webhook processing for subscription lifecycles (Active, Lapsed, Cancelled).

### 2. User Protocol & Identity Deck
- **Client Side:** Users can submit their localized scores, view their membership status, and track monthly draws.
- **Admin Side:** Operators can audit identities, manually override score synchronizations, and manage protocol access via the *Identity Deck*.

### 3. Charity & Beneficiary Directory
- Fully dynamic routing for charities (`/charities/[id]`).
- Operators can add, modify, and archive protocol beneficiaries directly from the *Charity Directory*.

### 4. Secure Draw Engine (Oracle)
- Algorithmic monthly jackpot execution.
- Evaluates trailing user scores against randomized winning subsets to partition the active pool.
- Validated via secure API endpoints utilizing transactional database rollups.

---

## 🛠 Tech Stack
- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Styling:** Tailwind CSS + Framer Motion + Radix UI
- **Database:** PostgreSQL (Hosted on **Supabase**)
- **ORM:** Prisma 7 with Resiliency Mock Fallbacks for local testing
- **Authentication:** Custom JWT-grade session cookies / Credentials
- **Emails:** Resend & React Email

---

## ⚙️ Development & Local Setup

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

### Prisma Engine Fallback
If you encounter `Prisma Client` bindings issues on local Windows configurations, the platform automatically drops into a **Resiliency Mock Mode**. This bypasses hardware limitations to ensure the frontend and API contracts remain stable for UI development. When deployed to Vercel, it intrinsically uses the native Postgres driver.

---

## 📖 Comprehensive Documentation
All project specifications, architectural decisions, and API schemas are heavily documented in the `/docs` directory.
- `01-Requirement_Analysis.md`: Core MVP goals.
- `05-System_Architecture.md`: Service layers.
- `06-Database_Schema.md`: Prisma data models.
- `17-Final_Review.md`: Final production certification sign-off.

---
*Built for the Digital Hero Submission.*
