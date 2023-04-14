# modern-simple-npm-package
Another testing npm package used to learn how to do it

Made following [this tutorial](https://snyk.io/blog/best-practices-create-modern-npm-package/)

Some of the things I want to remember about its content, thigs i've learned by myself, and from other sources:

* `npx npm-packlist` to see the contents that will be included in the published version (DIDN'T WORK) -> use `npm publish --dry-run` instead.
* When no `files` option is included in the `package.json`, it will include some unnecesary files, so be careful. 
* Even if it has a `files` option, it will still always include these files (which are very important):
  * LICENSE
  * README.md
  * package.json
* If we are using scoped names (e.g. @something/name) for the package we need to run the following command to publish our package: `npm publish --access=public`. We could also define that option inside our package.json (I don't remember how XD).
* If you don't want or don't need to declare types for your package, you could create a .d.ts file with the following content: `declare module '@your/package_name'`. This way those using Typescript will still be able to use your library. 
  * As a side note, if you want to consume libraries without the types definition, you can create a .d.ts file to manually create the declaration, as stated by [this stackoverflow answer](https://stackoverflow.com/a/60304662)

### about the usage of commonJS an ESM for our package 
*ESM = EcmaScript Modules*
*I've read [this article](https://blog.logrocket.com/es-modules-in-node-today/) to understand some of these points*
*Of course, it was more informative to read the [documentation about this topic](https://nodejs.org/api/packages.html#type)*
* By default `.js` files are treated as **commonJS** by node (and I think they are interpreted like so by bundlers).
* `.mjs` are always treated as ESM and `.cjs` as commonJS no matter what's inside the nearest `package.json` file
* If we define `type="module"` inside the `package.json` file all `.js` files will be treated as **ESM**. If we want to treat them as **CommonJS** we must change the extension to `.cjs`
* If we define `type="commonjs"` inside the package.json file or if we totally ignore that property at all `.js` files will be treated as **CommonJS**. If we want to treat them as **ESM** we must change the extension to `.mjs`
* The above means that if we want to deliver to both **ESM** and **CommonJS** we have three options:
  * Define `type="module"` and use `.cjs` for thos **commonJS** files.
  * Define `type="commonjs"` and use `.mjs` for those **ESM** files.
  * Not to define type property and use `.mjs` for those **ESM** files
* As I prefer to use **ESM** I will use the former option, although the tutorial I'm following uses the third one.
* The ESM files won't be directly imported by the browser. WE'll need a bundler to do so. If we want a way to use this library directly in the browser, we need to bundle the entire package.

### About testing
Even though we have various testing libraries, the one I'm using here is vitest. I didn't find good documentation about it, but was led by the hype. However, it's working fine with my minimal setup, which is being commited at the same time of these words.
