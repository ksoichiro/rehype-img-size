# rehype-img-size

[![main](https://github.com/ksoichiro/rehype-img-size/actions/workflows/main.yaml/badge.svg?branch=master)](https://github.com/ksoichiro/rehype-img-size/actions/workflows/main.yaml)
[![codecov](https://codecov.io/gh/ksoichiro/rehype-img-size/branch/master/graph/badge.svg?token=71EXFOOV6T)](https://codecov.io/gh/ksoichiro/rehype-img-size)
[![npm](https://img.shields.io/npm/v/rehype-img-size.svg)](https://www.npmjs.com/package/rehype-img-size)

**[rehype](https://github.com/rehypejs/rehype)** plugin to set local image size properties to img tag.

This can be used to improve *Cumulative Layout Shift*: [Images without dimensions](https://web.dev/optimize-cls/#images-without-dimensions)

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
import {unified} from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import * as vfile from 'to-vfile'
import rehypeImgSize from 'rehype-img-size'

unified()
  .use(parse)
  .use(remark2rehype)
  .use(rehypeImgSize)
  .use(stringify)
  .process(vfile.readSync('index.md'), function(err, file) {
    if (err) throw err
    console.log(file.value)
  })
```

Now, running `node example` yields:

```html
<p><img src="img.png" alt="" width="640" height="480"></p>
```

See examples/esm directory for the entire code.

You can also keep using this as a CommonJS package. See examples/cjs directory.

## API

### `rehype().use(rehypeImgSize[, options])`

Add `width` and `height` properties to `img` tag which refers local image file.
This plugin read the target file to know the size of the image, so file path must be able to resolve.

Supported formats depend on [image-size](https://www.npmjs.com/package/image-size).

##### `options`

###### `options.dir`

Directory to resolve image file path.
This is useful when Markdown files and image files are located in the separate directories.

## nuxt/content

If you use this plugin for [nuxt/content](https://content.nuxtjs.org/), you can use it by configuring your `nuxt.config.js` like below:

```js
content: {
  markdown: {
    rehypePlugins: [
      [ 'rehype-img-size', { dir: 'static' } ]
    ],
```

## License

MIT &copy; ksoichiro
