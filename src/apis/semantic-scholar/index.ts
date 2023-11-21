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
 * Get the function map for the Semantic Scholar API. The functions are disabled by default.
 */
export function getMap(): FunctionMap {
  const map = new FunctionMap(functions);
  map.disableAll();
  return map;
}

/**
 * Add the Semantic Scholar functions to the function map.
 * @param map The function map to add the functions to.
 * @param enabled Whether the functions should be enabled or disabled.
 */
export function addToMap(map: FunctionMap, enabled = true): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>, enabled);
  }
}
