"use client"

import Image from "next/image";
import type { Metadata } from "next";
import { inter, roboto } from "@/app/fonts";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()

  return (
    <html lang="en">
      <head>
        <title>Component Practice</title>
        <meta name="description" content="Generated by create next app" />
      </head>

      <body className={roboto.className}>
        <header className="p-8 border-2">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </Link>
            
            <h1 className="text-xl">path:{path}</h1>
          </div>

          
        </header>

        {children}
      </body>
    </html>
  );
}
