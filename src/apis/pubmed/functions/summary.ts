import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface SummaryParameters {
  pmid: number;
}

const summarySchema: JSONSchemaType<SummaryParameters> = {
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

const summaryFunction = new AgentFunction<SummaryParameters, pubmed.Paper>(
  "summary",
  "Get the summary of a paper",
  summarySchema,
  async ({ pmid }) => {
    return pubmed.summary(pmid);
  },
);

export default summaryFunction;
