import { Button } from "@/components/ui/button"

export interface Article {
    title: string;
    publishedAt: string;
    readTime: number;
    tags: string[];
    image: string;
}

export const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div className="rounded-lg flex flex-col h-72 w-72 bg-lime-300">
            <div className="w-full bg-black h-3/4 rounded-t-lg"></div>
            <h3 className="text-xl font-bold mx-4">{article.title}</h3>
            <div className="flex justify-start gap-2 mx-4">
                <p>{article.publishedAt}</p>
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
