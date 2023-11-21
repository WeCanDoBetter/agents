import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface ContentParameters {
  title: string;
}

const contentSchema: JSONSchemaType<ContentParameters> = {
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

const contentFunction = new AgentFunction<ContentParameters, string>(
  "content",
  "Get the content of a Wikipedia article",
  contentSchema,
  async ({ title }) => {
    return wikipedia.content(title);
  },
);

export default contentFunction;
