import path from 'path'
import {visit} from 'unist-util-visit'
import sizeOf from 'image-size'

export default setImageSize

function setImageSize(options) {
  const opts = options || {}
  const dir = opts.dir
  return transformer

  function transformer(tree, file) {
    visit(tree, 'element', visitor)
    function visitor(node) {
      if (node.tagName === 'img') {
        let src = node.properties.src
        if (src.startsWith('http')) {
            return
        }
        const shouldJoin =
          src.startsWith('/') ||
          src.startsWith('./') ||
          /^\w/.exec(src);

        if (dir && shouldJoin) {
          src = path.join(dir, src);
        }
        
        try {
          const dimensions = sizeOf(src)
          node.properties.width = dimensions.width
          node.properties.height = dimensions.height
        }
        catch {
          // do nothing 
        }
      }
    }
  }
}
