import Image from "next/image";
import foxIcon from "../../public/animated-fox-pixel.png";
import { Linkedin, LucideGithub, FileText } from "lucide-react";
import LogoLink from "./components/Logo/LogoLink";
//import { Button } from "@/components/ui/button";
//import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import NavbarItem from "./components/Navbar/components/NavbarItem";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Navbar from "./components/Navbar/Navbar";

export default function HomePage() {

    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).slice(0, 6)

    return (
        <main className="flex flex-col grow items-center justify-center text-white bg-gradient-to-b to-primary from-[#11222A]">
            <div className="w-full flex flex-col grow">
                <section className="cover flex flex-col grow">
                    <div className="py-12">
                        <Image src={foxIcon} alt="Logo" className="rounded-full w-48 text-center m-auto" />
                        <h1 className="text-6xl font-bold m-4 uppercase text-center">Hy Huynh</h1>
                        <div className="text-center">
                            <a href="https://www.woodmac.com" className="text-2xl bg-gray-200/[0.2] mr-2 inline underline text-blue-500 hover:text-blue-700">Wood Mackenzie</a>
                            <p className="text-2xl bg-[#1F3F57]/[0.7] inline pr-1 mx-1"> Software Engineer I</p>
                        </div>
                        <div className="flex justify-center">
                            <LogoLink icon={<Linkedin size={32} />} link="https://www.linkedin.com/in/hy-h-40983b1b6/" />
                            <LogoLink icon={<LucideGithub size={32} />} link="https://www.github.com/hoxirious" />
                            <a href="/Hy_Huynh_Resume.pdf" download="Hy_Huynh_Resume" title="Resume"> <FileText size={32} className="m-2 text-primary-foreground hover:text-primary" /></a>
                        </div>
                    </div>
                    <iframe className="mx-auto rounded-lg w-[300px] md:w-[560px] h-[200px] md:h-[315px]"
                        src="https://www.youtube.com/embed/e0BQWxOaljU?enablejsapi=1"
                        title="Hack The Change 2021 Demo" frameBorder="0" allowFullScreen />
                    <p className="absolute left-0 bottom-0 italic text-sm text-gray-500">https://imgur.com/gallery/8a66g</p>
                </section>
            </div>
        </main>
    );
}
