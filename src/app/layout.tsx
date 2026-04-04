import { Inter, Playfair_Display, Outfit, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable, outfit.variable, "font-sans", geist.variable)}>
      <body className={`antialiased bg-white text-neutral-900 font-sans selection:bg-indigo-100 selection:text-indigo-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
