"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("./tokens");
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
exports.KeywordsTokenMapping = {
    "var": tokens_1.Token.tVAR,
    "while": tokens_1.Token.tWHILE,
    "do": tokens_1.Token.tDO,
    "done": tokens_1.Token.tDONE,
    "if": tokens_1.Token.tIF,
    "then": tokens_1.Token.tTHEN,
    "else": tokens_1.Token.tELSE,
    "endif": tokens_1.Token.tENDIF,
    "float": tokens_1.Token.tFLOAT,
    "int": tokens_1.Token.tINTEGER,
    "string": tokens_1.Token.tSTRING,
    "print": tokens_1.Token.tPRINT,
    "read": tokens_1.Token.tREAD
};
