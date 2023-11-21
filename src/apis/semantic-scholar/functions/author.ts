import semanticScholar, { Author } from "../scholar";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";
import { AgentFunction } from "@wecandobetter/delphi";

export interface AuthorParameters {
  id: string;
}

const schema: JSONSchemaType<AuthorParameters> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "The ID of the author to get.",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

const authorFunction = new AgentFunction<AuthorParameters, Author>(
  "author",
  "Get an author by ID.",
  schema,
  async ({ id }) => {
    return semanticScholar.get_author(id);
  },
);

export default authorFunction;
