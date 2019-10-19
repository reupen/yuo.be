# yuo.be

This repo contains the source for [yuo.be](https://yuo.be).

The site was built using [Gatsby](https://www.gatsbyjs.org/) and uses [React](https://reactjs.org/), [Bulma](https://bulma.io/) and [Sass](https://sass-lang.com/).

## Directories

- `/assets`: images and downloads
- `/components`: React components, written in JSX
- `/pages`: web pages, written in JSX

## Building the site

The site uses [Font Awesome Pro](https://fontawesome.com/pro) and [credentials must be configured to install it](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers).

If you don’t have a licence for Font Awesome Pro, you can replace the `@fortawesome/fontawesome-pro` dependency with `@fortawesome/fontawesome-free` (updating imports too), but some icons will be missing.

To build the site:

1. Install [Node.js 10](https://nodejs.org/en/)
1. [Configure Font Awesome Pro credentials](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
1. Run `npm install`
1. Run `npx gatsby clean`
1. Run `npx gatsby build`

[See the Gatsby documentation](https://www.gatsbyjs.org/docs/) for more information on using Gatsby.
