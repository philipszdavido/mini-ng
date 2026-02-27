class Tokenizer {
    constructor(input) {
        this.input = input;
        this.current = 0;
        this.tokens = [];
        this.keywords = ["@for", "@if", "@else", "@else if", "@switch", "@defer", "@case", "@default", "@empty"];
        this.tokenize();
    }

    tokenize() {
        while (this.current < this.input.length) {
            let char = this.input[this.current];

            if (/\s/.test(char)) {
                this.current++;
                continue;
            }

            if (char === '@') {
                let value = this.readKeyword();
                this.tokens.push({ type: 'Keyword', value });
                continue;
            }

            if (char === '(' || char === ')' || char === '{' || char === '}' || char === ';' || char === '=') {
                this.tokens.push({ type: 'Punctuation', value: char });
                this.current++;
                continue;
            }

            if (char === '"' || char === "'") {
                let value = this.readString(char);
                this.tokens.push({ type: 'String', value });
                continue;
            }

            if (/[a-zA-Z_]/.test(char)) {
                let value = this.readIdentifier();
                this.tokens.push({ type: 'Identifier', value });
                continue;
            }

            if (/\d/.test(char)) {
                let value = this.readNumber();
                this.tokens.push({ type: 'Number', value });
                continue;
            }

            // Handle HTML content or other characters
            let value = this.readUntilNextToken();
            this.tokens.push({ type: 'HTML', value });
        }
    }

    readKeyword() {
        let start = this.current;
        while (this.current < this.input.length && /[@a-zA-Z ]/.test(this.input[this.current])) {
            this.current++;
        }
        return this.input.slice(start, this.current).trim();
    }

    readString(quote) {
        let start = this.current++;
        while (this.current < this.input.length && this.input[this.current] !== quote) {
            this.current++;
        }
        this.current++;
        return this.input.slice(start, this.current);
    }

    readIdentifier() {
        let start = this.current;
        while (this.current < this.input.length && /[a-zA-Z0-9_]/.test(this.input[this.current])) {
            this.current++;
        }
        return this.input.slice(start, this.current);
    }

    readNumber() {
        let start = this.current;
        while (this.current < this.input.length && /\d/.test(this.input[this.current])) {
            this.current++;
        }
        return this.input.slice(start, this.current);
    }

    readUntilNextToken() {
        let start = this.current;
        while (this.current < this.input.length && !/[\s@(){};=]/.test(this.input[this.current])) {
            this.current++;
        }
        return this.input.slice(start, this.current);
    }

    getNextToken() {
        return this.tokens.shift();
    }
}

class Parser {
    constructor(tokenizer) {
        this.tokenizer = tokenizer;
        this.currentToken = null;
        this.nextToken();
    }

    nextToken() {
        this.currentToken = this.tokenizer.getNextToken();
    }

    parse() {
        let body = [];
        while (this.currentToken) {
            body.push(this.parseStatement());
        }
        return { type: 'Program', body };
    }

    parseStatement() {
        let token = this.currentToken;
        if (!token) return null;

        if (token.type === 'Keyword') {
            switch (token.value) {
                case '@if':
                    return this.parseIfStatement();
                case '@for':
                    return this.parseForStatement();
                case '@switch':
                    return this.parseSwitchStatement();
                case '@else':
                case '@else if':
                    return this.parseElseStatement();
                case '@case':
                    return this.parseCaseStatement();
                case '@default':
                    return this.parseDefaultStatement();
                case '@empty':
                    return this.parseEmptyStatement();
                default:
                    throw new Error(`Unexpected keyword: ${token.value}`);
            }
        }

        this.nextToken();
        return null;
    }

    parseIfStatement() {
        this.nextToken(); // consume '@if'
        let test = this.parseExpression();
        let consequent = this.parseBlock();
        let alternate = null;

        if (this.currentToken && this.currentToken.type === 'Keyword' &&
            (this.currentToken.value === '@else' || this.currentToken.value === '@else if')) {
            alternate = this.parseStatement();
        }

        return { type: 'IfStatement', test, consequent, alternate };
    }

    parseElseStatement() {
        let value = this.currentToken.value;
        this.nextToken(); // consume '@else' or '@else if'
        let test = value === '@else if' ? this.parseExpression() : null;
        let consequent = this.parseBlock();
        return { type: 'ElseStatement', test, consequent };
    }

    parseForStatement() {
        this.nextToken(); // consume '@for'
        let expression = this.parseExpression();
        let body = this.parseBlock();
        return { type: 'ForStatement', expression, body };
    }

    parseSwitchStatement() {
        this.nextToken(); // consume '@switch'
        let discriminant = this.parseExpression();
        let cases = this.parseBlock(true);
        return { type: 'SwitchStatement', discriminant, cases };
    }

    parseCaseStatement() {
        this.nextToken(); // consume '@case'
        let test = this.parseExpression();
        let consequent = this.parseBlock();
        return { type: 'CaseStatement', test, consequent };
    }

    parseDefaultStatement() {
        this.nextToken(); // consume '@default'
        let consequent = this.parseBlock();
        return { type: 'DefaultStatement', consequent };
    }

    parseEmptyStatement() {
        this.nextToken(); // consume '@empty'
        let body = this.parseBlock();
        return { type: 'EmptyStatement', body };
    }

    parseExpression() {
        // Simplified for example purposes
        let expr = '';
        while (this.currentToken && this.currentToken.type !== 'Punctuation') {
            expr += this.currentToken.value;
            this.nextToken();
        }
        return { type: 'Expression', value: expr.trim() };
    }

    parseBlock(isSwitchCase = false) {
        this.nextToken(); // consume '{'
        let body = [];
        while (this.currentToken && this.currentToken.value !== '}') {
            if (isSwitchCase && this.currentToken.value.startsWith('@case') || this.currentToken.value === '@default') {
                break; // stop parsing this block to handle switch cases
            }
            body.push(this.parseStatement());
        }
        this.nextToken(); // consume '}'
        return { type: 'BlockStatement', body };
    }
}

// Example usage
const input = `
@if(prim == 4) {
  <div>Hello if new</div>
  <div>Hello if new</div>
} @else if(prim == 5) {
  <div>Hello else if new</div>
  <div>Hello else if new</div>
} @else {
  <div>Hello else new</div>
  <div>Hello else new</div>
}

@for(arr of prim; track $index; let last = $last) {
  <div>For {{arr}}</div>
  <div>For {{count()}}</div>
  @if(prim == 4) {
    <div>Hello if new</div>
    <div>Hello if new</div>
  }
} @empty {
  <div>Empty</div>
}

@switch (prim) {
  @case(4) {
    <div>Case 4</div>
  } @case(5) {
    <div>Case 5</div>
  } @default {
    <div>Default</div>
  }
}
`;

const tokenizer = new Tokenizer(input);
const parser = new Parser(tokenizer);
const ast = parser.parse();

console.log(JSON.stringify(ast, null, 2));
