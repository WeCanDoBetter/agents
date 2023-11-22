import { type AgentFunction, FunctionMap } from "@wecandobetter/delphi";
import paperFunction from "./functions/paper";
import authorFunction from "./functions/author";
import searchFunction from "./functions/search";

export const functions = [
  paperFunction,
  authorFunction,
  searchFunction,
] as const;

/**
 * Get the function map for the Semantic Scholar API.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function getMap(enable = false): FunctionMap {
  return new FunctionMap(functions, enable);
}

/**
 * Add the Semantic Scholar functions to the function map.
 * @param map The function map to add the functions to.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function addToMap(map: FunctionMap, enable = false): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>, enable);
  }
}
