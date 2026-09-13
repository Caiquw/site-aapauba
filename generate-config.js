// Roda automaticamente no build da Vercel (veja "scripts.build" no package.json).
// Lê as variáveis de ambiente configuradas no painel da Vercel e escreve
// o config.js real, que NUNCA é commitado no git.

const fs = require("fs");

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "";
const DONATION_URL_SINGLE = process.env.DONATION_URL_SINGLE || "https://link.mercadopago.com.br/aapauba";
const DONATION_URL_MONTHLY = process.env.DONATION_URL_MONTHLY || "https://apoia.se/aapauba";
const ADOPTION_FORM_URL_DOG = process.env.ADOPTION_FORM_URL_DOG || "https://docs.google.com/forms/d/e/1FAIpQLScyWeZ6JPL7nJHAm3vSgJEpyFgG0enDqoPlkm5OXRzBivd4iw/viewform";
const ADOPTION_FORM_URL_CAT = process.env.ADOPTION_FORM_URL_CAT || "https://docs.google.com/forms/d/e/1FAIpQLSeAOtI_Ke4YZqh2Usf0kXOM1fIjFwHbwWv2qx_QV980vJxfYQ/viewform";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !WHATSAPP_NUMBER) {
  console.warn(
    "[generate-config] Aviso: uma ou mais variáveis de ambiente não foram definidas. " +
    "Confira SUPABASE_URL, SUPABASE_ANON_KEY e WHATSAPP_NUMBER nas Project Settings da Vercel."
  );
}

const content = `// Gerado automaticamente no build a partir das variáveis de ambiente da Vercel.
// NÃO EDITE este arquivo à mão. Ele não fica versionado no git.

const SUPABASE_URL = "${SUPABASE_URL}";
const SUPABASE_ANON_KEY = "${SUPABASE_ANON_KEY}";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const WHATSAPP_NUMBER = "${WHATSAPP_NUMBER}";

const DONATION_URL_SINGLE = "${DONATION_URL_SINGLE}";
const DONATION_URL_MONTHLY = "${DONATION_URL_MONTHLY}";
const ADOPTION_FORM_URL_DOG = "${ADOPTION_FORM_URL_DOG}";
const ADOPTION_FORM_URL_CAT = "${ADOPTION_FORM_URL_CAT}";
`;

fs.writeFileSync("config.js", content);
console.log("[generate-config] config.js gerado com sucesso.");
