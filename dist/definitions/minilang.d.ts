import { Scanner } from './scanner';
declare class Minilang {
    private source;
    scanner: Scanner;
    constructor(sourceFilePath: string);
}
export { Minilang };
