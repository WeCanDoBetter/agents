import wikipedia, { type pageResult as PageResult } from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface SearchParameters {
  query: string;
}

export interface SearchOutput {
  titles: string[];
  suggestion: string;
}

export const searchSchema: JSONSchemaType<SearchParameters> = {
  type: "object",
  properties: {
    query: {
      type: "string",
      description: "The search query",
    },
  },
  required: ["query"],
  additionalProperties: false,
};

const searchFunction = new AgentFunction<SearchParameters, SearchOutput>(
  "search",
  "Search Wikipedia",
  searchSchema,
  async ({ query }) => {
    const { results, suggestion } = await wikipedia.search(query, {
      limit: 5,
      suggestion: true,
    });

    return {
      titles: results.map((result: PageResult) => result.title),
      suggestion,
    };
  },
);

export default searchFunction;
