// import {createClient} from '@supabase/supabase-js';

// const supabaseUrl=import.meta.env.VITE_PUBLIC_SUPABASE_URL;
// const supabaseAnonkey=import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
// export const supabase=createClient(supabaseUrl,supabaseAnonkey);

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vqudtezdzidfgfcexqpm.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)