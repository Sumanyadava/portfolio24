import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lamp } from "@/components/Lamp";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { VortexTitle } from "@/components/VortexTitle";
import { Socials } from "@/components/Socials";
import { Skills } from "@/components/Skills";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suman ",
  description: "Developed by suman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        <Lamp/>
        <Grid/>
        <Hero />
        <VortexTitle/>
        <Skills/>
        <Socials/>
        <Footer/>
        
        
        </body>
    </html>
  );
}
