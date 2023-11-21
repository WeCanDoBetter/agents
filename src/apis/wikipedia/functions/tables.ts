import wikipedia from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface TablesParameters {
  title: string;
}

const tablesSchema: JSONSchemaType<TablesParameters> = {
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

const tablesFunction = new AgentFunction<TablesParameters, any[]>(
  "tables",
  "Get the tables of a Wikipedia article",
  tablesSchema,
  async ({ title }) => {
    return wikipedia.tables(title);
  },
);

export default tablesFunction;
