import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import { Linkedin, LucideGithub } from "lucide-react";
import LogoLink from "./components/Logo/LogoLink";
import Link from "next/link";
import NavbarItem from "./components/Navbar/components/NavbarItem";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "hytechblog",
    description: "A personal blog on my tech journey",
    icons: [{ rel: "icon", url: "/animated-fox-pixel.png" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable} flex flex-col h-full`}>
                <Analytics />
                <SpeedInsights />
                <Navbar />
                <div className="flex flex-col h-[90vh]">
                    {children}
                </div>
            </body>
        </html>
    );
}
