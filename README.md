# Canterbury Guided Tours

A full-stack web application for Canterbury Guided Tours — a professional Green Badge walking tour company based in Canterbury, UK. The application provides a public-facing website for visitors to browse and book tours, alongside a comprehensive admin panel for managing bookings, guides, rotas, clients, and reporting.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| ORM | [Prisma](https://www.prisma.io/) |
| Database | SQLite (via [libsql](https://github.com/tursodatabase/libsql)) |
| Authentication | [NextAuth v5](https://authjs.dev/) (JWT, credentials) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |

## Features

### Public Website
- **Home page** – hero section, tour highlights, testimonials, and call-to-action
- **Tours** – daily walking tour and private group tour information pages
- **Booking** – online booking forms for daily and group tours
- **About** – company and guide profile pages
- **Contact** – contact form

### Admin Panel (`/admin`)
| Section | Description |
|---|---|
| Dashboard | Live stats: booking counts, active guides, total revenue |
| Daily Bookings | Create, view, and manage daily tour bookings |
| Group Bookings | Manage group/school/corporate enquiries and bookings |
| Clients | Client CRM — contact details, booking history |
| Guides | Guide profiles, badge numbers, CPD records |
| Availability | Manage guide availability by date |
| Rotas | Assign guides to bookings and time slots |
| Invoices | Invoice generation and tracking |
| Reports | Revenue and booking analytics with charts |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/JoeHanson87/CanterburyTourGuides.git
cd CanterburyTourGuides

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and set DATABASE_URL and AUTH_SECRET (see Environment Variables below)

# 4. Push the database schema
npx prisma db push

# 5. Seed the database with sample data
npx prisma db seed

# 6. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the public site.

### Environment Variables

Create a `.env` file in the project root with the following:

```env
# Path to your SQLite database file
DATABASE_URL="file:./dev.db"

# Secret used to sign NextAuth JWTs — generate with: openssl rand -base64 32
AUTH_SECRET="your-secret-here"

# (Optional) Override the default admin password used during seeding
SEED_ADMIN_PASSWORD="your-secure-password"
```

### Admin Login (Development)

After seeding, the admin panel is accessible at `/admin/login`:

| Field | Value |
|---|---|
| Email | `admin@canterburyguidedtours.com` |
| Password | `admin123` (or the value of `SEED_ADMIN_PASSWORD`) |

> ⚠️ **Change the admin password immediately after first login in any non-development environment.**

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx prisma db push` | Apply schema changes to the database |
| `npx prisma db seed` | Seed the database with sample guides, tours, and an admin user |
| `npx prisma studio` | Open Prisma Studio to browse the database |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (Navigation + Footer)
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── tours/                # Tour information pages (daily, group)
│   ├── book/                 # Booking forms (daily, group)
│   └── admin/                # Protected admin panel
│       ├── page.tsx          # Dashboard
│       ├── bookings/         # Daily and group booking management
│       ├── clients/          # Client CRM
│       ├── guides/           # Guide management & CPD
│       ├── availability/     # Guide availability calendar
│       ├── rotas/            # Rota management
│       ├── invoices/         # Invoice management
│       └── reports/          # Analytics and reporting
├── components/               # Shared UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── TourCard.tsx
├── lib/
│   ├── auth.ts               # NextAuth configuration
│   ├── prisma.ts             # Prisma client singleton
│   └── utils.ts              # Shared utilities
└── middleware.ts             # Route protection for /admin/**

prisma/
├── schema.prisma             # Database schema
└── seed.ts                   # Database seed script
```

## Database Schema

The application uses the following core models:

- **User** – Admin accounts for the back-office panel
- **Tour** – Tour product definitions (name, type, price, capacity)
- **Client** – Customer records linked to bookings
- **DailyBooking** – Individual public tour bookings
- **GroupBooking** – Group/corporate tour enquiries and bookings
- **Guide** – Tour guide profiles and badge information
- **GuideAvailability** – Per-date availability records for each guide
- **RotaEntry** – Assignment of a guide to a specific booking/time slot
- **CPDBooking** – Guide Continuing Professional Development records
- **Upsell** – Optional add-on products

## Authentication

The admin panel is protected by NextAuth v5 using a credentials provider (email + bcrypt-hashed password). All routes under `/admin/**` are covered by Next.js middleware and will redirect unauthenticated users to `/admin/login`. Sessions are managed as signed JWTs.
