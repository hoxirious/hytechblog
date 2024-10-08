import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => {
        return post._raw.flattenedPath === `${params.slug}`

    })
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => {
        return post._raw.flattenedPath === `${params.slug}`

    })
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    return (
        <div className="cover w-full h-full cover relative">
            <div className="grid grid-cols-1 h-full px-2 gap-4 md:grid-cols-5 md:px-12 ">
                <article className="mx-auto py-8 min-h-3/4 w-5/6 col-span-5 lg:col-span-4 flex flex-col">
                    <div className="mb-8 text-center">
                        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                            {format(parseISO(post.date), 'LLLL d, yyyy')}
                        </time>
                        <h1 className="text-3xl font-bold">{post.title}</h1>
                    </div>
                    <div className="max-w-full prose dark:prose-invert h-full bg-gray-300 bg-opacity-90 rounded-lg p-12 overflow-y-auto" dangerouslySetInnerHTML={{ __html: post.body.html }} />
                </article>
                <aside className="hidden mt-32 sticky top-8 w-full h-fit pt-8 pb-12 col-span-1 bg-primary/[0.8] rounded-lg p-4 lg:block">
                    <h2 className="text-xl font-bold text-white mx-auto">Recent Posts</h2>
                    <div className="grid mt-4 grid-cols-1 gap-4">
                        {allPosts.map((post) => (
                            <Link key={post._raw.flattenedPath} href={post._raw.flattenedPath} className="border-r-3 border-primary bg-white bg-opacity-80 p-2">
                                <h3 className="text-lg font-bold">{post.title}</h3>
                                <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                                </time>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default PostLayout
