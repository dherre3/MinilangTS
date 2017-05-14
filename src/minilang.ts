import {Scanner} from './scanner';
import * as fs from 'fs';
class Minilang{
     
    private source:string;
    public scanner:Scanner;
    constructor(sourceFilePath:string){
        this.source = fs.readFileSync(sourceFilePath).toString();
        this.scanner = new Scanner(this.source);
        console.log(this.scanner.getSemanticAttributes());
    }
}
export {Minilang};