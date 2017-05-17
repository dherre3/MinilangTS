import {
    Token
} from "./tokens";
import * as colors from "colors";
import {
    ScannerAction,
    SemanticAttribute,
} from "./scanner";
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
export class ScannerMappings {
    public  lineno = 1;
    public  col = 0;
    public ScannerActionDefinition: ScannerAction[] = [
        [/^[\n]/, () => {this.lineno++;/*EAT UP UNMATCHED CHARACTER*/}],
        [/^[\t \f\r]/, () => {/*EAT UP UNMATCHED CHARACTER*/}],
        [/^\/\/.*/, () => { /*COMMENT EAT UP UNMATCHED CHARACTERS*/ }],
        [/^var/,()=>{return {token:Token.tVAR,attribute:null};}],
        [/^while/,()=>{return {token:Token.tWHILE,attribute:null};}],
        [/^do/,()=>{return {token:Token.tDO,attribute:null};}],
        [/^done/,()=>{return {token:Token.tDONE,attribute:null};}],
        [/^if/,()=>{return {token:Token.tIF,attribute:null};}],
        [/^then/,()=>{return {token:Token.tTHEN,attribute:null};}],
        [/^else/,()=>{return {token:Token.tELSE,attribute:null};}],
        [/^endif/,()=>{return {token:Token.tENDIF,attribute:null};}],
        [/^float/,()=>{return {token:Token.tFLOAT,attribute:null};}],
        [/^int/,()=>{return {token:Token.tINTEGER,attribute:null};}],
        [/^string/,()=>{return {token:Token.tSTRING,attribute:null};}],
        [/^print/,()=>{return {token:Token.tPRINT,attribute:null};}],
        [/^read/,()=>{return {token:Token.tREAD,attribute:null};}],
        [/^=/,()=>{return {token:"=",attribute:null};}],        
        [/^\+/,()=>{return {token:"+",attribute:null};}],        
        [/^\//,()=>{return {token:"/",attribute:null};}],
        [/^-/,()=>{return {token:"-",attribute:null};}],
        [/^\*/,()=>{return {token:"*",attribute:null};}],
        [/^\^/,()=>{return {token:"^",attribute:null};}],
        [/^:/,()=>{return {token:":",attribute:null};}],
        [/^,/,()=>{return {token:",",attribute:null};}],
        [/^;/,()=>{return {token:";",attribute:null};}],
        [/^\)/,()=>{return {token:")",attribute:null};}],
        [/^\(/,()=>{return {token:"(",attribute:null};}],
        [/^([1-9][0-9]*|0).[0-9]+/,(value)=>{return {token:Token.tFLOATLIT,attribute:Number(value)};}],
        [/^([1-9][0-9]*|0)+/,(value)=>{return {token:Token.tINTEGERLIT,attribute:Number(value)};}],
        [/^[a-zA-Z_][a-zA-Z0-9_]*/,(iden)=>{return {token:Token.tIDENTIFIER,attribute:iden};}],
        [/^\"([a-zA-Z0-9_]|[:~#\$%\^&\*\-\+\/`\"<>=_\|';:{}\[\]\(\)]|[\x07\x1B\f\n\r\t\v\\ ])*\"/,(str)=>{return {token:Token.tSTRINGLIT,attribute:str};}],
        [/./, (value) => {console.log(`${colors.red(`Semantic error at line ${colors.blue(String(this.lineno))}`)}, Unrecognized Character ${value}`);process.exit(1);}]
    ];

}