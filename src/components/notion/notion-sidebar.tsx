"use client";

import { signOut } from "@/app/actions";
import { ModeToggle } from "@/components/navbar/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Home, LogOut, Plus, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const privatePages = [
  { href: "/profile", label: "Profile", emoji: "👤" },
  { href: "/planning", label: "Planning", emoji: "📅" },
  { href: "/progress", label: "Progress", emoji: "📊" },
] as const;

type NotionSidebarProps = {
  userEmail: string | null;
};

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-[#5c5c5c] dark:text-neutral-500">
      {children}
    </p>
  );
}

export function NotionSidebar({ userEmail }: NotionSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex w-[248px] shrink-0 flex-col border-r border-[#cfcfcf] bg-[#ececec] dark:border-neutral-700 dark:bg-neutral-900">
      <div className="border-b border-[#d4d4d4] bg-[#002145] px-3 py-2.5 dark:border-neutral-700">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
          UBC Course Planner
        </p>
      </div>

      <div className="px-2 pb-1 pt-2">
        <Link
          href="/"
          className="flex items-center gap-2 rounded border border-transparent px-2 py-1.5 text-[13px] text-[#1a1a1a] hover:border-[#cfcfcf] hover:bg-white dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
        >
          <Home className="h-[18px] w-[18px] shrink-0 text-[#002145] dark:text-sky-300" />
          <span className="truncate">Home</span>
        </Link>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2 pb-2">
        <SectionLabel>Pages</SectionLabel>
        <nav className="space-y-0.5">
          {privatePages.map(({ href, label, emoji }) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-2 border-l-[3px] px-2 py-1.5 text-[13px] transition-colors",
                  active
                    ? "border-[#002145] bg-white font-semibold text-[#002145] shadow-sm dark:border-sky-400 dark:bg-neutral-800 dark:text-sky-200"
                    : "border-transparent text-[#333] hover:bg-white/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80"
                )}
              >
                <span className="text-base leading-none">{emoji}</span>
                <span className="truncate">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-[#d4d4d4] p-2 dark:border-neutral-700">
        <button
          type="button"
          className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-[13px] text-[#555] hover:bg-white dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          <Plus className="h-4 w-4" />
          New page
        </button>
      </div>

      <div className="border-t border-[#d4d4d4] bg-[#e4e4e4] p-3 dark:border-neutral-700 dark:bg-neutral-950">
        <div className="mb-3 flex items-center gap-2 rounded px-2 py-1.5 text-[12px] text-[#555] dark:text-neutral-500">
          <Users className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{userEmail ?? "Signed in"}</span>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <form action={signOut} className="flex-1">
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="h-8 w-full justify-start gap-2 px-2 text-[13px] text-[#002145] hover:bg-white dark:text-sky-200 dark:hover:bg-neutral-800"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </Button>
          </form>
        </div>
      </div>
    </aside>
  );
}
