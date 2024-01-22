// utils/supabase.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://smztpjkgjmarkadinhhn.supabase.co";
const supabaseToken = process.env.PROJECT_PUBLIC_SUPABASE_ANON_KEY;

// console.log('Supabase URL:', process.env.PROJECT_PUBLIC_SUPABASE_URL);
// console.log('Supabase API Key:', process.env.PROJECT_PUBLIC_SUPABASE_ANON_KEY);


export const supabase = createClient(supabaseUrl, supabaseToken);
