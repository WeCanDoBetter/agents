import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface IntroParameters {
  title: string;
}

export const introSchema: JSONSchemaType<IntroParameters> = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "The title of the article",
    },
  },
  required: ["title"],
  additionalProperties: false,
};

const introFunction = new AgentFunction<IntroParameters, string>(
  "intro",
  "Get the introduction of a Wikipedia article",
  introSchema,
  async ({ title }) => {
    return wikipedia.intro(title);
  },
);

export default introFunction;
