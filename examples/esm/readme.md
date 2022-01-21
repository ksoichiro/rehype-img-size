## Example of usage as an ES module package

- `"type": "module"` must be set in your package.json.
- If you are using older version of unified/remark/rehype related dependencies, update them to ESM-supported version as well.
- There was a breaking change in `vfile@5`, so if you were using older version of vfile (or to-vfile), change `file.contents` to `file.value`.
