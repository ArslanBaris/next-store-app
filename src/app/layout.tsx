import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { twJoin } from "tailwind-merge";
import "./globals.css";
import { Layout } from "@/components/layout";
import AppProvider from "@/providers/app-provider";
import { Toaster } from "sonner"
import { ThemeProvider } from "@/providers/theme-provider";

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
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Layout>
              {children}
              <Toaster richColors position="bottom-left" />
            </Layout>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
