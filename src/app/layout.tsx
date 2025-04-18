import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import ClientBody from "@/components/ClientBody";

export const metadata: Metadata = {
  title: "Harshal Malani",
  description: "I am just a chill guy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
