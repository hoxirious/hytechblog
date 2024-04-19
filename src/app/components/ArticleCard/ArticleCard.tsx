import { Button } from "@/components/ui/button"
import { Post } from "contentlayer/generated"
import Image from "next/image"

const getDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
    const locals = 'en-US'
    return new Date(date).toLocaleDateString(locals, options)
}

export const ArticleCard = ({ article }: { article: Post }) => {
    return (
        <div className="rounded-lg flex flex-col h-72 w-72 bg-slate-200">
            <div className="w-full bg-black h-3/4 rounded-t-lg"></div>
            <h3 className="text-xl font-bold mx-4">{article.title}</h3>
            <div className="flex justify-start gap-2 mx-4">
                <p>{getDate(article.date)}</p>
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
