import { createClient } from "@/utils/supabase/server";
import ProfileClient from "./_components/profile-client";

export default async function ProfilePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <ProfileClient
      email={user?.email ?? ""}
      userId={user?.id ?? ""}
    />
  );
}
