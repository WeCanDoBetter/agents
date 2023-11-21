import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface CitedByParameters {
  pmid: number;
}

const citedBySchema: JSONSchemaType<CitedByParameters> = {
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

const citedByFunction = new AgentFunction<CitedByParameters, number[]>(
  "citedBy",
  "Get the papers that are cited by a paper",
  citedBySchema,
  async ({ pmid }) => {
    return pubmed.citedBy(pmid);
  },
);

export default citedByFunction;
