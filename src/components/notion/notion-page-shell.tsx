import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import {
  MessageSquare,
  MoreHorizontal,
  Plus,
  Share2,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

export type NotionViewTab = {
  label: string;
  active?: boolean;
};

type NotionPageShellProps = {
  workspaceName?: string;
  breadcrumbPage: string;
  icon: ReactNode;
  title: string;
  viewTabs?: NotionViewTab[];
  /** Primary blue “New” in the board toolbar area */
  newButtonLabel?: string;
  children: ReactNode;
};

export function NotionPageShell({
  workspaceName = "UBC",
  breadcrumbPage,
  icon,
  title,
  viewTabs,
  newButtonLabel = "New",
  children,
}: NotionPageShellProps) {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col bg-white dark:bg-[#191919]">
      <header className="flex h-11 shrink-0 items-center justify-between border-b border-[#d4d4d4] bg-[#f0f0f0] px-3 sm:px-4 dark:border-neutral-700 dark:bg-neutral-900">
        <nav
          className="flex min-w-0 items-center gap-1 text-[13px] text-[#666] dark:text-neutral-500"
          aria-label="Breadcrumb"
        >
          <span className="truncate font-semibold text-[#002145] dark:text-sky-300">
            {workspaceName}
          </span>
          <span className="opacity-50">/</span>
          <span className="truncate text-[#333] dark:text-neutral-200">
            {breadcrumbPage}
          </span>
        </nav>
        <div className="flex shrink-0 items-center gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 px-2 text-[13px] font-normal text-[#333] hover:bg-black/[0.06] dark:text-neutral-200 dark:hover:bg-white/[0.06]"
          >
            <Share2 className="h-4 w-4 opacity-70" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#37352f] hover:bg-black/[0.06] dark:text-neutral-200 dark:hover:bg-white/[0.06]"
            aria-label="Favorite"
          >
            <Star className="h-4 w-4 opacity-70" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#37352f] hover:bg-black/[0.06] dark:text-neutral-200 dark:hover:bg-white/[0.06]"
            aria-label="Comments"
          >
            <MessageSquare className="h-4 w-4 opacity-70" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#37352f] hover:bg-black/[0.06] dark:text-neutral-200 dark:hover:bg-white/[0.06]"
            aria-label="More"
          >
            <MoreHorizontal className="h-4 w-4 opacity-70" />
          </Button>
        </div>
      </header>

      <div className="border-b border-[#d4d4d4] bg-white px-6 pb-2 pt-4 dark:border-neutral-700 dark:bg-neutral-900 sm:px-10">
        <div className="flex items-start gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#cfcfcf] bg-[#f4f4f4] text-2xl dark:border-neutral-600 dark:bg-neutral-800">
            {icon}
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#002145] dark:text-neutral-100 sm:text-[2rem]">
              {title}
            </h1>
          </div>
        </div>

        {viewTabs && viewTabs.length > 0 ? (
          <div className="mt-4 flex flex-wrap items-end gap-1 border-b border-[#d4d4d4] dark:border-neutral-700">
            {viewTabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={cn(
                  "-mb-px rounded-t-md px-2.5 py-1.5 text-[13px] transition-colors",
                  tab.active
                    ? "border-b-2 border-[#002145] font-semibold text-[#002145] dark:border-sky-400 dark:text-sky-200"
                    : "mb-px text-[#666] hover:bg-black/[0.04] hover:text-[#002145] dark:text-neutral-500 dark:hover:bg-white/[0.05] dark:hover:text-neutral-200"
                )}
              >
                {tab.label}
              </button>
            ))}
            <button
              type="button"
              className="rounded-md p-1.5 text-[#666] hover:bg-black/[0.05] dark:hover:bg-white/[0.06]"
              aria-label="Add view"
            >
              <Plus className="h-4 w-4" />
            </button>
            <div className="ml-auto hidden sm:block">
              <Button
                type="button"
                size="sm"
                className="h-8 rounded-md bg-[#002145] px-3 text-[13px] font-medium text-white shadow-sm hover:bg-[#001a38] dark:bg-sky-700 dark:hover:bg-sky-600"
              >
                {newButtonLabel}
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          "relative flex min-h-0 flex-1 flex-col overflow-hidden",
          viewTabs && viewTabs.length > 0
            ? "bg-[#f4f4f4] dark:bg-neutral-950"
            : "bg-white dark:bg-[#191919]"
        )}
      >
        {viewTabs && viewTabs.length > 0 ? (
          <div className="absolute right-4 top-3 z-10 sm:hidden">
            <Button
              type="button"
              size="sm"
              className="h-8 rounded-md bg-[#002145] px-3 text-[13px] font-medium text-white shadow-sm"
            >
              {newButtonLabel}
            </Button>
          </div>
        ) : null}
        <div className="min-h-0 flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
