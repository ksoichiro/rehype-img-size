const unified = require('unified')
const parse = require('remark-parse')
const remark2rehype = require('remark-rehype')
const stringify = require('rehype-stringify')
const vfile = require('to-vfile')
const rehypeImgSize = require('../index')

unified()
  .use(parse)
  .use(remark2rehype)
  .use(rehypeImgSize)
  .use(stringify)
  .process(vfile.readSync('index.md'), function(err, file) {
    if (err) throw err
    console.log(file.contents)
  })
