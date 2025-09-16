import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(https://qvfomezzmfbmlcsxucnl.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2Zm9tZXp6bWZibWxjc3h1Y25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNDQ2NTgsImV4cCI6MjA3MzYyMDY1OH0.bilpsV4c940HwUBV0LHtX5p8tVgHIEiHEzb3FcyXrIE);
