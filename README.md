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