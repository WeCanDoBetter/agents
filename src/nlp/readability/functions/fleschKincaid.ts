import { fleschKincaid } from "flesch-kincaid";
import { AgentFunction, type JSONSchemaType } from "@wecandobetter/delphi";
import { syllable } from "syllable";
import { visit } from "unist-util-visit";
import retextLatin from "retext-latin";
import { unified } from "unified";

const processor = unified().use(retextLatin);

export interface FleschKincaidParameters {
  text: string;
}

const schema: JSONSchemaType<FleschKincaidParameters> = {
  type: "object",
  properties: {
    text: {
      type: "string",
      description: "The text to grade.",
    },
  },
  required: ["text"],
  additionalProperties: false,
};

const fleschKincaidFunction = new AgentFunction<
  FleschKincaidParameters,
  number
>(
  "fleschKincaid",
  "Calculate the Flesch-Kincaid readability score of a text.",
  schema,
  async ({ text }) => {
    let words = 0;
    let sentences = 0;
    let syllables = 0;

    const root = processor.parse(text);

    visit(root, "SentenceNode", (node) => {
      sentences++;

      visit(node, "WordNode", (node) => {
        words++;
        syllables += syllable(node.children[0].value);
      });
    });

    return fleschKincaid({
      sentence: sentences,
      word: words,
      syllable: syllables,
    });
  },
);

export default fleschKincaidFunction;
