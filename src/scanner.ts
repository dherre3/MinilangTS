import {Token} from './tokens';
import * as colors from 'colors';
//Keyword mappings
import {ScannerMappings} from './minilangMappings';

class Scanner {
    //Source code as a string
    private source:string;
    private lineno:number;
    private scan:number;
    //Array of semantic attributes to be passed to the scanner
    private semanticAttributes:SemanticAttribute[];
   public scannerMappings:ScannerMappings;
    //Array of the scanner actions based on the regular expressions
   public scannerActions:ScannerAction[];
   
   public keywordMappings:{[inputStr:string]:Token}
    //Parses through source string file, matches on regular expression and sets semantic attributes for the source program
    constructor(sourceFile:string){
        this.scannerMappings = new ScannerMappings();
        this.keywordMappings = this.scannerMappings.KeywordsTokenMapping;
        this.scannerActions = this.scannerMappings.ScannerActionDefinition;
        this.lineno = 0;
        this.scan = 0;
        this.source = sourceFile;
        this.semanticAttributes = [];
        console.log(this.source);
    }
    /**
     * Get tokens
     */
    public getTokens() {
        while(this.scan<this.source.length)
        {
            this.lexima();
        }
        return this.semanticAttributes;
    }
    public lexima()
    {
        while(this.scan<this.source.length)
        {
            let lexAction = this.getAction();
            this.scan+=lexAction.len;
            var resultAction = this.scannerActions[lexAction.ind][1](lexAction.matched);  
            if(resultAction) 
            {
                this.semanticAttributes.push(resultAction);
                return resultAction;
            }
        }
    }
    private getAction():{matched:string,len:number,ind:number}
    {
        let subsource = this.source.slice(this.scan);
        let max = {matched:"",len:-Infinity,ind:-1};
        this.scannerActions.forEach(function(map,index) {
            let res =  map[0].exec(subsource);
            if(res)
            {
                if(res[0].length>max.len)max = {matched:res[0],len:res[0].length,ind:index};
            }
        },this);
        return max;
    }

    private isBlank(character:string)
    {
        if(character=='\n')
        {
            this.lineno++;
        }
        return character=='\t'||character=='\n'||character==' '||character=='\f';
    }
    private isGivenKeyword(keyword:string, source:string):boolean {
        let sourceWord = source.slice(this.scan,keyword.length);
        return sourceWord === keyword;
    }
    private isKeyword():boolean {
        for (let keyword in this.keywordMappings) {
            if(this.isGivenKeyword(this.source,keyword)) return true;
        }
        return false;
    }
    private getKeyword():SemanticAttribute {
        for (let keyword in this.keywordMappings) {
            if(this.isGivenKeyword(this.source,keyword))
            {
                this.scan += keyword.length;
                return {token:this.keywordMappings[keyword],attribute:null};
            }
        }
        return null;
    }

}

                

export interface SemanticAttribute
{
    attribute:number|string|null;
    token:Token|string;   
}
export class ScannerSemanticAttribute
{
    public startPos: ProgramPosition;
    public endPos:ProgramPosition;
    public semanticAttribute:SemanticAttribute;

    constructor(semanticAttribute:SemanticAttribute){
        this.semanticAttribute = semanticAttribute;
    }
    setStartPosition(line:number,col?:number)
    {
        this.startPos.col = col;
        this.startPos.line = line;
    }
    setEndPosition(line:number,col?:number)
    {
        this.endPos.col = col;
        this.endPos.line = line;
    }
}
//Adding scanner action type
export type ScannerAction = [RegExp,(value:string)=>SemanticAttribute|void];



export type ProgramPosition = {col?:number,line?:number};
let lineno:number;
export {Scanner, lineno};