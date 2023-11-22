import { type AgentFunction, FunctionMap } from "@wecandobetter/delphi";
import searchFunction from "./functions/search";
import abstractFunction from "./functions/abstract";
import summaryFunction from "./functions/summary";
import citesFunction from "./functions/cites";
import citedByFunction from "./functions/citedBy";
import similarFunction from "./functions/similar";
import fullTextFunction from "./functions/fullText";

export const functions = [
  searchFunction,
  abstractFunction,
  summaryFunction,
  citesFunction,
  citedByFunction,
  similarFunction,
  fullTextFunction,
] as const;

/**
 * Get the function map for the PubMed API.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function getMap(enable = false): FunctionMap {
  return new FunctionMap(functions, enable);
}

/**
 * Add the PubMed functions to the function map.
 * @param map The function map to add the functions to.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function addToMap(map: FunctionMap, enable = false): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>, enable);
  }
}
