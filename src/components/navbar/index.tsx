import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { signOut } from "@/app/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/utils/supabase/server";
import { BookOpen, UserCircle2, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/planning", label: "Planning" },
  { href: "/progress", label: "Progress" },
] as const;

const Navbar = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
        {/* pill container */}
        <div className="flex w-full items-center justify-between rounded-2xl border border-border bg-background px-5 py-2.5 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-foreground">
              CoursePlannerUBC
            </span>
          </Link>

          {/* Center links */}
          <nav className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2">
            <ModeToggle />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    aria-label="Profile menu"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <UserCircle2 className="h-[18px] w-[18px]" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={8} className="w-52">
                  <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
                    {user.email}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex cursor-pointer items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="text-destructive focus:text-destructive">
                    <form action={signOut} className="w-full">
                      <button type="submit" className="flex w-full items-center gap-2">
                        <LogOut className="h-4 w-4" />
                        Log out
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild size="sm" variant="outline" className="rounded-lg text-sm">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
