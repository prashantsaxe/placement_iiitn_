import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import SessionProvider from "@/components/session-provider";
import FocusRingFix from "@/components/focus-ring-fix";
import { AppLayout } from '@/components/layout/AppLayout';
import { Chatbot } from '@/components/chatbot/Chatbot';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IIIT Nagpur Placement Cell",
  description: "Training and Placement Cell of IIIT Nagpur",
  icons: {
    icon: "/logo.png", // This sets your favicon
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <FocusRingFix />
            <AppLayout>
              {children}
            </AppLayout>
            <Chatbot />
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
