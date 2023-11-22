import { type AgentFunction, FunctionMap } from "@wecandobetter/delphi";
import ColemanLiauFunction from "./functions/colemanLiau";
import fleschKincaidFunction from "./functions/fleschKincaid";
import SMOGFunction from "./functions/smog";

export const functions = [
  ColemanLiauFunction,
  fleschKincaidFunction,
  SMOGFunction,
] as const;

/**
 * Get the function map for the NLP utility functions.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function getMap(enable = false): FunctionMap {
  return new FunctionMap(functions.values(), enable);
}

/**
 * Add the NLP functions to the function map.
 * @param map The function map to add the functions to.
 * @param enabled Whether the functions should be enabled or disabled (default: false).
 */
export function addToMap(map: FunctionMap, enabled = false): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>, enabled);
  }
}
