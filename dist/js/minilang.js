"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scanner_1 = require("./scanner");
const fs = require("fs");
class Minilang {
    constructor(sourceFilePath) {
        this.source = fs.readFileSync(sourceFilePath).toString();
        this.scanner = new scanner_1.Scanner(this.source);
        let tokens = this.scanner.getTokens();
    }
}
exports.Minilang = Minilang;
