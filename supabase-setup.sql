-- ============================================================
-- SETUP AAPAUBA — rode isso UMA VEZ em:
-- Supabase > seu projeto > SQL Editor > New query > Run
-- ============================================================

-- 1) Tabela de animais
create table if not exists public.animais (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  species text not null check (species in ('cao', 'gato')),
  size text not null check (size in ('pequeno', 'medio', 'grande')),
  age text,
  description text,
  photo_url text,
  status text not null default 'disponivel' check (status in ('disponivel', 'adotado'))
);

-- 2) Ativa Row Level Security (obrigatório antes de criar políticas)
alter table public.animais enable row level security;

-- 3) Qualquer visitante do site pode LER os animais disponíveis
create policy "Leitura publica de animais"
  on public.animais for select
  using (true);

-- 4) Só usuários logados (admins) podem criar/editar/apagar
create policy "Admins podem inserir"
  on public.animais for insert
  to authenticated
  with check (true);

create policy "Admins podem atualizar"
  on public.animais for update
  to authenticated
  using (true);

create policy "Admins podem apagar"
  on public.animais for delete
  to authenticated
  using (true);

-- 5) Bucket de storage para as fotos dos animais
insert into storage.buckets (id, name, public)
values ('animais', 'animais', true)
on conflict (id) do nothing;

-- 6) Qualquer visitante pode VER as fotos (bucket público)
create policy "Leitura publica de fotos"
  on storage.objects for select
  using (bucket_id = 'animais');

-- 7) Só admins logados podem enviar/apagar fotos
create policy "Admins podem enviar fotos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'animais');

create policy "Admins podem apagar fotos"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'animais');

-- ============================================================
-- Depois de rodar este script, crie os admins em:
-- Authentication > Users > Add user (email + senha)
-- Não existe cadastro público no admin.html, só login —
-- os admins precisam ser criados por você no painel do Supabase.
-- ============================================================
