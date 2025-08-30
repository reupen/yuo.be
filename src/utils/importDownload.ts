import { parse } from "node:path"
import fs from "node:fs/promises"

export async function importDownload(filename: string) {
  const path = parse(filename)

  const fileSize = (await fs.stat(`src/assets/downloads/${filename}`)).size
  const fileSizeKB = Math.round(fileSize / 1000)
  const prettyFileSize =
    fileSizeKB >= 1000
      ? `${(fileSizeKB / 1000).toFixed(1)} MB`
      : `${fileSizeKB.toFixed(0)} kB`

  let url

  switch (path.ext) {
    case ".7z":
      url = (await import(`../assets/downloads/${path.name}.7z`)).default
      break
    case ".fb2k-component":
      url = (await import(`../assets/downloads/${path.name}.fb2k-component`))
        .default
      break
    default:
      throw new Error(`Unhandled download file extension: ${path.ext}`)
  }

  return {
    url,
    prettySize: prettyFileSize,
  }
}
