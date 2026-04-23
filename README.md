# Церковь Суный — rusyouthkorea.com

Modern Next.js 14 website for a Russian-speaking youth church in South Korea.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **AI**: Anthropic Claude (claude-sonnet-4-6)
- **Images**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in your credentials in `.env.local`.

### 3. Set up Supabase

Run the SQL schema from `src/lib/supabase.ts` in your Supabase SQL editor:

```sql
-- Events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE,
  time TIME,
  location TEXT,
  is_recurring BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sermons table
CREATE TABLE IF NOT EXISTS sermons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  speaker TEXT,
  youtube_url TEXT,
  thumbnail_url TEXT,
  date DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Groups table
CREATE TABLE IF NOT EXISTS groups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  leader_name TEXT,
  leader_phone TEXT,
  schedule TEXT,
  description TEXT,
  interests TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, event card, countdown, steps |
| `/about` | About the church, team, values |
| `/schedule` | Weekly schedule and location |
| `/media` | Sermons and worship videos |
| `/groups` | Small groups |
| `/new` | First-time visitor guide |
| `/admin` | Password-protected admin dashboard |

## Admin Dashboard (`/admin`)

Password-protected panel with:
- **Events manager** — add/edit/delete church events
- **Sermons manager** — add YouTube sermon links
- **AI Content Assistant** — uses Claude AI to generate content

Default password for local dev: `admin123` (change via `ADMIN_PASSWORD` env var)

## Deploy to Vercel

```bash
npx vercel
```

Add all environment variables in Vercel dashboard under Project Settings → Environment Variables.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `ANTHROPIC_API_KEY` | Anthropic API key for Claude AI |
| `ADMIN_PASSWORD` | Admin dashboard password |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for images |

## Design System

- **Background**: `#f8f7ff`
- **Accent**: `#7B3FFF`
- **Gradient**: `linear-gradient(135deg, #7B3FFF, #FF3CAC)`
- **Dark footer**: `#1a0a3a`
- **Font**: Inter

## Contact

- **Instagram**: [@rusyouthkorea](https://www.instagram.com/rusyouthkorea/)
- **Telegram**: @TsoyMoksa
- **YouTube**: [@ЦерковьСуный](https://www.youtube.com/@ЦерковьСуный)
- **Location**: [Инчхон, район Суный](https://kko.to/w4tMXADYdo)
