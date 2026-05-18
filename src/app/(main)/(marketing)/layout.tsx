import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1 bg-background">{children}</main>
      <Footer />
    </>
  );
}
