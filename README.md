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