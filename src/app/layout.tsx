import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";
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
          <Header id="#header"></Header>
          {children}
          <Footer id="#footer" />
        </ThemeProvider>
      </body>
    </html>
  );
}
