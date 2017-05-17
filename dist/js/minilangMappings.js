"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("./tokens");
const colors = require("colors");
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
class ScannerMappings {
    constructor() {
        this.lineno = 1;
        this.col = 0;
        this.ScannerActionDefinition = [
            [/^[\n]/, () => { this.lineno++; /*EAT UP UNMATCHED CHARACTER*/ }],
            [/^[\t \f\r]/, () => { }],
            [/^\/\/.*/, () => { }],
            [/^var/, () => { return { token: tokens_1.Token.tVAR, attribute: null }; }],
            [/^while/, () => { return { token: tokens_1.Token.tWHILE, attribute: null }; }],
            [/^do/, () => { return { token: tokens_1.Token.tDO, attribute: null }; }],
            [/^done/, () => { return { token: tokens_1.Token.tDONE, attribute: null }; }],
            [/^if/, () => { return { token: tokens_1.Token.tIF, attribute: null }; }],
            [/^then/, () => { return { token: tokens_1.Token.tTHEN, attribute: null }; }],
            [/^else/, () => { return { token: tokens_1.Token.tELSE, attribute: null }; }],
            [/^endif/, () => { return { token: tokens_1.Token.tENDIF, attribute: null }; }],
            [/^float/, () => { return { token: tokens_1.Token.tFLOAT, attribute: null }; }],
            [/^int/, () => { return { token: tokens_1.Token.tINTEGER, attribute: null }; }],
            [/^string/, () => { return { token: tokens_1.Token.tSTRING, attribute: null }; }],
            [/^print/, () => { return { token: tokens_1.Token.tPRINT, attribute: null }; }],
            [/^read/, () => { return { token: tokens_1.Token.tREAD, attribute: null }; }],
            [/^=/, () => { return { token: "=", attribute: null }; }],
            [/^\+/, () => { return { token: "+", attribute: null }; }],
            [/^\//, () => { return { token: "/", attribute: null }; }],
            [/^-/, () => { return { token: "-", attribute: null }; }],
            [/^\*/, () => { return { token: "*", attribute: null }; }],
            [/^\^/, () => { return { token: "^", attribute: null }; }],
            [/^:/, () => { return { token: ":", attribute: null }; }],
            [/^,/, () => { return { token: ",", attribute: null }; }],
            [/^;/, () => { return { token: ";", attribute: null }; }],
            [/^\)/, () => { return { token: ")", attribute: null }; }],
            [/^\(/, () => { return { token: "(", attribute: null }; }],
            [/^([1-9][0-9]*|0).[0-9]+/, (value) => { return { token: tokens_1.Token.tFLOATLIT, attribute: Number(value) }; }],
            [/^([1-9][0-9]*|0)+/, (value) => { return { token: tokens_1.Token.tINTEGERLIT, attribute: Number(value) }; }],
            [/^[a-zA-Z_][a-zA-Z0-9_]*/, (iden) => { return { token: tokens_1.Token.tIDENTIFIER, attribute: iden }; }],
            [/^\"([a-zA-Z0-9_]|[:~#\$%\^&\*\-\+\/`\"<>=_\|';:{}\[\]\(\)]|[\x07\x1B\f\n\r\t\v\\ ])*\"/, (str) => { return { token: tokens_1.Token.tSTRINGLIT, attribute: str }; }],
            [/./, (value) => { console.log(`${colors.red(`Semantic error at line ${colors.blue(String(this.lineno))}`)}, Unrecognized Character ${value}`); process.exit(1); }]
        ];
    }
}
exports.ScannerMappings = ScannerMappings;
