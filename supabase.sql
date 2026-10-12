-- Optional shared statistics schema for a later Supabase integration.
create table if not exists public.track_stats (
  track_id text primary key,
  play_count bigint not null default 0,
  like_count bigint not null default 0
);
create table if not exists public.track_likes (
  track_id text not null,
  visitor_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (track_id, visitor_id)
);
alter table public.track_stats enable row level security;
alter table public.track_likes enable row level security;
create policy "stats readable by everyone" on public.track_stats for select using (true);
create policy "likes readable by everyone" on public.track_likes for select using (true);
-- Writes should be performed through validated database functions, not direct client updates.
