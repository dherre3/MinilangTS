import { ScannerAction } from "./scanner";
/**
 * Create the keyword mapping to avoid looking it up as a regular expression
 * @property {inputStr} Contains keyword to match
 * @property {SemanticAttribute} Contains the semantic attribute
 * KEYWORDS:
 * e.g.
 * var while do
 * done if then
 * else endif
 * float int string
 * print read
 */
export declare class ScannerMappings {
    lineno: number;
    col: number;
    ScannerActionDefinition: ScannerAction[];
}
