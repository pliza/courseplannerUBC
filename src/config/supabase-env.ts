function trim(value: string | undefined): string {
  return value?.trim() ?? "";
}

function looksLikePlaceholder(url: string, anonKey: string): boolean {
  const combined = `${url} ${anonKey}`.toLowerCase();
  return (
    combined.includes("your-supabase") ||
    combined.includes("replace_me")
  );
}

/**
 * URL for Supabase. Prefer NEXT_PUBLIC_* so the same values work in the browser bundle.
 * SUPABASE_URL is a fallback on the server / middleware only (not inlined for client).
 */
export function getSupabaseUrl(): string {
  return (
    trim(process.env.NEXT_PUBLIC_SUPABASE_URL) ||
    trim(process.env.SUPABASE_URL)
  );
}

/**
 * Anon (public) API key. Prefer NEXT_PUBLIC_SUPABASE_ANON_KEY for browser + server.
 */
export function getSupabaseAnonKey(): string {
  return (
    trim(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
    trim(process.env.SUPABASE_ANON_KEY)
  );
}

export function getSupabaseClientEnv(context: string): {
  url: string;
  anonKey: string;
} {
  const url = getSupabaseUrl();
  const anonKey = getSupabaseAnonKey();

  if (!url || !anonKey || looksLikePlaceholder(url, anonKey)) {
    throw new Error(
      [
        `Invalid or missing Supabase configuration (${context}).`,
        "",
        "Do this:",
        "1. Create `.env.local` in the project root (same folder as package.json). Next.js does NOT load `.env.example`.",
        "2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your Project URL and anon public key from:",
        "   https://supabase.com/dashboard/project/_/settings/api",
        "3. Remove quotes around values if you added any; avoid trailing spaces.",
        "4. Restart the dev server (stop and run `npm run dev` again).",
        "",
        `Resolved: url=${url ? "present" : "MISSING"}, anonKey=${anonKey ? "present" : "MISSING"}.`,
      ].join("\n")
    );
  }

  return { url, anonKey };
}
