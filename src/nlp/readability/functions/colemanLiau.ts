import { colemanLiau } from "coleman-liau";
import { AgentFunction, type JSONSchemaType } from "@wecandobetter/delphi";
import { visit } from "unist-util-visit";
import processor from "../processor";

export interface ColemanLiauParameters {
  text: string;
}

const schema: JSONSchemaType<ColemanLiauParameters> = {
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

const ColemanLiauFunction = new AgentFunction<ColemanLiauParameters, number>(
  "colemanLiau",
  "Calculate the ColemanLiau readability index of a text.",
  schema,
  async ({ text }) => {
    let sentences = 0;
    let words = 0;
    let letters = 0;

    const root = processor.parse(text);

    visit(root, "SentenceNode", (node) => {
      sentences++;

      visit(node, "WordNode", (node) => {
        words++;
        letters += node.children[0].value.length;
      });
    });

    return colemanLiau({
      sentence: sentences,
      word: words,
      letter: letters,
    });
  },
);

export default ColemanLiauFunction;
