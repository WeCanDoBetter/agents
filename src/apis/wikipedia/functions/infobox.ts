import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface InfoboxParameters {
  title: string;
}

const infoboxSchema: JSONSchemaType<InfoboxParameters> = {
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

const infoboxFunction = new AgentFunction<InfoboxParameters, string>(
  "infobox",
  "Get the infobox of a Wikipedia article",
  infoboxSchema,
  async ({ title }) => {
    return wikipedia.infobox(title);
  },
);

export default infoboxFunction;
