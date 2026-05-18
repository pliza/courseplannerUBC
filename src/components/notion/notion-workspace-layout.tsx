import { NotionSidebar } from "@/components/notion/notion-sidebar";
import { createClient } from "@/utils/supabase/server";

export async function NotionWorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex min-h-0 flex-1 bg-[#e8e8e8] text-[#1a1a1a] dark:bg-neutral-950 dark:text-neutral-200">
      <NotionSidebar userEmail={user?.email ?? null} />
      <div className="flex min-h-0 min-w-0 flex-1 flex-col border-l border-[#cfcfcf] bg-[#fafafa] dark:border-neutral-700 dark:bg-neutral-900">
        {children}
      </div>
    </div>
  );
}
