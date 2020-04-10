#!/usr/bin/env node
import * as readline from "readline";
import { SyntaxErr, PosInfo, ParseResult, ASTKinds, Parser } from "./parser";
import * as evals from "./eval";

import * as fs from "fs";


export function runFile(filepath) {
    const code = fs.readFileSync(filepath,'utf-8');
    const parser = new Parser(code);
    const res = parser.parse();
    if (res.err) {
        console.error(res.err);
        process.exitCode = 1;
        return;
    }

    evals.evalModule(res.ast.module);
    return res;
}

function main() {
  runFile(process.argv[2]);
}

main();

