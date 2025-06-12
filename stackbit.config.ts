import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  // 1️⃣  Tell VE where your Markdown/MDX lives
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      // folders relative to root containing your content
      contentDirs: ["content"],

      // 2️⃣  Declare the editable models INSIDE the source
      models: [
        {
          name: "Page",
          label: "Page",
          type: "page",                    // makes it appear in the page-editor
          filePath: "content/pages/{slug}.mdx",
          urlPath: "/{slug}",
          fields: [
            { name: "title",   type: "string",   required: true },
            { name: "body",    type: "markdown" }
          ]
        },
        {
          name: "Post",
          label: "Blog Post",
          type: "page",
          filePath: "content/blog/{slug}.mdx",
          urlPath: "/blog/{slug}",
          fields: [
            { name: "title",       type: "string",   required: true },
            { name: "description", type: "string"   },
            { name: "date",        type: "date"     },
            { name: "author",      type: "string"   },
            { name: "category",    type: "string"   },
            { name: "body",        type: "markdown" }
          ]
        }
      ]
    })
  ],

  // 3️⃣  Duplicate the page-level models at **root** scope
  //     – Visual Editor needs this when building the page tree.
  models: {
    Page: {
      type: "page",
      filePath: "content/pages/{slug}.mdx",
      urlPath: "/{slug}"
    },
    Post: {
      type: "page",
      filePath: "content/blog/{slug}.mdx",
      urlPath: "/blog/{slug}"
    }
  }
}); 