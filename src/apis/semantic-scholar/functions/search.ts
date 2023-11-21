import semanticScholar, { Author, PaginatedResults, Paper } from "../scholar";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface SearchParameters {
  query: string;
}

const schema: JSONSchemaType<SearchParameters> = {
  type: "object",
  properties: {
    query: {
      type: "string",
      description: "The query to search for.",
    },
  },
  required: ["query"],
  additionalProperties: false,
};

const searchFunction = new AgentFunction<
  SearchParameters,
  PaginatedResults<Paper>
>(
  "search",
  "Search for papers.",
  schema,
  async ({ query }) => {
    return semanticScholar.search_paper(query);
  },
);

export default searchFunction;
