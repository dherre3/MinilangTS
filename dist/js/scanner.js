"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Keyword mappings
const minilangMappings_1 = require("./minilangMappings");
class Scanner {
    //Parses through source string file, matches on regular expression and sets semantic attributes for the source program
    constructor(sourceFile) {
        this.scannerMappings = new minilangMappings_1.ScannerMappings();
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
    getTokens() {
        while (this.scan < this.source.length) {
            this.lexima();
        }
        return this.semanticAttributes;
    }
    lexima() {
        while (this.scan < this.source.length) {
            let lexAction = this.getAction();
            this.scan += lexAction.len;
            var resultAction = this.scannerActions[lexAction.ind][1](lexAction.matched);
            if (resultAction) {
                this.semanticAttributes.push(resultAction);
                return resultAction;
            }
        }
    }
    getAction() {
        let subsource = this.source.slice(this.scan);
        let max = { matched: "", len: -Infinity, ind: -1 };
        this.scannerActions.forEach(function (map, index) {
            let res = map[0].exec(subsource);
            if (res) {
                if (res[0].length > max.len)
                    max = { matched: res[0], len: res[0].length, ind: index };
            }
        }, this);
        return max;
    }
    isBlank(character) {
        if (character == '\n') {
            this.lineno++;
        }
        return character == '\t' || character == '\n' || character == ' ' || character == '\f';
    }
    isGivenKeyword(keyword, source) {
        let sourceWord = source.slice(this.scan, keyword.length);
        return sourceWord === keyword;
    }
    isKeyword() {
        for (let keyword in this.keywordMappings) {
            if (this.isGivenKeyword(this.source, keyword))
                return true;
        }
        return false;
    }
    getKeyword() {
        for (let keyword in this.keywordMappings) {
            if (this.isGivenKeyword(this.source, keyword)) {
                this.scan += keyword.length;
                return { token: this.keywordMappings[keyword], attribute: null };
            }
        }
        return null;
    }
}
exports.Scanner = Scanner;
class ScannerSemanticAttribute {
    constructor(semanticAttribute) {
        this.semanticAttribute = semanticAttribute;
    }
    setStartPosition(line, col) {
        this.startPos.col = col;
        this.startPos.line = line;
    }
    setEndPosition(line, col) {
        this.endPos.col = col;
        this.endPos.line = line;
    }
}
exports.ScannerSemanticAttribute = ScannerSemanticAttribute;
let lineno;
exports.lineno = lineno;
