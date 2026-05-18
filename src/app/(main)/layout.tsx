import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
