import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  is_recurring: boolean;
  created_at: string;
};

export type Sermon = {
  id: string;
  title: string;
  speaker: string;
  youtube_url: string;
  thumbnail_url: string;
  date: string;
  description: string;
  created_at: string;
};

export type Group = {
  id: string;
  name: string;
  leader_name: string;
  leader_phone: string;
  schedule: string;
  description: string;
  interests: string[];
  created_at: string;
};

export const supabaseSchema = `
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
`;
