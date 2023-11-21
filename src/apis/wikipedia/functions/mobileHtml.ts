import wikipedia, { type notFound as NotFound } from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface MobileHtmlParameters {
  title: string;
}

const mobileHtmlSchema: JSONSchemaType<MobileHtmlParameters> = {
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

const mobileHtmlFunction = new AgentFunction<
  MobileHtmlParameters,
  string | NotFound
>(
  "mobileHtml",
  "Get the mobile HTML of a Wikipedia article",
  mobileHtmlSchema,
  async ({ title }) => {
    return wikipedia.mobileHtml(title);
  },
);

export default mobileHtmlFunction;
