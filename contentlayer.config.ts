import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    subtitle: {
      type: 'string',
      description: 'The subtitle of the post',
      required: false,
    },
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      required: true,
    },
    mainImage: {
      type: 'string',
      required: false,
    },
    excerpt: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
