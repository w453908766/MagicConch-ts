/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* ---
* ---
* Program     := module={binding=Binding _ ';' | stmt=Expr _ ';'}*  _
* Keyword     := 'if' | 'then' | 'else'
* _           := wspace*
* wspace      := '(?:\s)'
* Bool        := _ bool='True|False'
* Int         := _ int='[0-9]+'
* Lit := Bool | Int
* Ident := _ !{Keyword} name='[a-z][a-zA-Z0-9]*'
* UppIdent := _ !{Keyword} name='[A-Z][a-zA-Z0-9]*'
* Type := head=Type_ arrow={_ '->' tail=Type}?
* Type_ := _ '\(' type=Type _ '\)' | tvar=Ident | tcons=UppIdent tparams=Type*
* Expr := condExpr=CondExpr | lambdaExpr=LambdaExpr | binExpr=BinExpr  
* CondExpr := _ 'if' _ cond=Expr _ 'then' true_=Expr _ 'else' false_=Expr
* LambdaExpr := _ '\\' _ param=Ident _ '->' body=Expr
* BinExpr := lhs=Exprs tail={_ op=Op rhs=Exprs}*
* Exprs := head=ExprTerm tail=Expr*
* ExprTerm := _ '\(' expr=Expr _ '\)' | lit=Lit | variable=Ident | vcons=UppIdent
* Op := '\+|-|\*|=='
* Binding := name=Ident _ '=' value=Expr
*/



