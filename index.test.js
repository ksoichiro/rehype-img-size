const unified = require('unified')
const parse = require('remark-parse')
const remark2rehype = require('remark-rehype')
const stringify = require('rehype-stringify')
const vfile = require('to-vfile')
const rehypeImgSize = require('./index')

process.chdir('fixtures')

test('images in the same directory', (done) => {
  unified()
    .use(parse)
    .use(remark2rehype)
    .use(rehypeImgSize)
    .use(stringify)
    .process(vfile.readSync('test.md'), function(err, file) {
      expect(err).toBeNull()
      expect(file.contents).toBe(`<h1>Hello, world!</h1>
<p><img src="img.png" alt="" width="640" height="480"></p>`)
      done()
    })
})

test('images in sub directory', (done) => {
  unified()
    .use(parse)
    .use(remark2rehype)
    .use(rehypeImgSize, { dir: 'static' })
    .use(stringify)
    .process(vfile.readSync('sub.md'), function(err, file) {
      expect(err).toBeNull()
      expect(file.contents).toBe(`<h1>Hello, world!</h1>
<p><img src="/img/sub.png" alt="" width="320" height="240"></p>`)
      done()
    })
})

test('external images are ignored', (done) => {
  unified()
    .use(parse)
    .use(remark2rehype)
    .use(rehypeImgSize)
    .use(stringify)
    .process(vfile.readSync('ext.md'), function(err, file) {
      expect(err).toBeNull()
      expect(file.contents).toBe(`<h1>Hello, world!</h1>
<p><img src="https://example.com/img.png" alt=""></p>`)
      done()
    })
})
