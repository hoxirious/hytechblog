import "@/styles/globals.css";

import { Inter } from "next/font/google";
import NavBar from "./components/Navbar/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Hy Blog",
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
            <body className={`font-sans ${inter.variable}`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
