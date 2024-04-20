'use client'
import { allPosts, Post } from "contentlayer/generated";
import { ArticleCard } from "../components/ArticleCard/ArticleCard";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react";
import useWindowDimensions from "@/components/hooks/useWindowDimension";

const getMaxPostsPerPage = (height?: number, width?: number) => {
    if (!height || !width) {
        return 3;
    }

    if (width < 880) {
        return 2;
    }
    if (width < 1340) {
        return 4;
    }
    if (width < 1600) {
        return 6
    }
    return 12;
}

export default function Posts() {

    const [currentPage, setCurrentPage] = useState(1);

    const { height, width } = useWindowDimensions();
    const [maxPostsPerPage, setMaxPostsPerPage] = useState(getMaxPostsPerPage(height, width))
    const [currentPosts, setCurrentPosts] = useState(allPosts.slice(currentPage * maxPostsPerPage, maxPostsPerPage));

    useEffect(() => {
        const localMaxPostsPerPage = getMaxPostsPerPage(height, width);
        setMaxPostsPerPage(localMaxPostsPerPage);
        const start = (currentPage - 1) * localMaxPostsPerPage;
        setCurrentPosts(allPosts.slice(start, start + localMaxPostsPerPage));
    }, [height, width, currentPage])

    const onPageNext = () => {
        setCurrentPage((prev) => {
            if (prev + 1 > (allPosts.length / maxPostsPerPage) + 1) {
                return prev;
            }
            return prev + 1;
        })
    }
    const onPagePrevious = () => {
        setCurrentPage((prev) => {
            if (prev - 1 == 0) {
                return prev;
            }
            return prev - 1;
        }
        )
    }
    return (
        <div className="cover h-screen w-full relative">
            <section className="flex flex-wrap justify-center gap-8 w-4/5 mx-auto">
                {currentPosts.map((post: Post, index: number) => (
                    <Link href={post.url} key={index} >
                        <ArticleCard key={index} article={post} />
                    </Link>

                ))}
            </section>
            <p className="absolute left-0 bottom-0 italic text-sm text-gray-500">https://imgur.com/gallery/8a66g</p>
            <Pagination className="absolute bottom-20">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious className="text-white" onClick={onPagePrevious} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-white">{currentPage}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext className="text-white" onClick={onPageNext} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>

    )
}


