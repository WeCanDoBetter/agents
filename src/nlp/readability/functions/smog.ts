import { smogFormula } from "smog-formula";
import { AgentFunction, type JSONSchemaType } from "@wecandobetter/delphi";
import { syllable } from "syllable";
import { visit } from "unist-util-visit";
import processor from "../processor";

export interface SMOGParameters {
  text: string;
}

const schema: JSONSchemaType<SMOGParameters> = {
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

const SMOGFunction = new AgentFunction<SMOGParameters, number>(
  "smog",
  "Calculate the SMOG (Simple Measure of Gobbledygook) grade of a text.",
  schema,
  async ({ text }) => {
    let sentences = 0;
    let polysyllabicWords = 0;

    const root = processor.parse(text);

    visit(root, "SentenceNode", (node) => {
      sentences++;

      visit(node, "WordNode", (node) => {
        polysyllabicWords += syllable(node.children[0].value) > 3 ? 1 : 0;
      });
    });

    return smogFormula({
      sentence: sentences,
      polysillabicWord: polysyllabicWords,
    });
  },
);

export default SMOGFunction;
