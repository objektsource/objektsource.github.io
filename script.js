import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qwlmjkbyquocrklrqndp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { error } = await supabase
  .from('emails')
  .insert({ ip: "121.121.121.121", email: "test@email.com" })

console.log(supabaseUrl)
