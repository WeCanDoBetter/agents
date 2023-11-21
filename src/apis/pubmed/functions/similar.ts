import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface SimilarParameters {
  pmid: number;
}

const similarSchema: JSONSchemaType<SimilarParameters> = {
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

const similarFunction = new AgentFunction<SimilarParameters, number[]>(
  "similar",
  "Get the papers that are similar to a paper",
  similarSchema,
  async ({ pmid }) => {
    return pubmed.similar(pmid);
  },
);

export default similarFunction;
