"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const minilang_1 = require("./minilang");
const argv = yargs.argv;
//Define filename
const filename = argv.f;
let mini = new minilang_1.Minilang(filename);
