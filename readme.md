# rehype-img-size

[![main](https://github.com/ksoichiro/rehype-img-size/actions/workflows/main.yaml/badge.svg?branch=master)](https://github.com/ksoichiro/rehype-img-size/actions/workflows/main.yaml)
[![codecov](https://codecov.io/gh/ksoichiro/rehype-img-size/branch/master/graph/badge.svg?token=71EXFOOV6T)](https://codecov.io/gh/ksoichiro/rehype-img-size)
[![npm](https://img.shields.io/npm/v/rehype-img-size.svg)](https://www.npmjs.com/package/rehype-img-size)

**[rehype](https://github.com/rehypejs/rehype)** plugin to set local image size properties to img tag.

## Install

```
npm install rehype-img-size
```

## Use

Say we have the following file, `index.md`:

```markdown
![](img.png)
```

And our script, `example.js`, looks as follows:

```js
const unified = require('unified')
const parse = require('remark-parse')
const remark2rehype = require('remark-rehype')
const stringify = require('rehype-stringify')
const vfile = require('to-vfile')
const rehypeImgSize = require('rehype-img-size')

unified()
  .use(parse)
  .use(remark2rehype)
  .use(rehypeImgSize)
  .use(stringify)
  .process(vfile.readSync('index.md'), function(err, file) {
    if (err) throw err
    console.log(file.contents)
  })
```

Now, running `node example` yields:

```html
<p><img src="img.png" alt="" width="640" height="480"></p>
```

## API

### `rehype().use(rehypeImgSize[, options])`

Add `width` and `height` properties to `img` tag which refers local image file.
This plugin read the target file to know the size of the image, so file path must be able to resolve.

Supported formats depend on [image-size](https://www.npmjs.com/package/image-size).

##### `options`

###### `options.dir`

Directory to resolve image file path.
This is useful when Markdown files and image files are located in the separate directories.

## License

MIT &copy; ksoichiro
