import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

export type NotionBoardColumn = {
  id: string;
  title: string;
  count: number;
  /** Pastel pill tone like Notion status tags */
  tone: "purple" | "amber" | "blue" | "green" | "gray";
  cards: string[];
};

const toneStyles: Record<
  NotionBoardColumn["tone"],
  { pill: string; columnBg: string }
> = {
  purple: {
    pill: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-200",
    columnBg: "bg-[#f5f3ff]/80 dark:bg-violet-950/20",
  },
  amber: {
    pill: "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100",
    columnBg: "bg-[#fffbeb]/90 dark:bg-amber-950/15",
  },
  blue: {
    pill: "bg-sky-100 text-sky-900 dark:bg-sky-950/50 dark:text-sky-100",
    columnBg: "bg-[#f0f9ff]/90 dark:bg-sky-950/15",
  },
  green: {
    pill: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/45 dark:text-emerald-100",
    columnBg: "bg-[#ecfdf5]/90 dark:bg-emerald-950/15",
  },
  gray: {
    pill: "bg-[#e9e9e7] text-[#37352f] dark:bg-neutral-800 dark:text-neutral-200",
    columnBg: "bg-[#f1f1ef]/90 dark:bg-neutral-900/40",
  },
};

type NotionBoardProps = {
  columns: NotionBoardColumn[];
  footer?: ReactNode;
};

export function NotionBoard({ columns, footer }: NotionBoardProps) {
  return (
    <div className="flex min-w-max gap-4 pb-8">
      {columns.map((col) => {
        const t = toneStyles[col.tone];
        return (
          <div
            key={col.id}
            className={cn(
              "flex w-[272px] shrink-0 flex-col rounded border border-[#d4d4d4] dark:border-neutral-700",
              t.columnBg
            )}
          >
            <div className="flex items-center gap-2 border-b border-[#d4d4d4] px-3 py-2.5 dark:border-neutral-700">
              <span
                className={cn(
                  "rounded px-2 py-0.5 text-[12px] font-medium leading-tight",
                  t.pill
                )}
              >
                {col.title}
              </span>
              <span className="ml-auto text-[12px] tabular-nums text-[#666] dark:text-neutral-500">
                {col.count}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-2">
              {col.cards.map((card) => (
                <div
                  key={card}
                  className="cursor-default rounded border border-[#d4d4d4] bg-white px-3 py-2.5 text-[13px] leading-snug text-[#1a1a1a] shadow-sm transition hover:border-[#b0b0b0] dark:border-neutral-600 dark:bg-[#252525] dark:text-neutral-100 dark:hover:border-neutral-500"
                >
                  {card}
                </div>
              ))}
              <button
                type="button"
                className="rounded py-2 pl-1 text-left text-[13px] text-[#666] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
              >
                + New page
              </button>
            </div>
          </div>
        );
      })}
      {footer}
    </div>
  );
}
