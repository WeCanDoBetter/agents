import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface FullTextParameters {
  pmid: number;
}

const fullTextSchema: JSONSchemaType<FullTextParameters> = {
  type: "object",
  properties: {
    pmid: {
      type: "number",
      description: "The PMID (PubMed ID) of the paper",
    },
  },
  required: ["pmid"],
  additionalProperties: false,
};

const fullTextFunction = new AgentFunction<FullTextParameters, string>(
  "fulltext",
  "Get the full text of a paper",
  fullTextSchema,
  async ({ pmid }) => {
    return pubmed.fullText(pmid);
  },
);

export default fullTextFunction;
