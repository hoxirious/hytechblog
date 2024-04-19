import { allPosts, Post } from "contentlayer/generated";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import Link from "next/link";

export default function Posts() {


    return (
        <div className="cover h-screen w-full">
            <section className="flex flex-wrap gap-8 w-4/5 mx-auto ">
                {allPosts.map((post: Post, index: number) => (
                    <Link href={post.url} key={index} >
                        <ArticleCard key={index} article={post} />
                    </Link>

                ))}
            </section>
        </div>

    )


}


