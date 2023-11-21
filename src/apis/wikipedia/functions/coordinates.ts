import wikipedia, {
  type coordinatesResult as CoordinatesResult,
} from "wikipedia";
import { AgentFunction } from "@wecandobetter/delphi";
import type { JSONSchemaType } from "@wecandobetter/delphi/dist/types";

export interface CoordinatesParameters {
  title: string;
}

const coordinatesSchema: JSONSchemaType<CoordinatesParameters> = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "The title of the article",
    },
  },
  required: ["title"],
  additionalProperties: false,
};

const coordinatesFunction = new AgentFunction<
  CoordinatesParameters,
  CoordinatesResult | "null"
>(
  "coordinates",
  "Get the coordinates of a Wikipedia article",
  coordinatesSchema,
  async ({ title }) => {
    const coords = await wikipedia.coordinates(title);
    return coords ?? "null";
  },
);

export default coordinatesFunction;
