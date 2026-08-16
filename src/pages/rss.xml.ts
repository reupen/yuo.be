import mdxRenderer from "@astrojs/mdx/server.js"
import reactRenderer from "@astrojs/react/server.js"
import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { experimental_AstroContainer } from "astro/container"
import { render } from "astro:content"
import { transform, walk } from "ultrahtml"
import sanitize from "ultrahtml/transformers/sanitize"

import { getPosts } from "@/utils"

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error(`${context.site} is falsey`)
  }

  const siteUrl = context.site.toString()

  const container = await experimental_AstroContainer.create()
  container.addServerRenderer({ renderer: mdxRenderer, name: "MDX" })
  container.addServerRenderer({ renderer: reactRenderer, name: "react" })

  return rss({
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    title: "musicmusic’s foobar2000 stuff",
    description: "News about my foobar2000 components.",
    site: context.site,
    trailingSlash: false,
    customData: `<language>en-gb</language>
<atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml" />`,
    items: await Promise.all(
      (await getPosts()).slice(0, 50).map((post) =>
        (async () => ({
          title: post.data.title,
          pubDate: post.data.date,
          description: post.data.excerpt,
          link: `/news/${post.id}`,
          content: await transform(
            await container.renderToString((await render(post)).Content),
            [
              async (node) => {
                await walk(node, (node) => {
                  if (node.attributes?.href)
                    node.attributes.href = node.attributes.href.replaceAll(
                      /^\//g,
                      siteUrl,
                    )

                  if (node.attributes?.src)
                    node.attributes.src = node.attributes.src.replaceAll(
                      /^\//g,
                      siteUrl,
                    )

                  if (node.attributes?.srcset)
                    node.attributes.srcset = node.attributes.srcset.replaceAll(
                      /(^|, )\//g,
                      `$1${siteUrl}`,
                    )
                })
                return node
              },
              sanitize({ dropElements: ["script", "style"] }),
            ],
          ),
        }))(),
      ),
    ),
  })
}
