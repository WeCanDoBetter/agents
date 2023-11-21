import wikipedia, { type wikiSummary as WikiSummary } from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface RelatedParameters {
  title: string;
}

const relatedSchema: JSONSchemaType<RelatedParameters> = {
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

const relatedFunction = new AgentFunction<RelatedParameters, WikiSummary[]>(
  "related",
  "Get the related articles of a Wikipedia article",
  relatedSchema,
  async ({ title }) => {
    const result = await wikipedia.related(title);
    return result.pages;
  },
);

export default relatedFunction;
