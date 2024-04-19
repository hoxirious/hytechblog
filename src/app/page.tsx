import Image from "next/image";
import foxIcon from "../../public/animated-fox-pixel.png";
import { Linkedin, LucideGithub } from "lucide-react";
import LogoLink from "./components/Logo/LogoLink";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";


export default function HomePage() {

    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-gradient-to-b to-primary from-[#11222A] from-70%">
            <div className="w-full">
                <section className="cover relative">
                    <div className="mb-12">
                        <Image src={foxIcon} alt="Logo" className="rounded-full w-40 text-center m-auto" />
                        <h1 className="text-4xl font-bold text-center">Hy Huynh</h1>
                        <p className="text-center">
                            <a href="https://dictionary.cambridge.org/dictionary/english/unemployed" className="text-sm inline underline text-gray-300 hover:text-gray-100">[Unemployed]</a>
                            <p className="bg-[#1F3F57]/[0.7] inline pr-1 mx-1"> Software Engineer</p>
                        </p>
                        <div className="flex justify-center">
                            <LogoLink icon={<Linkedin size={32} />} link="https://www.linkedin.com/in/hy-h-40983b1b6/" />
                            <LogoLink icon={<LucideGithub size={32} />} link="https://www.github.com/hoxirious" />
                        </div>
                    </div>
                    <iframe className="m-auto rounded-lg" src="https://www.youtube.com/embed/e0BQWxOaljU?enablejsapi=1" width="560" height="315" title="Hack The Change 2021 Demo" frameBorder="0" allowFullScreen />
                    <p className="absolute left-0 bottom-0 italic text-sm text-gray-500">https://imgur.com/gallery/8a66g</p>
                </section>
                <section className="py-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">[Recents]</h2>
                    <div className="grid mt-4 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((article: Post, index: number) => (
                            <Link href={article.url} key={index} >
                                <ArticleCard key={index} article={article} />
                            </Link>
                        ))}
                    </div>
                    <Link href="/posts" className="mt-8 mx-auto">
                        <Button variant="destructive" size="lg" className="bg-[#E6681D]">Show more</Button>
                    </Link>
                </section>
            </div>
        </main>
    );
}
