"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Keyword mappings
const minilangMappings_1 = require("./minilangMappings");
class Scanner {
    //Parses through source string file, matches on regular expression and sets semantic attributes for the source program
    constructor(sourceFile) {
        this.source = sourceFile;
        this.setSemanticAttributes();
        console.log(this.source);
    }
    setSemanticAttributes() {
        let start = 0;
        let scan = 1;
        let currentTokens = [];
        while (scan < this.source.length) {
            let word = this.source.slice(start, scan);
            switch (true) {
                case typeof minilangMappings_1.KeywordsTokenMapping[word] !== 'undefined':
                    currentTokens.push({ value: null, action: minilangMappings_1.KeywordsTokenMapping[word] });
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
    getSemanticAttributes() {
        return this.semanticAttributes;
    }
    testScannerRule(scannerRule) {
    }
}
exports.Scanner = Scanner;
