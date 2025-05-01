// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

// You might need to adjust this import path based on your setup
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name | Personal Website',
  description: 'Personal website showcasing my work, articles and books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        {children}
      </body>
    </html>
  )
}