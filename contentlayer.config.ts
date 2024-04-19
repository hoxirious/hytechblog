// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `*.mdx`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        readTime: { type: 'number', required: true },
        tags: { type: 'list', of: { type: 'string' }, required: true },
    },
    computedFields: {
        url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
    },

}))

export default makeSource({ contentDirPath: 'src/app/posts/', documentTypes: [Post] })
