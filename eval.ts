
import { SyntaxErr, PosInfo, ParseResult, ASTKinds, Parser } from "./parser";

export class Environment {

    private enclosing: Environment | null;
    private values: Map<string, any> = new Map();

    constructor(enc?: Environment) {
        this.enclosing = enc || null;
    }

    public get(id: string): any {
        if (this.values.has(id)) {
            return this.values.get(id)!;
        }
        if (this.enclosing) {
            return this.enclosing.get(id);
        }
        throw `There are no variables with name: ${id}`;
    }

    public define(id: string, val: any) {
        this.values.set(id, val);
    }
}

function evalBinding(env, binding){

  let name = binding.name.name;
  let value = evalExpr(env, binding.value);

  env.define(name, value); 

}


function evalLit(lit){
  if(lit.kind == ASTKinds.Bool){
    return lit.bool=='True';
  } else if(lit.kind == ASTKinds.Int){
    return parseInt(lit.int);
  }
}


//ExprTerm := _ '\(' expr=Expr _ '\)' | lit=Lit | variable=Ident | vcons=UppIdent
function evalExprTerm(env, exprTerm){

  if(exprTerm.kind == ASTKinds.ExprTerm_1){
    return evalExpr(env, exprTerm.expr);
  } else if(exprTerm.kind == ASTKinds.ExprTerm_2){
    return evalLit(exprTerm.lit);
  } else if(exprTerm.kind == ASTKinds.ExprTerm_3){
    return env.get(exprTerm.variable.name);
    
  } else if(exprTerm.kind == ASTKinds.ExprTerm_4){
  }
}

// Exprs := head=ExprTerm tail=Expr*
function evalExprs(env, exprs){
  let head = evalExprTerm(env, exprs.head);
  if(exprs.tail.length==0){
    return head;
  } else {
    var f = head;


    for(const arg of exprs.tail){
      let value = evalExpr(env, arg);
      //if(typeof f=='object'){

      let closure = new Environment(f.clos);
      closure.define(f.param, value);

      f = evalExpr(closure, f.body);
    }
    return f;

  }
}

function evalBinExpr(env, binExpr){
  let lhs = evalExprs(env, binExpr.lhs);
  if(binExpr.tail.length==0){
    return lhs;
  } else if(binExpr.tail.length==1){
  


    let op = binExpr.tail[0].op;
    let rhs = evalExprs(env, binExpr.tail[0].rhs);


    if(op=='+')return lhs+rhs;
    else if(op=='-')return lhs-rhs;
    else if(op=='*'){
      return lhs*rhs;
    }
    else if(op=='==')return lhs==rhs;
    
  } else {
    throw "Can not handle binary operator priority";
  }
}


function evalCondExpr(env, condExpr){


  let cond = evalExpr(env, condExpr.cond);
  if(cond){
    return evalExpr(env, condExpr.true_);
  } else {

    return evalExpr(env, condExpr.false_);
  }
}

function evalExpr(env, expr){

  if(expr.kind == ASTKinds.Expr_1){

    return evalCondExpr(env, expr.condExpr);

  } else if(expr.kind == ASTKinds.Expr_2) {
    let lambda = expr.lambdaExpr;
    return {
      param:lambda.param.name, 
      body:lambda.body, 
      clos:env};

  } else if(expr.kind == ASTKinds.Expr_3) {
    return evalBinExpr(env, expr.binExpr);
  }
}

export function evalModule(module) {
  let env = new Environment();
  for(const item of module){
     if(item.kind == ASTKinds.Program_$0_1){
       evalBinding(env, item.binding);
     } else if(item.kind == ASTKinds.Program_$0_2){
       console.log(evalExpr(env, item.stmt));
     }
   }
}
