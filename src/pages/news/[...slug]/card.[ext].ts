import type { InferGetStaticPropsType } from "astro"
import fs from "fs/promises"
import satori from "satori"
import sharp from "sharp"

import { SocialCard } from "@/components"
import { getPosts } from "@/utils"

type Props = InferGetStaticPropsType<typeof getStaticPaths>

export const CARD_IMAGE_WIDTH_PX = 1200
export const CARD_IMAGE_HEIGHT_PX = 630

export async function getStaticPaths() {
  const posts = await getPosts()

  return posts.map((post, index) => {
    return {
      params: {
        slug: post.id,
        ext: "png",
      },
      props: {
        post,
        index,
      },
    }
  })
}

export async function GET({ props: { post } }: { props: Props }) {
  const svg = await satori(
    SocialCard({
      title: post.data.title,
      strapline: post.data.excerpt || undefined,
    }),
    {
      width: CARD_IMAGE_WIDTH_PX,
      height: CARD_IMAGE_HEIGHT_PX,
      fonts: [
        {
          name: "Noto Sans",
          data: await fs.readFile("./fonts/NotoSans-Regular.ttf"),
          weight: 400,
        },
        {
          name: "Noto Sans",
          data: await fs.readFile("./fonts/NotoSans-Medium.ttf"),
          weight: 500,
        },
        {
          name: "Noto Sans",
          data: await fs.readFile("./fonts/NotoSans-SemiBold.ttf"),
          weight: 600,
        },
        {
          name: "Noto Sans",
          data: await fs.readFile("./fonts/NotoSans-Bold.ttf"),
          weight: 700,
        },
      ],
    },
  )

  const imageData = await sharp(Buffer.from(svg)).png().toBuffer()

  return new Response(Buffer.from(imageData), {
    headers: {
      "Content-Type": "image/png",
    },
  })
}