type Nullable<T> = T | null;
type $$RuleType<T> = (log?: (msg: string) => void) => Nullable<T>;
export interface ContextRecorder {
    record(pos: PosInfo, depth: number, result: any, negating: boolean, extraInfo: string[]): void;
}
interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    Program,
    Program_$0_1,
    Program_$0_2,
    Keyword_1,
    Keyword_2,
    Keyword_3,
    _,
    wspace,
    Bool,
    Int,
    Lit_1,
    Lit_2,
    Ident,
    Ident_$0,
    UppIdent,
    UppIdent_$0,
    Type,
    Type_$0,
    Type__1,
    Type__2,
    Type__3,
    Expr_1,
    Expr_2,
    Expr_3,
    CondExpr,
    LambdaExpr,
    BinExpr,
    BinExpr_$0,
    Exprs,
    ExprTerm_1,
    ExprTerm_2,
    ExprTerm_3,
    ExprTerm_4,
    Op,
    Binding,
}
export interface Program {
    kind: ASTKinds.Program;
    module: Program_$0[];
}
export type Program_$0 = Program_$0_1 | Program_$0_2;
export interface Program_$0_1 {
    kind: ASTKinds.Program_$0_1;
    binding: Binding;
}
export interface Program_$0_2 {
    kind: ASTKinds.Program_$0_2;
    stmt: Expr;
}
export type Keyword = Keyword_1 | Keyword_2 | Keyword_3;
export type Keyword_1 = string;
export type Keyword_2 = string;
export type Keyword_3 = string;
export type _ = wspace[];
export type wspace = string;
export interface Bool {
    kind: ASTKinds.Bool;
    bool: string;
}
export interface Int {
    kind: ASTKinds.Int;
    int: string;
}
export type Lit = Lit_1 | Lit_2;
export type Lit_1 = Bool;
export type Lit_2 = Int;
export interface Ident {
    kind: ASTKinds.Ident;
    name: string;
}
export type Ident_$0 = Keyword;
export interface UppIdent {
    kind: ASTKinds.UppIdent;
    name: string;
}
export type UppIdent_$0 = Keyword;
export interface Type {
    kind: ASTKinds.Type;
    head: Type_;
    arrow: Nullable<Type_$0>;
}
export interface Type_$0 {
    kind: ASTKinds.Type_$0;
    tail: Type;
}
export type Type_ = Type__1 | Type__2 | Type__3;
export interface Type__1 {
    kind: ASTKinds.Type__1;
    type: Type;
}
export interface Type__2 {
    kind: ASTKinds.Type__2;
    tvar: Ident;
}
export interface Type__3 {
    kind: ASTKinds.Type__3;
    tcons: UppIdent;
    tparams: Type[];
}
export type Expr = Expr_1 | Expr_2 | Expr_3;
export interface Expr_1 {
    kind: ASTKinds.Expr_1;
    condExpr: CondExpr;
}
export interface Expr_2 {
    kind: ASTKinds.Expr_2;
    lambdaExpr: LambdaExpr;
}
export interface Expr_3 {
    kind: ASTKinds.Expr_3;
    binExpr: BinExpr;
}
export interface CondExpr {
    kind: ASTKinds.CondExpr;
    cond: Expr;
    true_: Expr;
    false_: Expr;
}
export interface LambdaExpr {
    kind: ASTKinds.LambdaExpr;
    param: Ident;
    body: Expr;
}
export interface BinExpr {
    kind: ASTKinds.BinExpr;
    lhs: Exprs;
    tail: BinExpr_$0[];
}
export interface BinExpr_$0 {
    kind: ASTKinds.BinExpr_$0;
    op: Op;
    rhs: Exprs;
}
export interface Exprs {
    kind: ASTKinds.Exprs;
    head: ExprTerm;
    tail: Expr[];
}
export type ExprTerm = ExprTerm_1 | ExprTerm_2 | ExprTerm_3 | ExprTerm_4;
export interface ExprTerm_1 {
    kind: ASTKinds.ExprTerm_1;
    expr: Expr;
}
export interface ExprTerm_2 {
    kind: ASTKinds.ExprTerm_2;
    lit: Lit;
}
export interface ExprTerm_3 {
    kind: ASTKinds.ExprTerm_3;
    variable: Ident;
}
export interface ExprTerm_4 {
    kind: ASTKinds.ExprTerm_4;
    vcons: UppIdent;
}
export type Op = string;
export interface Binding {
    kind: ASTKinds.Binding;
    name: Ident;
    value: Expr;
}
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public matchProgram($$dpth: number, cr?: ContextRecorder): Nullable<Program> {
        return this.runner<Program>($$dpth,
            (log) => {
                if (log) {
                    log("Program");
                }
                let module: Nullable<Program_$0[]>;
                let res: Nullable<Program> = null;
                if (true
                    && (module = this.loop<Program_$0>(() => this.matchProgram_$0($$dpth + 1, cr), true)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                ) {
                    res = {kind: ASTKinds.Program, module};
                }
                return res;
            }, cr)();
    }
    public matchProgram_$0($$dpth: number, cr?: ContextRecorder): Nullable<Program_$0> {
        return this.choice<Program_$0>([
            () => this.matchProgram_$0_1($$dpth + 1, cr),
            () => this.matchProgram_$0_2($$dpth + 1, cr),
        ]);
    }
    public matchProgram_$0_1($$dpth: number, cr?: ContextRecorder): Nullable<Program_$0_1> {
        return this.runner<Program_$0_1>($$dpth,
            (log) => {
                if (log) {
                    log("Program_$0_1");
                }
                let binding: Nullable<Binding>;
                let res: Nullable<Program_$0_1> = null;
                if (true
                    && (binding = this.matchBinding($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`;`, $$dpth + 1, cr) !== null
                ) {
                    res = {kind: ASTKinds.Program_$0_1, binding};
                }
                return res;
            }, cr)();
    }
    public matchProgram_$0_2($$dpth: number, cr?: ContextRecorder): Nullable<Program_$0_2> {
        return this.runner<Program_$0_2>($$dpth,
            (log) => {
                if (log) {
                    log("Program_$0_2");
                }
                let stmt: Nullable<Expr>;
                let res: Nullable<Program_$0_2> = null;
                if (true
                    && (stmt = this.matchExpr($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`;`, $$dpth + 1, cr) !== null
                ) {
                    res = {kind: ASTKinds.Program_$0_2, stmt};
                }
                return res;
            }, cr)();
    }
    public matchKeyword($$dpth: number, cr?: ContextRecorder): Nullable<Keyword> {
        return this.choice<Keyword>([
            () => this.matchKeyword_1($$dpth + 1, cr),
            () => this.matchKeyword_2($$dpth + 1, cr),
            () => this.matchKeyword_3($$dpth + 1, cr),
        ]);
    }
    public matchKeyword_1($$dpth: number, cr?: ContextRecorder): Nullable<Keyword_1> {
        return this.regexAccept(String.raw`if`, $$dpth + 1, cr);
    }
    public matchKeyword_2($$dpth: number, cr?: ContextRecorder): Nullable<Keyword_2> {
        return this.regexAccept(String.raw`then`, $$dpth + 1, cr);
    }
    public matchKeyword_3($$dpth: number, cr?: ContextRecorder): Nullable<Keyword_3> {
        return this.regexAccept(String.raw`else`, $$dpth + 1, cr);
    }
    public match_($$dpth: number, cr?: ContextRecorder): Nullable<_> {
        return this.loop<wspace>(() => this.matchwspace($$dpth + 1, cr), true);
    }
    public matchwspace($$dpth: number, cr?: ContextRecorder): Nullable<wspace> {
        return this.regexAccept(String.raw`(?:\s)`, $$dpth + 1, cr);
    }
    public matchBool($$dpth: number, cr?: ContextRecorder): Nullable<Bool> {
        return this.runner<Bool>($$dpth,
            (log) => {
                if (log) {
                    log("Bool");
                }
                let bool: Nullable<string>;
                let res: Nullable<Bool> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && (bool = this.regexAccept(String.raw`True|False`, $$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Bool, bool};
                }
                return res;
            }, cr)();
    }
    public matchInt($$dpth: number, cr?: ContextRecorder): Nullable<Int> {
        return this.runner<Int>($$dpth,
            (log) => {
                if (log) {
                    log("Int");
                }
                let int: Nullable<string>;
                let res: Nullable<Int> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && (int = this.regexAccept(String.raw`[0-9]+`, $$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Int, int};
                }
                return res;
            }, cr)();
    }
    public matchLit($$dpth: number, cr?: ContextRecorder): Nullable<Lit> {
        return this.choice<Lit>([
            () => this.matchLit_1($$dpth + 1, cr),
            () => this.matchLit_2($$dpth + 1, cr),
        ]);
    }
    public matchLit_1($$dpth: number, cr?: ContextRecorder): Nullable<Lit_1> {
        return this.matchBool($$dpth + 1, cr);
    }
    public matchLit_2($$dpth: number, cr?: ContextRecorder): Nullable<Lit_2> {
        return this.matchInt($$dpth + 1, cr);
    }
    public matchIdent($$dpth: number, cr?: ContextRecorder): Nullable<Ident> {
        return this.runner<Ident>($$dpth,
            (log) => {
                if (log) {
                    log("Ident");
                }
                let name: Nullable<string>;
                let res: Nullable<Ident> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.negate(() => this.matchIdent_$0($$dpth + 1, cr)) !== null
                    && (name = this.regexAccept(String.raw`[a-z][a-zA-Z0-9]*`, $$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Ident, name};
                }
                return res;
            }, cr)();
    }
    public matchIdent_$0($$dpth: number, cr?: ContextRecorder): Nullable<Ident_$0> {
        return this.matchKeyword($$dpth + 1, cr);
    }
    public matchUppIdent($$dpth: number, cr?: ContextRecorder): Nullable<UppIdent> {
        return this.runner<UppIdent>($$dpth,
            (log) => {
                if (log) {
                    log("UppIdent");
                }
                let name: Nullable<string>;
                let res: Nullable<UppIdent> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.negate(() => this.matchUppIdent_$0($$dpth + 1, cr)) !== null
                    && (name = this.regexAccept(String.raw`[A-Z][a-zA-Z0-9]*`, $$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.UppIdent, name};
                }
                return res;
            }, cr)();
    }
    public matchUppIdent_$0($$dpth: number, cr?: ContextRecorder): Nullable<UppIdent_$0> {
        return this.matchKeyword($$dpth + 1, cr);
    }
    public matchType($$dpth: number, cr?: ContextRecorder): Nullable<Type> {
        return this.runner<Type>($$dpth,
            (log) => {
                if (log) {
                    log("Type");
                }
                let head: Nullable<Type_>;
                let arrow: Nullable<Nullable<Type_$0>>;
                let res: Nullable<Type> = null;
                if (true
                    && (head = this.matchType_($$dpth + 1, cr)) !== null
                    && ((arrow = this.matchType_$0($$dpth + 1, cr)) || true)
                ) {
                    res = {kind: ASTKinds.Type, head, arrow};
                }
                return res;
            }, cr)();
    }
    public matchType_$0($$dpth: number, cr?: ContextRecorder): Nullable<Type_$0> {
        return this.runner<Type_$0>($$dpth,
            (log) => {
                if (log) {
                    log("Type_$0");
                }
                let tail: Nullable<Type>;
                let res: Nullable<Type_$0> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`->`, $$dpth + 1, cr) !== null
                    && (tail = this.matchType($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Type_$0, tail};
                }
                return res;
            }, cr)();
    }
    public matchType_($$dpth: number, cr?: ContextRecorder): Nullable<Type_> {
        return this.choice<Type_>([
            () => this.matchType__1($$dpth + 1, cr),
            () => this.matchType__2($$dpth + 1, cr),
            () => this.matchType__3($$dpth + 1, cr),
        ]);
    }
    public matchType__1($$dpth: number, cr?: ContextRecorder): Nullable<Type__1> {
        return this.runner<Type__1>($$dpth,
            (log) => {
                if (log) {
                    log("Type__1");
                }
                let type: Nullable<Type>;
                let res: Nullable<Type__1> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`\(`, $$dpth + 1, cr) !== null
                    && (type = this.matchType($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`\)`, $$dpth + 1, cr) !== null
                ) {
                    res = {kind: ASTKinds.Type__1, type};
                }
                return res;
            }, cr)();
    }
    public matchType__2($$dpth: number, cr?: ContextRecorder): Nullable<Type__2> {
        return this.runner<Type__2>($$dpth,
            (log) => {
                if (log) {
                    log("Type__2");
                }
                let tvar: Nullable<Ident>;
                let res: Nullable<Type__2> = null;
                if (true
                    && (tvar = this.matchIdent($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Type__2, tvar};
                }
                return res;
            }, cr)();
    }
    public matchType__3($$dpth: number, cr?: ContextRecorder): Nullable<Type__3> {
        return this.runner<Type__3>($$dpth,
            (log) => {
                if (log) {
                    log("Type__3");
                }
                let tcons: Nullable<UppIdent>;
                let tparams: Nullable<Type[]>;
                let res: Nullable<Type__3> = null;
                if (true
                    && (tcons = this.matchUppIdent($$dpth + 1, cr)) !== null
                    && (tparams = this.loop<Type>(() => this.matchType($$dpth + 1, cr), true)) !== null
                ) {
                    res = {kind: ASTKinds.Type__3, tcons, tparams};
                }
                return res;
            }, cr)();
    }
    public matchExpr($$dpth: number, cr?: ContextRecorder): Nullable<Expr> {
        return this.choice<Expr>([
            () => this.matchExpr_1($$dpth + 1, cr),
            () => this.matchExpr_2($$dpth + 1, cr),
            () => this.matchExpr_3($$dpth + 1, cr),
        ]);
    }
    public matchExpr_1($$dpth: number, cr?: ContextRecorder): Nullable<Expr_1> {
        return this.runner<Expr_1>($$dpth,
            (log) => {
                if (log) {
                    log("Expr_1");
                }
                let condExpr: Nullable<CondExpr>;
                let res: Nullable<Expr_1> = null;
                if (true
                    && (condExpr = this.matchCondExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Expr_1, condExpr};
                }
                return res;
            }, cr)();
    }
    public matchExpr_2($$dpth: number, cr?: ContextRecorder): Nullable<Expr_2> {
        return this.runner<Expr_2>($$dpth,
            (log) => {
                if (log) {
                    log("Expr_2");
                }
                let lambdaExpr: Nullable<LambdaExpr>;
                let res: Nullable<Expr_2> = null;
                if (true
                    && (lambdaExpr = this.matchLambdaExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Expr_2, lambdaExpr};
                }
                return res;
            }, cr)();
    }
    public matchExpr_3($$dpth: number, cr?: ContextRecorder): Nullable<Expr_3> {
        return this.runner<Expr_3>($$dpth,
            (log) => {
                if (log) {
                    log("Expr_3");
                }
                let binExpr: Nullable<BinExpr>;
                let res: Nullable<Expr_3> = null;
                if (true
                    && (binExpr = this.matchBinExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Expr_3, binExpr};
                }
                return res;
            }, cr)();
    }
    public matchCondExpr($$dpth: number, cr?: ContextRecorder): Nullable<CondExpr> {
        return this.runner<CondExpr>($$dpth,
            (log) => {
                if (log) {
                    log("CondExpr");
                }
                let cond: Nullable<Expr>;
                let true_: Nullable<Expr>;
                let false_: Nullable<Expr>;
                let res: Nullable<CondExpr> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`if`, $$dpth + 1, cr) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && (cond = this.matchExpr($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`then`, $$dpth + 1, cr) !== null
                    && (true_ = this.matchExpr($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`else`, $$dpth + 1, cr) !== null
                    && (false_ = this.matchExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.CondExpr, cond, true_, false_};
                }
                return res;
            }, cr)();
    }
    public matchLambdaExpr($$dpth: number, cr?: ContextRecorder): Nullable<LambdaExpr> {
        return this.runner<LambdaExpr>($$dpth,
            (log) => {
                if (log) {
                    log("LambdaExpr");
                }
                let param: Nullable<Ident>;
                let body: Nullable<Expr>;
                let res: Nullable<LambdaExpr> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`\\`, $$dpth + 1, cr) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && (param = this.matchIdent($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`->`, $$dpth + 1, cr) !== null
                    && (body = this.matchExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.LambdaExpr, param, body};
                }
                return res;
            }, cr)();
    }
    public matchBinExpr($$dpth: number, cr?: ContextRecorder): Nullable<BinExpr> {
        return this.runner<BinExpr>($$dpth,
            (log) => {
                if (log) {
                    log("BinExpr");
                }
                let lhs: Nullable<Exprs>;
                let tail: Nullable<BinExpr_$0[]>;
                let res: Nullable<BinExpr> = null;
                if (true
                    && (lhs = this.matchExprs($$dpth + 1, cr)) !== null
                    && (tail = this.loop<BinExpr_$0>(() => this.matchBinExpr_$0($$dpth + 1, cr), true)) !== null
                ) {
                    res = {kind: ASTKinds.BinExpr, lhs, tail};
                }
                return res;
            }, cr)();
    }
    public matchBinExpr_$0($$dpth: number, cr?: ContextRecorder): Nullable<BinExpr_$0> {
        return this.runner<BinExpr_$0>($$dpth,
            (log) => {
                if (log) {
                    log("BinExpr_$0");
                }
                let op: Nullable<Op>;
                let rhs: Nullable<Exprs>;
                let res: Nullable<BinExpr_$0> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && (op = this.matchOp($$dpth + 1, cr)) !== null
                    && (rhs = this.matchExprs($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.BinExpr_$0, op, rhs};
                }
                return res;
            }, cr)();
    }
    public matchExprs($$dpth: number, cr?: ContextRecorder): Nullable<Exprs> {
        return this.runner<Exprs>($$dpth,
            (log) => {
                if (log) {
                    log("Exprs");
                }
                let head: Nullable<ExprTerm>;
                let tail: Nullable<Expr[]>;
                let res: Nullable<Exprs> = null;
                if (true
                    && (head = this.matchExprTerm($$dpth + 1, cr)) !== null
                    && (tail = this.loop<Expr>(() => this.matchExpr($$dpth + 1, cr), true)) !== null
                ) {
                    res = {kind: ASTKinds.Exprs, head, tail};
                }
                return res;
            }, cr)();
    }
    public matchExprTerm($$dpth: number, cr?: ContextRecorder): Nullable<ExprTerm> {
        return this.choice<ExprTerm>([
            () => this.matchExprTerm_1($$dpth + 1, cr),
            () => this.matchExprTerm_2($$dpth + 1, cr),
            () => this.matchExprTerm_3($$dpth + 1, cr),
            () => this.matchExprTerm_4($$dpth + 1, cr),
        ]);
    }
    public matchExprTerm_1($$dpth: number, cr?: ContextRecorder): Nullable<ExprTerm_1> {
        return this.runner<ExprTerm_1>($$dpth,
            (log) => {
                if (log) {
                    log("ExprTerm_1");
                }
                let expr: Nullable<Expr>;
                let res: Nullable<ExprTerm_1> = null;
                if (true
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`\(`, $$dpth + 1, cr) !== null
                    && (expr = this.matchExpr($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`\)`, $$dpth + 1, cr) !== null
                ) {
                    res = {kind: ASTKinds.ExprTerm_1, expr};
                }
                return res;
            }, cr)();
    }
    public matchExprTerm_2($$dpth: number, cr?: ContextRecorder): Nullable<ExprTerm_2> {
        return this.runner<ExprTerm_2>($$dpth,
            (log) => {
                if (log) {
                    log("ExprTerm_2");
                }
                let lit: Nullable<Lit>;
                let res: Nullable<ExprTerm_2> = null;
                if (true
                    && (lit = this.matchLit($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.ExprTerm_2, lit};
                }
                return res;
            }, cr)();
    }
    public matchExprTerm_3($$dpth: number, cr?: ContextRecorder): Nullable<ExprTerm_3> {
        return this.runner<ExprTerm_3>($$dpth,
            (log) => {
                if (log) {
                    log("ExprTerm_3");
                }
                let variable: Nullable<Ident>;
                let res: Nullable<ExprTerm_3> = null;
                if (true
                    && (variable = this.matchIdent($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.ExprTerm_3, variable};
                }
                return res;
            }, cr)();
    }
    public matchExprTerm_4($$dpth: number, cr?: ContextRecorder): Nullable<ExprTerm_4> {
        return this.runner<ExprTerm_4>($$dpth,
            (log) => {
                if (log) {
                    log("ExprTerm_4");
                }
                let vcons: Nullable<UppIdent>;
                let res: Nullable<ExprTerm_4> = null;
                if (true
                    && (vcons = this.matchUppIdent($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.ExprTerm_4, vcons};
                }
                return res;
            }, cr)();
    }
    public matchOp($$dpth: number, cr?: ContextRecorder): Nullable<Op> {
        return this.regexAccept(String.raw`\+|-|\*|==`, $$dpth + 1, cr);
    }
    public matchBinding($$dpth: number, cr?: ContextRecorder): Nullable<Binding> {
        return this.runner<Binding>($$dpth,
            (log) => {
                if (log) {
                    log("Binding");
                }
                let name: Nullable<Ident>;
                let value: Nullable<Expr>;
                let res: Nullable<Binding> = null;
                if (true
                    && (name = this.matchIdent($$dpth + 1, cr)) !== null
                    && this.match_($$dpth + 1, cr) !== null
                    && this.regexAccept(String.raw`=`, $$dpth + 1, cr) !== null
                    && (value = this.matchExpr($$dpth + 1, cr)) !== null
                ) {
                    res = {kind: ASTKinds.Binding, name, value};
                }
                return res;
            }, cr)();
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchProgram(0);
        const ans = res !== null && this.finished();
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchProgram(0);
        if (res && this.finished()) {
            return new ParseResult(res, null);
        }
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.matchProgram(0, rec);
        return new ParseResult(res, rec.getErr());
    }
    private mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private runner<T>($$dpth: number, fn: $$RuleType<T>, cr?: ContextRecorder): $$RuleType<T> {
        return () => {
            const mrk = this.mark();
            const res = cr ? (() => {
                const extraInfo: string[] = [];
                const result = fn((msg: string) => extraInfo.push(msg));
                cr.record(mrk, $$dpth, result, this.negating, extraInfo);
                return result;
            })() : fn();
            if (res !== null) {
                return res;
            }
            this.reset(mrk);
            return null;
        };
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ContextRecorder): Nullable<string> {
        return this.runner<string>(dpth,
            (log) => {
                if (log) {
                    if (this.negating) {
                        log("$$!StrMatch");
                    } else {
                        log("$$StrMatch");
                    }
                    log(match);
                }
                const reg = new RegExp(match, "y");
                reg.lastIndex = this.mark().overallPos;
                const res = reg.exec(this.input);
                if (res) {
                    let lineJmp = 0;
                    let lind = -1;
                    for (let i = 0; i < res[0].length; ++i) {
                        if (res[0][i] === "\n") {
                            ++lineJmp;
                            lind = i;
                        }
                    }
                    this.pos = {
                        overallPos: reg.lastIndex,
                        line: this.pos.line + lineJmp,
                        offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind)
                    };
                    return res[0];
                }
                return null;
            }, cr)();
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export class ParseResult {
    public ast: Nullable<Program>;
    public err: Nullable<SyntaxErr>;
    constructor(ast: Nullable<Program>, err: Nullable<SyntaxErr>) {
        this.ast = ast;
        this.err = err;
    }
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export class SyntaxErr {
    public pos: PosInfo;
    public exprules: string[];
    public expmatches: string[];
    constructor(pos: PosInfo, exprules: Set<string>, expmatches: Set<string>) {
        this.pos = pos;
        this.exprules = [...exprules];
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Tried to match rules ${this.exprules.join(", ")}. Expected one of ${this.expmatches.map((x) => ` '${x}'`)}`;
    }
}
class ErrorTracker implements ContextRecorder {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private mnd: number = -1;
    private prules: Set<string> = new Set();
    private pmatches: Set<string> = new Set();
    public record(pos: PosInfo, depth: number, result: any, negating: boolean, extraInfo: string[]) {
        if ((result === null) === negating) {
            return;
        }
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.mnd = depth;
            this.pmatches.clear();
            this.prules.clear();
        } else if (pos.overallPos === this.mxpos.overallPos && depth < this.mnd) {
            this.mnd = depth;
            this.prules.clear();
        }
        if (this.mxpos.overallPos === pos.overallPos && extraInfo.length >= 2) {
            if (extraInfo[0] === "$$StrMatch") {
                this.pmatches.add(extraInfo[1]);
            }
            if (extraInfo[0] === "$$!StrMatch") {
                this.pmatches.add(`not ${extraInfo[1]}`);
            }
        }
        if (this.mxpos.overallPos === pos.overallPos && this.mnd === depth) {
            extraInfo.forEach((x) => { if (x !== "$$StrMatch" && x !== "$$!StrMatch") { this.prules.add(x); } });
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1) {
            return new SyntaxErr(this.mxpos, this.prules, this.pmatches);
        }
        return null;
    }
}