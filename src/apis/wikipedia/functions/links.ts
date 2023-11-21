import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface LinksParameters {
  title: string;
}

const linksSchema: JSONSchemaType<LinksParameters> = {
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

const linksFunction = new AgentFunction<LinksParameters, string[]>(
  "links",
  "Get the links of a Wikipedia article",
  linksSchema,
  async ({ title }) => {
    return wikipedia.links(title);
  },
);

export default linksFunction;
