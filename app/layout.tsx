import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaedon Spurlock",
  description: "Developer Portfolio of Jaedon Spurlock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-8 max-w-[600px] mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="pointer-events-none opacity-70 fixed top-0 right-0 z-[-2] h-[700px] w-[700px] bg-[radial-gradient(110%_60%_at_70%_20%,rgba(0,163,255,0.1)_0%,rgba(0,163,255,0)_70%)] dark:bg-[radial-gradient(110%_60%_at_70%_20%,rgba(0,163,255,0.15)_0%,rgba(0,163,255,0)_80%)]"></div>
          <div className="pointer-events-none opacity-70 fixed top-0 left-0 z-[-2] h-[700px] w-[700px] bg-[radial-gradient(110%_60%_at_20%_20%,rgba(0,163,255,0.1)_0%,rgba(0,163,255,0)_70%)] dark:bg-[radial-gradient(110%_60%_at_20%_20%,rgba(0,163,255,0.15)_0%,rgba(0,163,255,0)_80%)]"></div>

          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
