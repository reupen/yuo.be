import { getCollection } from "astro:content"
import { compareDesc } from "date-fns"

export async function getPosts() {
  return (await getCollection("posts")).sort((left, right) =>
    compareDesc(left.data.date, right.data.date),
  )
}

export type Post = Awaited<ReturnType<typeof getPosts>>[0]
