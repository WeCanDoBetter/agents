import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface SearchParameters {
  query: string;
}

export interface SearchOutput {
  count: number;
  papers: pubmed.Paper[];
}

const searchSchema: JSONSchemaType<SearchParameters> = {
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
  "Search NCBI",
  searchSchema,
  async ({ query }) => {
    return pubmed.search(query, 0, 5);
  },
);

export default searchFunction;
