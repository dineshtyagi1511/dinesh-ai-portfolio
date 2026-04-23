import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

// 1. FONT CONFIGURATION
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. SEO METADATA
export const metadata: Metadata = {
  title: "Dinesh | AI Engineer Portfolio",
  description: "Production-grade LLM, RAG, and MLOps projects",
};

// 3. THE SINGLE ROOT LAYOUT
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-white relative overflow-x-hidden">
        
        {/* Global animated background (Blue/White Interactive Grid) */}
        <Background />

        {/* Main content layer 
           Note: If you want to use <motion.div> here, this file must be a Client Component.
           However, keeping Layout as a Server Component is better for SEO.
           The fade-in is better handled inside individual page.tsx files or a template.tsx.
        */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>

      </body>
    </html>
  );
}