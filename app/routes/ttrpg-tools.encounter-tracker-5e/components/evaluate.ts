// TEMPORARY
// Replacing mathjs temporarily with a parser taken from
// https://github.com/jorendorff/toy-calculator

function tokenize(code: string) {
  var results = [];
  var tokenRegExp = /\s*([A-Za-z]+|[0-9]+|\S)\s*/g;

  var m;
  while ((m = tokenRegExp.exec(code)) !== null) results.push(m[1]);
  return results;
}

function isNumber(token: string): boolean {
  return token !== undefined && token.match(/^[0-9]+$/) !== null;
}

function isName(token: string): boolean {
  return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
}

function parse(code: string): any {
  var tokens = tokenize(code);
  var position = 0;
  function peek() {
    return tokens[position];
  }
  function consume(token: string) {
    position++;
  }
  function parsePrimaryExpr(): any {
    var t = peek();

    if (isNumber(t)) {
      consume(t);
      return { type: "number", value: t };
    } else if (isName(t)) {
      consume(t);
      return { type: "name", id: t };
    } else if (t === "(") {
      consume(t);
      var expr = parseExpr();
      if (peek() !== ")") throw new SyntaxError("expected )");
      consume(")");
      return expr;
    } else if (t === "-") {
      consume(t);
      t = peek();
      if (t === "(") {
        throw new SyntaxError("-() not supported");
      } else if (isNumber(t)) {
        consume(t);
        return { type: "number", value: `-${t}` };
      } else {
        throw new SyntaxError(`-${t} not supported`);
      }
    } else {
      throw new SyntaxError("expected a number, a variable, or parentheses");
    }
  }

  function parseMulExpr() {
    var expr = parsePrimaryExpr();
    var t = peek();
    while (t === "*" || t === "/") {
      consume(t);
      var rhs = parsePrimaryExpr();
      expr = { type: t, left: expr, right: rhs };
      t = peek();
    }
    return expr;
  }
  function parseExpr() {
    var expr = parseMulExpr();
    var t = peek();
    while (t === "+" || t === "-") {
      consume(t);
      var rhs = parseMulExpr();
      expr = { type: t, left: expr, right: rhs };
      t = peek();
    }
    return expr;
  }
  var result = parseExpr();
  if (position !== tokens.length) {
    throw new SyntaxError("unexpected '" + peek() + "'");
  }

  return result;
}

export function evaluate(code: string) {
  var variables = Object.create(null);
  variables.e = Math.E;
  variables.pi = Math.PI;

  function ev(obj: any): any {
    switch (obj.type) {
      case "number":
        return parseInt(obj.value);
      case "name":
        // return variables[obj.id] || 0;
        if (variables[obj.id]) {
          return variables[obj.id];
        } else {
          throw new SyntaxError("words not allowed");
        }
      case "+":
        return ev(obj.left) + ev(obj.right);
      case "-":
        return ev(obj.left) - ev(obj.right);
      case "*":
        return ev(obj.left) * ev(obj.right);
      case "/":
        return ev(obj.left) / ev(obj.right);
    }
  }
  return ev(parse(code));
}
