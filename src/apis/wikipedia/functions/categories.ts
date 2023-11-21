import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface CategoriesParameters {
  title: string;
}

const categoriesSchema: JSONSchemaType<CategoriesParameters> = {
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

const categoriesFunction = new AgentFunction<CategoriesParameters, string[]>(
  "categories",
  "Get the categories of a Wikipedia article",
  categoriesSchema,
  async ({ title }) => {
    return wikipedia.categories(title);
  },
);

export default categoriesFunction;
