import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files"

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    slug: { type: "string", required: true },
  },
}))

export const FairyTale = defineDocumentType(() => ({
  name: "FairyTale",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the fairy tale",
      required: true,
    },
    timeToRead: {
      type: "string",
      description: "Time to read the fairy tale",
      required: true,
    },
    image: {
      type: "string",
      description: "Image of the fairy tale",
      required: true,
    },
    tags: {
      type: "list",
      of: Tag,
      description: "A list of tags that relate to the fairy tale",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "Short summary of the fairy tale",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: fairyTale => `/${fairyTale._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "content/fairy-tales",
  documentTypes: [FairyTale],
})
