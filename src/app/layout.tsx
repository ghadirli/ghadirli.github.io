// app/layout.tsx
import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

// You might need to adjust this import path based on your setup
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ali Ghadirli | Personal Website',
  description: 'Personal website of Ali Ghadirli, cofounder at ZRO (Zero Reliance Organizations). Read my articles, book recommendations, and background.',
  keywords: ['Ali Ghadirli', 'ZRO', 'Zero Reliance Organizations', 'cryptocurrency', 'blockchain', 'cryptography'],
  openGraph: {
    title: 'Ali Ghadirli',
    description: 'Cofounder @ ZRO (Zero Reliance Organizations)',
    type: 'website',
    url: 'https://yourdomain.com',
  },
  robots: 'index, follow',
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ali Ghadirli",
              "url": "https://yourdomain.com",
              "jobTitle": "Cofounder",
              "worksFor": {
                "@type": "Organization",
                "name": "ZRO (Zero Reliance Organizations)"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "University of Waterloo"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Sharif University of Technology"
                }
              ],
              "sameAs": [
                "https://twitter.com/yourusername",
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername"
              ]
            }
          `}
        </Script>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        {children}
      </body>
    </html>
  )
}