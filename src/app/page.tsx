import Image from "next/image";
import bgeIcon from "../../public/animated-fox-pixel.png";
import { Linkedin, LucideGithub } from "lucide-react";
import LogoLink from "./components/Logo/LogoLink";
import { Button } from "@/components/ui/button";
import { Article, ArticleCard } from "./components/ArticleCard/ArticleCard";


export default function HomePage() {

    const articles: Article[] = [
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Hello World",
            publishedAt: "2021-09-09",
            readTime: 5,
            tags: ["hello", "world"],
            image: "https://via.placeholder.com/150"
        },
    ]

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-primary text-white">
            <div className="max-w-[80%] m-auto">
                <section>
                    <Image src={bgeIcon} alt="Logo" className="rounded-full w-40 text-center m-auto" />
                    <h1 className="text-4xl font-bold text-center">Hy Huynh</h1>
                    <p className="text-center">Unemployed Software Engineer</p>
                    <iframe className="m-auto" src="https://www.youtube.com/embed/e0BQWxOaljU?enablejsapi=1" width="560" height="315" title="Hack The Change 2021 Demo" frameBorder="0" allowFullScreen />
                    <div className="flex justify-center">
                        <LogoLink icon={<Linkedin size={32} />} link="https://www.linkedin.com/in/hoxirious/" />
                        <LogoLink icon={<LucideGithub size={32} />} link="https://www.github.com/hoxirious" />
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-bold">Recents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article: Article, index: number) => (
                            <ArticleCard key={index} article={article} />
                        ))}
                    </div>
                    <Button variant="outline" size="lg">Show more</Button>
                </section>
                <section className="flex">
                    <div className="mr-auto">
                        <span className="text-sm">Tags</span>
                        <span className="text-sm">Authors</span>
                    </div>
                    <div className="ml-auto">
                        <span className="text-sm">@2024 Hy Huynh</span>
                    </div>
                </section>
            </div>
        </main>
    );
}
