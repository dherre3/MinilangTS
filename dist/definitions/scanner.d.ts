import { Token } from './tokens';
declare class Scanner {
    private source;
    private semanticAttributes;
    scannerActions: ScannerAction[];
    constructor(sourceFile: string);
    private setSemanticAttributes();
    getSemanticAttributes(): SemanticAttribute[];
    private testScannerRule(scannerRule);
}
export declare type ScannerAction = [RegExp, (value: string) => SemanticAttribute];
export interface SemanticAttribute {
    value: number | string | null;
    action: Token | string;
}
export { Scanner };
