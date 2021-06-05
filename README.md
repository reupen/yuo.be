# yuo.be

This repo contains the source for [yuo.be](https://yuo.be).

The site was built using [Gatsby](https://www.gatsbyjs.org/) and uses [React](https://reactjs.org/), [Bulma](https://bulma.io/) and [Sass](https://sass-lang.com/).

## Directories

- `/assets`: images and downloads
- `/components`: React components, written in JSX
- `/pages`: web pages, written in JSX

## Building the site

The site uses [Font Awesome 5 Pro](https://fontawesome.com/pro) via the private package `@reupen/fontawesome-pro`.

You’ll need to replace references to that package with an alternative source for Font Awesome 5 Pro, or, alternatively, the free version `@fortawesome/fontawesome-free` can be used (but some icons will be missing).

To build the site:

1. Install [Node.js](https://nodejs.org/en/)
1. [Configure Font Awesome Pro credentials](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
1. Run `npm install`
1. Run `npx gatsby clean`
1. Run `npx gatsby build`

[See the Gatsby documentation](https://www.gatsbyjs.org/docs/) for more information on using Gatsby.
