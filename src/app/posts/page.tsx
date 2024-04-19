import { allPosts, Post } from "contentlayer/generated";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import Link from "next/link";

export default function Posts() {


    return (
        <div className="cover h-screen w-full relative">
            <section className="flex flex-wrap gap-8 w-4/5 mx-auto ">
                {allPosts.map((post: Post, index: number) => (
                    <Link href={post.url} key={index} >
                        <ArticleCard key={index} article={post} />
                    </Link>

                ))}
            </section>
            <p className="absolute left-0 bottom-0 italic text-sm text-gray-500">https://imgur.com/gallery/8a66g</p>
        </div>

    )


}


