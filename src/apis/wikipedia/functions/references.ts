import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface ReferencesParameters {
  title: string;
}

const referencesSchema: JSONSchemaType<ReferencesParameters> = {
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

const referencesFunction = new AgentFunction<ReferencesParameters, string[]>(
  "references",
  "Get the references of a Wikipedia article",
  referencesSchema,
  async ({ title }) => {
    return wikipedia.references(title);
  },
);

export default referencesFunction;
