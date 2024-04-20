import { Button } from "@/components/ui/button"
import { Post } from "contentlayer/generated"
import Image from "next/image"
import placeholder from "public/jonathan-lebrec-car-ride-3.jpg"
import { format, parseISO } from 'date-fns'


export const ArticleCard = ({ article }: { article: Post }) => {
    return (
        <div className="rounded-lg flex flex-col gap-2 h-72 w-72 bg-white/[0.7]">
            <Image src={placeholder} alt={article.title} className="rounded-t-lg" />
            <h3 className="text-lg font-bold mx-4">{article.title}</h3>
            <div className="flex justify-start gap-2 mx-4">
                <time dateTime={article.date}>
                    {format(parseISO(article.date), 'LLLL d, yyyy')}
                </time>
                |
                <p>{article.readTime} mins</p>
            </div>
            <div className="flex justify-start gap-2 mx-4">
                {article.tags.map((tag) => (
                    <Button key={tag} size="sm">{tag}</Button>
                ))}
            </div>
        </div>
    )
}
