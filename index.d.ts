import {ISize} from "image-size/dist/types/interface";
import type {Root} from 'hast'
interface Options {
  dir: string;
}
import type {Plugin} from 'unified'

// Note: defining all nodes here, such as with `Root | Element | ...` seems
// to trip TS up.
declare const rehypeImgSize: Plugin<[Options] | [], Root, string>
export default rehypeImgSize
export type {Options}
