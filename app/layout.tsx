import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { serverUser } from "@/lib/serveruser";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Apartamenti",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await serverUser();
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <QueryProvider>
          <Navbar user={user} />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
