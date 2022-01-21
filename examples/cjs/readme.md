## Example of usage as CommonJS package

- Although rehype-img-size still supports CommonJS, the newer versions of the official unified/remark/rehype related dependencies supports only ES module, so basically it's recommended to migrate your code to ES module style.
- This example uses older version of unified/remark/rehype related dependencies.
- There was a breaking change in `vfile@5`, so if you were using older version of vfile (or to-vfile), change `file.contents` to `file.value`.
