import {unified} from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import stringify from 'rehype-stringify'
import * as vfile from 'to-vfile'
import rehypeImgSize from '../index'

unified()
  .use(parse)
  .use(remark2rehype)
  .use(rehypeImgSize)
  .use(stringify)
  .process(vfile.readSync('index.md'), function(err, file) {
    if (err) throw err
    console.log(file.contents)
  })
