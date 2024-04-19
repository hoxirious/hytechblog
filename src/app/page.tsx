import Image from "next/image";
import foxIcon from "../../public/animated-fox-pixel.png";
import backyard from "../../public/backyard.gif";
import { Linkedin, LucideGithub } from "lucide-react";
import LogoLink from "./components/Logo/LogoLink";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
    return (
        <div className="mb-8">
            <h2 className="mb-1 text-xl">
                <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
                    {post.title}
                </Link>
            </h2>
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
            <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </div>
    )
}

export default function HomePage() {

    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <main className="flex min-h-screen flex-col items-center justify-center text-white bg-primary">
            <div className="w-full">
                <section className="cover">
                    <div className="mb-12">
                        <Image src={foxIcon} alt="Logo" className="rounded-full w-40 text-center m-auto" />
                        <h1 className="text-4xl font-bold text-center">Hy Huynh</h1>
                        <p className="text-center">Unemployed Software Engineer</p>
                        <div className="flex justify-center">
                            <LogoLink icon={<Linkedin size={32} />} link="https://www.linkedin.com/in/hoxirious/" />
                            <LogoLink icon={<LucideGithub size={32} />} link="https://www.github.com/hoxirious" />
                        </div>
                    </div>
                    <iframe className="m-auto rounded-lg" src="https://www.youtube.com/embed/e0BQWxOaljU?enablejsapi=1" width="560" height="315" title="Hack The Change 2021 Demo" frameBorder="0" allowFullScreen />
                </section>
                <section className="py-8 flex flex-col justify-center ">
                    <h2 className="text-2xl font-bold">Recents</h2>
                    <div className="grid mt-4 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((article: Post, index: number) => (
                            <Link href={article.url} key={index} >
                                <ArticleCard key={index} article={article} />
                            </Link>
                        ))}
                    </div>
                    <Button variant="outline" size="lg" className="mt-8 mx-auto">Show more</Button>
                </section>
                <section className="flex footer">
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
