"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * KEYWORDS:
 * var while do
 * done if then
 * else endif
 * float int string
 * print read
 *
 *
 */
var Token;
(function (Token) {
    Token[Token["tIDENTIFIER"] = 0] = "tIDENTIFIER";
    Token[Token["tINTEGER"] = 1] = "tINTEGER";
    Token[Token["tSTRING"] = 2] = "tSTRING";
    Token[Token["tFLOAT"] = 3] = "tFLOAT";
    Token[Token["tSTRINGLIT"] = 4] = "tSTRINGLIT";
    Token[Token["tFLOATLIT"] = 5] = "tFLOATLIT";
    Token[Token["tINTEGERLIT"] = 6] = "tINTEGERLIT";
    Token[Token["tVAR"] = 7] = "tVAR";
    Token[Token["tWHILE"] = 8] = "tWHILE";
    Token[Token["tDO"] = 9] = "tDO";
    Token[Token["tDONE"] = 10] = "tDONE";
    Token[Token["tIF"] = 11] = "tIF";
    Token[Token["tTHEN"] = 12] = "tTHEN";
    Token[Token["tELSE"] = 13] = "tELSE";
    Token[Token["tENDIF"] = 14] = "tENDIF";
    Token[Token["tPRINT"] = 15] = "tPRINT";
    Token[Token["tREAD"] = 16] = "tREAD";
})(Token = exports.Token || (exports.Token = {}));
;
