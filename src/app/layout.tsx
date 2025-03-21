import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { twJoin } from "tailwind-merge";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Layout } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Store App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={twJoin(
        geistMono.variable,
        'font-sans antialiased',
        'text-[clamp(0.875rem,0.667rem+0.52vw,1rem)]',
      )}
      suppressHydrationWarning
    >
      <body
        className={twJoin(
          geistSans.variable,
          'font-sans antialiased',
        )}
      >
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
