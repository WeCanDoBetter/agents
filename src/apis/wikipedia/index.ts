import { type AgentFunction, FunctionMap } from "@wecandobetter/delphi";
import searchFunction from "./functions/search";
import introFunction from "./functions/intro";
import relatedFunction from "./functions/related";
import contentFunction from "./functions/content";
import categoriesFunction from "./functions/categories";
import linksFunction from "./functions/links";
import referencesFunction from "./functions/references";
import coordinatesFunction from "./functions/coordinates";
import infoboxFunction from "./functions/infobox";
import tablesFunction from "./functions/tables";
import mobileHtmlFunction from "./functions/mobileHtml";

export const functions = [
  searchFunction,
  introFunction,
  relatedFunction,
  contentFunction,
  categoriesFunction,
  linksFunction,
  referencesFunction,
  coordinatesFunction,
  infoboxFunction,
  tablesFunction,
  mobileHtmlFunction,
] as const;

/**
 * Get the function map for the Wikipedia API.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function getMap(enable = false): FunctionMap {
  return new FunctionMap(functions, enable);
}

/**
 * Add the Wikipedia functions to the function map.
 * @param map The function map to add the functions to.
 * @param enable Whether the functions should be enabled or disabled (default: false).
 */
export function addToMap(map: FunctionMap, enable = false): void {
  for (const func of functions) {
    map.addFunction(func as AgentFunction<any, any>, enable);
  }
}
