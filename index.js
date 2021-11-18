const path = require('path')
const visit = require('unist-util-visit')
const sizeOf = require('image-size')

module.exports = setImageSize

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
        if (dir && src.startsWith('/')) {
            src = path.join(dir, src)
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
