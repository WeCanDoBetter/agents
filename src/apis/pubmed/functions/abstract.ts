import { pubmed } from "node-ncbi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface AbstractParameters {
  pmid: number;
}

const abstractSchema: JSONSchemaType<AbstractParameters> = {
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

const abstractFunction = new AgentFunction<AbstractParameters, string>(
  "abstract",
  "Get the abstract of a paper",
  abstractSchema,
  async ({ pmid }) => {
    return pubmed.abstract(pmid);
  },
);

export default abstractFunction;
