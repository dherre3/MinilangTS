import {Token} from './tokens';

//Keyword mappings
import {KeywordsTokenMapping} from './minilangMappings';

class Scanner {

    //Source code as a string
    private source:string;
    
    //Array of semantic attributes to be passed to the scanner
    private semanticAttributes:SemanticAttribute[];

    //Array of the scanner actions based on the regular expressions
    public scannerActions:ScannerAction[];

    //Parses through source string file, matches on regular expression and sets semantic attributes for the source program
    constructor(sourceFile:string){
        this.source = sourceFile;
        this.setSemanticAttributes();
        console.log(this.source);
    }


    private setSemanticAttributes():SemanticAttribute[]
    {
        let start = 0;
        let scan = 1;
        let currentTokens:Array<SemanticAttribute> = [];
        while (scan<this.source.length) {
            let word =this.source.slice(start,scan);
            switch (true) {
                case typeof KeywordsTokenMapping[word]!=='undefined':
                    currentTokens.push({value:null,action:KeywordsTokenMapping[word]});
                case true:
                default:
                    break;
            }
            scan++;   
        }
        // this.semanticAttributes  =  this.source.map((word)=>
        // {
        //     if(typeof KeywordsTokenMapping[word]!=='undefined')
        //     {
        //         return {value:null,action:KeywordsTokenMapping[word]};
        //     }
        //     return {value:null,action:"NOP"};
        // });
    }

    public getSemanticAttributes()
    {
        return this.semanticAttributes;
    }


    private testScannerRule(scannerRule:ScannerAction)
    {

    }


}

//Adding scanner action type
export type ScannerAction = [RegExp,(value:string)=>SemanticAttribute];

export interface SemanticAttribute
{
    value:number|string|null;
    action:Token|string;    
}


export {Scanner};