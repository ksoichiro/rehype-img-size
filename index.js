import path from 'path'
import {visit} from 'unist-util-visit'
import sizeOf from 'image-size'

export default setImageSize

/**
 * Handles:
 * "//"
 * "http://"
 * "https://"
 * "ftp://"
 */
const absolutePathRegex = /^(?:[a-z]+:)?\/\//;

function getImageSize(src, dir) {
  if (absolutePathRegex.exec(src)) {
    return
  }
  // Treat `/` as a relative path, according to the server
  const shouldJoin = !path.isAbsolute(src) || src.startsWith('/');

  if (dir && shouldJoin) {
    src = path.join(dir, src);
  }
  return sizeOf(src)
}

function setImageSize(options) {
  const opts = options || {}
  const dir = opts.dir
  return transformer

  function transformer(tree, file) {
    visit(tree, 'element', visitor)
    function visitor(node) {
      if (node.tagName === 'img') {
        const src = node.properties.src
        const dimensions = getImageSize(src, dir) || {};
        node.properties.width = dimensions.width
        node.properties.height = dimensions.height
      }
    }
  }
}
