import { type AgentFunction, FunctionMap } from "@wecandobetter/delphi";
import fleschKincaidFunction from "./functions/fleschKincaid";

export const functions = [
  fleschKincaidFunction,
] as const;

/**
 * Get the function map for the NLTK utility functions. The functions are
 * disabled by default.
 */
export function getMap(): FunctionMap {
  const map = new FunctionMap(functions);
  map.disableAll();
  return map;
}

/**
 * Add the NLP functions to the function map.
 * @param map The function map to add the functions to.
 */
export function addToMap(map: FunctionMap): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>);
  }
}
