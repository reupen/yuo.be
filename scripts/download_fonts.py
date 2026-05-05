from pathlib import Path
from urllib.parse import unquote, urlparse
from urllib.request import urlopen

ROOT_PATH = Path(__file__).parents[1]

DOWNLOAD_ONLY_URLS = [
    "https://github.com/notofonts/notofonts.github.io/raw/refs/heads/main/fonts/NotoSans/full/ttf/NotoSans-Regular.ttf",
    "https://github.com/notofonts/notofonts.github.io/raw/refs/heads/main/fonts/NotoSans/full/ttf/NotoSans-Medium.ttf",
    "https://github.com/notofonts/notofonts.github.io/raw/refs/heads/main/fonts/NotoSans/full/ttf/NotoSans-SemiBold.ttf",
    "https://github.com/notofonts/notofonts.github.io/raw/refs/heads/main/fonts/NotoSans/full/ttf/NotoSans-Bold.ttf",
]
LICENCE_URL = (
    "https://github.com/notofonts/notofonts.github.io/raw/refs/heads/main/fonts/LICENSE"
)


def main():
    fonts_path = ROOT_PATH / "fonts"

    fonts_path.mkdir(exist_ok=True)

    for url in DOWNLOAD_ONLY_URLS:
        _, quoted_basename = urlparse(url).path.rsplit("/", maxsplit=1)
        basename = unquote(quoted_basename)

        print(f"Downloading: {url}")
        with urlopen(url) as response:
            if response.status >= 300:
                raise Exception(f"Failed to download {url}, status {response.status}")

            (fonts_path / basename).write_bytes(response.read())

    print(f"Downloading licence: {LICENCE_URL}")
    with urlopen(LICENCE_URL) as response:
        if response.status >= 300:
            raise Exception(f"Failed to download {LICENCE_URL}, status {response.status}")

        (fonts_path / "LICENCE").write_bytes(response.read())


if __name__ == "__main__":
    main()
