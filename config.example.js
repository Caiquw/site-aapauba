// ============================================================
// TEMPLATE — copie este arquivo para "config.js" (que é
// ignorado pelo git) e preencha com seus valores reais para
// rodar o site localmente.
//
// Em produção (Vercel), o config.js de verdade é GERADO
// automaticamente no build a partir das variáveis de ambiente
// do projeto — veja generate-config.js.
// ============================================================

const SUPABASE_URL = "https://SEU-PROJETO.supabase.co";
const SUPABASE_ANON_KEY = "SUA-CHAVE-ANON-PUBLICA";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const WHATSAPP_NUMBER = "5500000000000";

const DONATION_URL_SINGLE = "https://link.mercadopago.com.br/SEU-LINK";
const DONATION_URL_MONTHLY = "https://apoia.se/SEU-LINK";
const ADOPTION_FORM_URL_DOG = "https://docs.google.com/forms/SEU-FORM-CAES";
const ADOPTION_FORM_URL_CAT = "https://docs.google.com/forms/SEU-FORM-GATOS";
