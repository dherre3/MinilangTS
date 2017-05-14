"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scanner_1 = require("./scanner");
const fs = require("fs");
class Minilang {
    constructor(sourceFilePath) {
        this.source = fs.readFileSync(sourceFilePath).toString();
        this.scanner = new scanner_1.Scanner(this.source);
        console.log(this.scanner.getSemanticAttributes());
    }
}
exports.Minilang = Minilang;
