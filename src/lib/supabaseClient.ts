import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://amjhsqmejzgegedaexyd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtamhzcW1lanpnZWdlZGFleHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5MTE1NTMsImV4cCI6MjA2MjQ4NzU1M30.wgW2kg3cDFa-Z6prMNY7yzfGKFzxQpxqX74crHvp918'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
