import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenta's Portfolio",
  description: "Kenta's personal portfolio website",
};

import { ConditionalHeader } from "@/components/layout/ConditionalHeader"
import { MuiThemeProvider } from "@/components/providers/mui-theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0, backgroundColor: '#0a0a0a' }}
      >
        <MuiThemeProvider>
          <ConditionalHeader />
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
