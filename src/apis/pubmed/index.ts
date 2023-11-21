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
 * Get the function map for the PubMed API. The functions are disabled by default.
 */
export function getMap(): FunctionMap {
  const map = new FunctionMap(functions);
  map.disableAll();
  return map;
}

/**
 * Add the PubMed functions to the function map.
 * @param map The function map to add the functions to.
 */
export function addToMap(map: FunctionMap): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>);
  }
}
