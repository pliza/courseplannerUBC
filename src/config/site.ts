type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

const defaultBaseUrl = "http://localhost:3000";

function isAbsoluteHttpUrl(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (explicit) {
    const normalized = explicit.replace(/\/$/, "");
    if (isAbsoluteHttpUrl(normalized)) return normalized;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const normalized = `https://${vercel.replace(/\/$/, "")}`;
    if (isAbsoluteHttpUrl(normalized)) return normalized;
  }

  return defaultBaseUrl;
}

const baseUrl = getBaseUrl();

export const siteConfig: SiteConfig = {
  name: "Next Level UI",
  description:
    "Blazing-fast, interactive app built with latest web tech (Next.js 14). Modern design (Shadcn, Tailwind CSS). Open-source & yours to explore!",
  url: baseUrl,
  ogImage: `${baseUrl}/open-graph.png`,
  links: {
    twitter: "https://twitter.com/AdhithyaSarath",
    github: "https://github.com/SarathAdhi",
  },
};
