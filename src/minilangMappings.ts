import { Token } from "./tokens";
/**
 * 
 * KEYWORDS:
 * e.g.
 * var while do
 * done if then
 * else endif
 * float int string
 * print read
 * 
 * 
 */

export const KeywordsTokenMapping:{[inputStr:string]:Token} = 
{
    "var":Token.tVAR,
    "while":Token.tWHILE,
    "do":Token.tDO,
    "done":Token.tDONE,
    "if":Token.tIF,
    "then":Token.tTHEN,
    "else":Token.tELSE,
    "endif":Token.tENDIF,
    "float":Token.tFLOAT,
    "int":Token.tINTEGER,
    "string":Token.tSTRING,
    "print":Token.tPRINT,
    "read":Token.tREAD
};