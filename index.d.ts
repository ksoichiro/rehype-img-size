import type { Plugin } from "unified";
import type { Root } from "hast";

interface Options {
  dir: string;
}

// If the plugin returns a transformer, then the `Output` type should be
// the node type that the transformer yields
declare const rehypeImgSize: Plugin<[Options?], Root, Root>;
export default rehypeImgSize;
export type { Options };
