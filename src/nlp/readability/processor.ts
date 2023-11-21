import { unified } from "unified";
import retextLatin from "retext-latin";

/**
 * Processor for the readability module. Supports Latin script languages,
 * including English.
 */
const processor = unified().use(retextLatin);

export default processor;
