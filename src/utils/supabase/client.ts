import { getSupabaseClientEnv } from "@/config/supabase-env";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const { url, anonKey } = getSupabaseClientEnv("browser");
  return createBrowserClient(url, anonKey);
}
