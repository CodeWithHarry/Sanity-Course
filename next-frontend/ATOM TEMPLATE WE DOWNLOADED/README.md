# Atom Template

Thank you for using this template! We hope you can use it to make your next web project a success!

Atom is a free portfolio template styled with TailwindCSS. Other open source libraries were also used to provide the functionality required to make your customization quicker and faster.

- [Alpine.js](https://github.com/alpinejs/alpine): A Vue-inspired jQuery alternative that offers you the reactive and declarative nature of big frameworks at a much lower cost.
- [Alpine Magic Helpers](https://github.com/alpine-collective/alpine-magic-helpers): A collection of magic properties and helper functions for use with Alpine.js
- [Boxicons](https://boxicons.com/): A simple vector icons set carefully crafted for designers and developers to use in your next project.
- [Highlight.js](https://highlightjs.org/): A popular code syntax highlight library, we're also using the "Atom Dark" theme for it.

We’re also using some Tailwind plugins to extend our config and available classes:

- [TailwindCSS Forms](https://github.com/tailwindlabs/tailwindcss-forms): This is the official plugin for globally styling form fields, we have added some custom styles too.
- [TailwindCSS Typography](https://tailwindcss.com/docs/typography-plugin): Official TailwindCSS plugin for styling user-generated content.
- [TailwindCSS Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio): Another official plugin for aspect ratio utilities, we use this heavily for responsive images.

## Development Workflow

NPM is used for compilation of scripts as well as live reloading when changes are made.

You will need to run `npm install` or `yarn` before starting to work on with the templates.

> Important note: You need Node version 12.13 or higher as per [TailwindCSS' requirements](https://tailwindcss.com/docs/upgrading-to-v2#upgrade-to-node-js-12-13-or-higher)

Two NPM tasks have been configured to help with your development: -`npm run develop` - This runs the development tasks, compiles and listens to changes in the `assets/styles` folder and lastly, activates a [BrowserSync](https://www.browsersync.io/docs/command-line) server for live reloading.

- `npm run build` - This will be used to build your JavaScript/CSS and make them ready for production. It also activates `PurgeCSS` which is used to remove unused CSS classes from your project, providing a smaller bundle size to ensure that your website loads faster.

As always, we recommend you read the [official TailwindCSS docs](https://tailwindcss.com/), they’re the best way to learn Tailwind at the moment.

## Project Structure

The project uses a mostly flat structure with a key folders and files:

- `assets` folder: This is where all of the projects styles, javascript, fonts (if any) and images live, each on their own folder for better organization. - One thing to keep in mind if that if you want to use the project as is and decide to rename the `styles` folder, be sure to update the `css` NPM script with the new name.
- `browser-sync-config.js`: Pretty self-explanatory, this is the config that BrowserSync uses when we launch our live reload server. Here are the [options docs](https://www.browsersync.io/docs/options) in case you want to customize it.
- `package.json`: Where our dependencies, [browserlist](https://github.com/browserslist/browserslist) config and NPM scripts live. - _Note_: Since we mainly use `yarn` for our local development, you’ll also see a `yarn.lock` file on the project.
- `postcss.config.js`: This is where the styling magic happens, here you can add any postCSS plugin that you fancy, we’re currently only using these at the moment: - TailwindCSS: obviously - [postcss-nested](https://github.com/postcss/postcss-nested): To mimic SCSS nesting - [autoprefixer](https://github.com/postcss/autoprefixer): To support old browsers - [postcss-clean](https://github.com/leodido/postcss-clean): To minify our CSS on production
- `tailwind.config.js`: The project’s tailwind config, here you will find our custom classes and tailwind plugin’s config.

Everything else are the HTML templates.

## The Tailwind Config

Each of our projects make use of `extend` as much as possible for our tailwind config, but we do override some fo the defaults, like the following:

- `fontFamily`: We tend to add our our fonts here and only use those
- `screens`: We actually add a smaller `xs` screen for `375px` widths, we think it helps us test for mobile better and we still use the default classes.
- `colors`: We typically only use our project’s colors and discard the default’s

### How to keep the defaults and our new classes

If you want to keep the default and still use our classes, you just need to move the property you want to change to the inside of `extend`, here’s an example:

Let’s say you want to keep the `fontFamily` classes Tailwind has, here’s how you could change the config to make it happen:

**Original**

```js
// tailwind.config.js
module.exports = {
	...
	theme: {
	        fontFamily: {
	            header: [ "Merriweather", "serif"],
	            body: ["Poppins", "sans-serif"]
	        },
	}
	...
}
```

**Keep the Tailwind defaults**

```js
// tailwind.config.js
module.exports = {
	...
	theme: {

	},
	extend: {
			fontFamily: {
	            header: [ "Merriweather", "serif"],
	            body: ["Poppins", "sans-serif"]
	        },
	}
	...
}
```

That’s it, next time you compile, you’ll have the `font-sans`, `font-serif` and `font-mono` classes available.
