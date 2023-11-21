import semanticScholar, { Paper } from "../scholar";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface PaperParameters {
  id: string;
}

const schema: JSONSchemaType<PaperParameters> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "The ID of the paper to get.",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

const paperFunction = new AgentFunction<PaperParameters, Paper>(
  "paper",
  "Get a paper by ID.",
  schema,
  async ({ id }) => {
    return semanticScholar.get_paper(id);
  },
);

export default paperFunction;
