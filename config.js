const SUPABASE_URL = "https://gfwrqxylbwzfygtavwmd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdmd3JxeHlsYnd6ZnlndGF2d21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwNzg1MTMsImV4cCI6MjEwNDY1NDUxM30.txuPm1hVw1tup3j-WpyXHX1KkEH5cL64g1vwNUfbE5k";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Número de WhatsApp da equipe que recebe os pedidos de adoção/informações
// Formato: código do país + DDD + número, só dígitos (sem espaços, +, ( ) ou -)
const WHATSAPP_NUMBER = "5516991106370";
