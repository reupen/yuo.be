import { tz } from "@date-fns/tz"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { defineCollection } from "astro:content"
import { format } from "date-fns"

const posts = defineCollection({
  loader: glob({
    base: "./src/posts",
    pattern: "**/*.md{x,}",
    generateId: ({ data: { date }, entry }) => {
      const prefix = format(z.date().parse(date), "yyyy/MM/dd", {
        in: tz("Europe/London"),
      })

      const computedSlug = entry
        .replace(/\/index.mdx?$/, "")
        .replace(/^.*\//, "")

      return `${prefix}/${computedSlug}`
    },
  }),
  schema: z.object({
    date: z.date(),
    description: z.string().optional(),
    excerpt: z.string(),
    title: z.string(),
  }),
})

export const collections = { posts }
