# yuo.be

This repo contains the source for [yuo.be](https://yuo.be).

The site was built using [Astro](https://astro.build) and also uses the [Bulma](https://bulma.io/) CSS framework.

## Building the site

The site uses [Font Awesome 5 Pro](https://fontawesome.com/pro) via the private package `@reupen/fontawesome-pro`.

You’ll need to replace references to that package with an alternative source for Font Awesome 5 Pro, or, alternatively, the free version `@fortawesome/fontawesome-free` can be used (but some icons will be missing).

To build the site:

1. Install [Node.js](https://nodejs.org/en/)
1. [Configure Font Awesome Pro credentials](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
1. Run `npm install`
1. Run `npm run build`

[See the Astro documentation](https://docs.astro.build/en/) for more information on using Astro.
