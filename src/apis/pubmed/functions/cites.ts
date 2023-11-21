import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface CitesParameters {
  pmid: number;
}

const citesSchema: JSONSchemaType<CitesParameters> = {
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

const citesFunction = new AgentFunction<CitesParameters, number[]>(
  "cites",
  "Get the papers that cite a paper",
  citesSchema,
  async ({ pmid }) => {
    return pubmed.cites(pmid);
  },
);

export default citesFunction;
