import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
const supabaseUrl = 'https://qwlmjkbyquocrklrqndp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3bG1qa2J5cXVvY3JrbHJxbmRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2Mzg4MjUsImV4cCI6MjAxNTIxNDgyNX0.tN3p2UxVzdrMkwppL6YEGgxLpwu1Ccp78oyUh6FjIzI'
const supabase = createClient(supabaseUrl, supabaseKey)

var myButton = document.getElementById('notifiedButton');
myButton.addEventListener('click', async function() {
  let email = document.getElementById('emailInput').value;
  const { error } = await supabase
    .from('emails')
    .insert({email: email })
  document.getElementById("emailForm").innerHTML = "<p>Thanks for your support you will get notified!</p>"
 });
