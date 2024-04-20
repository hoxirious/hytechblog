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
            <body className={`font-sans ${inter.variable} flex flex-col h-screen`}>
                <Analytics />
                <SpeedInsights />
                <Navbar />
                <div className="grow">
                    {children}
                </div>
                <section className="footer">
                    <div className="w-4/5 flex mx-auto">
                        <div className="mr-auto text-white flex gap-4 items-center">
                            <Link href="/">
                                <NavbarItem text="Home" />
                            </Link>
                            <LogoLink icon={<Linkedin size={24} />} link="https://www.linkedin.com/in/hy-h-40983b1b6/" />
                            <LogoLink icon={<LucideGithub size={24} />} link="https://www.github.com/hoxirious" />
                        </div>
                        <div className="ml-auto text-white my-auto">
                            <span className="text-sm">@2001 Vietnam</span>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    );
}
