import { Token } from './tokens';
import { ScannerMappings } from './minilangMappings';
declare class Scanner {
    private source;
    private lineno;
    private scan;
    private semanticAttributes;
    scannerMappings: ScannerMappings;
    scannerActions: ScannerAction[];
    keywordMappings: {
        [inputStr: string]: Token;
    };
    constructor(sourceFile: string);
    /**
     * Get tokens
     */
    getTokens(): SemanticAttribute[];
    lexima(): SemanticAttribute;
    private getAction();
    private isBlank(character);
    private isGivenKeyword(keyword, source);
    private isKeyword();
    private getKeyword();
}
export interface SemanticAttribute {
    attribute: number | string | null;
    token: Token | string;
}
export declare class ScannerSemanticAttribute {
    startPos: ProgramPosition;
    endPos: ProgramPosition;
    semanticAttribute: SemanticAttribute;
    constructor(semanticAttribute: SemanticAttribute);
    setStartPosition(line: number, col?: number): void;
    setEndPosition(line: number, col?: number): void;
}
export declare type ScannerAction = [RegExp, (value: string) => SemanticAttribute | void];
export declare type ProgramPosition = {
    col?: number;
    line?: number;
};
declare let lineno: number;
export { Scanner, lineno };
