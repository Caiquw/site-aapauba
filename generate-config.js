// Roda automaticamente no build da Vercel (veja "scripts.build" no package.json).
// Lê as variáveis de ambiente configuradas no painel da Vercel e escreve
// o config.js real, que NUNCA é commitado no git.

const fs = require("fs");

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "";

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
`;

fs.writeFileSync("config.js", content);
console.log("[generate-config] config.js gerado com sucesso.");
