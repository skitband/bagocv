// utils/supabase.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://smztpjkgjmarkadinhhn.supabase.co";
const supabaseToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtenRwamtnam1hcmthZGluaGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4MjEyMDAsImV4cCI6MjAyMTM5NzIwMH0.PjLj0s0MvpSIw8EjKpRQ0lObLtE6X56v-dOqSrByI5g";

// console.log('Supabase URL:', process.env.PROJECT_PUBLIC_SUPABASE_URL);
// console.log('Supabase API Key:', process.env.PROJECT_PUBLIC_SUPABASE_ANON_KEY);


export const supabase = createClient(supabaseUrl, supabaseToken);
