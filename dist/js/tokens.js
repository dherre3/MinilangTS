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
    Token[Token["tINTEGER"] = 0] = "tINTEGER";
    Token[Token["tSTRING"] = 1] = "tSTRING";
    Token[Token["tFLOAT"] = 2] = "tFLOAT";
    Token[Token["tSTRINGLIT"] = 3] = "tSTRINGLIT";
    Token[Token["tFLOATLIT"] = 4] = "tFLOATLIT";
    Token[Token["tINTEGERLIT"] = 5] = "tINTEGERLIT";
    Token[Token["tVAR"] = 6] = "tVAR";
    Token[Token["tWHILE"] = 7] = "tWHILE";
    Token[Token["tDO"] = 8] = "tDO";
    Token[Token["tDONE"] = 9] = "tDONE";
    Token[Token["tIF"] = 10] = "tIF";
    Token[Token["tTHEN"] = 11] = "tTHEN";
    Token[Token["tELSE"] = 12] = "tELSE";
    Token[Token["tENDIF"] = 13] = "tENDIF";
    Token[Token["tPRINT"] = 14] = "tPRINT";
    Token[Token["tREAD"] = 15] = "tREAD";
})(Token = exports.Token || (exports.Token = {}));
;
