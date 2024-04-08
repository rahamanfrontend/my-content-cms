/* eslint-disable prettier/prettier */
import type { CollectionConfig } from "payload/types";

import validateURL from "../utilities/validateURL";

const Authors: CollectionConfig = {
  slug: "authors",
  fields: [
    {
      name: "author_name",
      label: "Author Name",
      type: "text",
      required: true,
    },
    {
      name: "author_img",
      label: "Author Img",
      type: "upload",
      relationTo: "images",
      required: true,
    },
    {
      name: "author_designation",
      type: "text",
      required: true,
    },
    {
      name: "author_bio",
      type: "text",
      required: true,
    },
    {
      name: "author_url",
      type: "text",
      validate: validateURL,
    },
    {
      name: "author_social",
      type: "array",
      fields: [
        {
          name: "icon",
          type: "select",
          options: [
            "fab fa-facebook-f",
            "fab fa-instagram",
            "fab fa-twitter",
            "fas fa-link",
          ],
          required: true,
          label: "ICON"
        },
        {
          name: "url",
          type: "text",
          validate: validateURL,
        },
      ],
    },
  ],
};

export default Authors;
