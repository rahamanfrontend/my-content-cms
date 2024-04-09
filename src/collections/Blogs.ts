/* eslint-disable prettier/prettier */
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload/types";

import validateURL from "../utilities/validateURL";

const Blogs: CollectionConfig = {
  slug: "blogs",
  auth: false,
  fields: [
    {
      name: "postFormat",
      type: "select",
      options: ["standard"],
      defaultValue: "standard",
      label: "Post Format",
      required: true,
    },
    {
      name: "blogTitle",
      label: "Blog Title",
      type: "text",
      required: true,
    },
    {
      name: "featureImg",
      label: "Feature Image",
      type: "upload",
      relationTo: "images",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
      label: "Author",
    },
    {
      name: "audio",
      type: "text",
      required: true,
      validate: validateURL,
      label: "Audio",
    },
    {
      name: "date",
      type: "date",
      required: true,
      label: "Date",
    },
    {
      name: "category",

      type: "text",
      required: true,
      label: "Category",
    },
    {
      name: "pCate",
      type: "text",
      required: true,
      label: "P Cate",
    },
    {
      name: "categoryImg",
      type: "upload",
      relationTo: "images",
      required: true,
      label: "Category Image",
    },
    {
      name: "post_views",
      type: "text",
      required: true,
      label: "Post Views",
    },
    {
      name: "read_time",
      type: "text",
      required: true,
      label: "Read Time",
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "seo_title",
      label: "Seo Title",
      type: "text",
      required: true,
    },
    {
      name: "seo_description",
      type: "text",
      label: "Seo Description",
      required: true,
    },
    {
      name: "seo_keywords",
      type: "array",
      label: "Seo Keywords",
      fields: [
        {
          name: "keyword",
          type: "text",
        },
      ],
    },
    {
      name: "cta",
      type: "relationship",
      relationTo: "ctas",
    },
    {
      name: "blog",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),

      required: true,
    },
    lexicalHTML("blog", {
      name: "blog_html",
    }),
  ],
};

export default Blogs;
