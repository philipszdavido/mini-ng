function tokenize(html) {
    const tokens = [];
    let current = 0;

    var input = html

    // Skip over <!DOCTYPE ...> declaration
    const doctypeRegex = /^<!DOCTYPE[\s\S]*?>/i;
    input = input.replace(doctypeRegex, '');

    while (current < input.length) {
        let char = input[current];

        if (char === '<') {
            let value = '';
            while (char !== '>' && current < input.length) {
                value += char;
                char = input[++current];
            }
            value += '>';
            tokens.push({ type: 'tag', value });
            current++;
            continue;
        }

        if (char === '{' && input[current + 1] === '{') {
            let value = '';
            while (char !== '}' && input[current + 1] !== '}' && current < input.length) {
                value += char;
                char = input[++current];
            }
            value += '}}';
            tokens.push({ type: 'interpolation', value });
            current += 2;
            continue;
        }

        if (/\s/.test(char)) {
            current++;
            continue;
        }

        let value = '';
        while (char && char !== '<' && !/\s/.test(char)) {
            value += char;
            char = input[++current];
        }
        tokens.push({ type: 'text', value });
    }

    return tokens;
}

function _parse(tokens) {
    let current = 0;

    function walk() {
        let token = tokens[current];

        if (token.type === 'text') {
            current++;
            return {
                type: 'Text',
                value: token.value,
            };
        }

        if (token.type === 'interpolation') {
            current++;
            return {
                type: 'Interpolation',
                value: token.value.slice(2, -2).trim(),
            };
        }

        if (token.type === 'tag' && token.value.startsWith('</')) {
            current++;
            return null; // closing tag
        }

        if (token.type === 'tag' && token.value.startsWith('<')) {
            const tag = token.value.match(/^<([a-zA-Z0-9\-]+)(.*)>$/);
            const node = {
                type: 'Element',
                tagName: tag[1],
                attributes: {},
                children: [],
            };

            const attrs = tag[2].match(/([^\s=]+)(?:\s*=\s*(["'])([^\2]*?)\2)?/g);
            if (attrs) {
                attrs.forEach(attr => {
                    const parts = attr.match(/([^\s=]+)(?:\s*=\s*(["'])([^\2]*?)\2)?/);
                    node.attributes[parts[1]] = parts[3] || true;
                });
            }

            token = tokens[++current];

            while (token && !token.value.startsWith('</')) {
                const child = walk();
                if (child) {
                    node.children.push(child);
                }
                token = tokens[current];
            }

            current++;
            return node;
        }

        throw new TypeError('Unexpected token type: ' + token.type);
    }

    const ast = [];
    while (current < tokens.length) {
        const node = walk();
        if (node) {
            ast.push(node);
        }
    }

    return ast;
}


function parse(tokens) {
    let current = 0;

    function walk() {
        let token = tokens[current];

        if (token.type === 'text') {
            current++;
            return {
                type: 'Text',
                value: token.value,
            };
        }

        if (token.type === 'interpolation') {
            current++;
            return {
                type: 'Interpolation',
                value: token.value.slice(2, -2).trim(),
            };
        }

        if (token.type === 'tag' && token.value.startsWith('</')) {
            current++;
            return null; // closing tag
        }

        if (token.type === 'tag' && token.value.startsWith('<')) {
            const tag = token.value.match(/^<([a-zA-Z0-9\-]+)(.*)>$/);
            console.log(token)
            const node = {
                type: 'Element',
                tagName: tag[1],
                attributes: {},
                children: [],
            };

            const attrs = tag[2].match(/([^\s=]+)(?:\s*=\s*(["'])([^\2]*?)\2)?/g);
            if (attrs) {
                attrs.forEach(attr => {
                    const parts = attr.match(/([^\s=]+)(?:\s*=\s*(["'])([^\2]*?)\2)?/);
                    let attrName = parts[1];
                    let attrValue = parts[3] || true;

                    if (attrName.startsWith('[') && attrName.endsWith(']')) {
                        attrName = attrName.slice(1, -1);
                        node.attributes[attrName] = {
                            type: 'PropertyBinding',
                            value: attrValue
                        };
                    } else if (attrName.startsWith('(') && attrName.endsWith(')')) {
                        attrName = attrName.slice(1, -1);
                        node.attributes[attrName] = {
                            type: 'EventBinding',
                            value: attrValue
                        };
                    } else {
                        node.attributes[attrName] = attrValue;
                    }
                });
            }

            token = tokens[++current];

            while (token && !token.value.startsWith('</')) {
                const child = walk();
                if (child) {
                    node.children.push(child);
                }
                token = tokens[current];
            }

            current++;
            return node;
        }

        throw new TypeError('Unexpected token type: ' + token.type);
    }

    const ast = [];
    while (current < tokens.length) {
        const node = walk();
        if (node) {
            ast.push(node);
        }
    }

    return ast;
}


const html = `

<html>
  <body>
    <h1 (click)="console.log(34); $event">My First Heading</h1>
    <p [disabled]="true">My first paragraph. {{yu}} {{rtr$ | async}} {{console.log(34)}}{{a.o}}</p>
    <p *ngIf="true"></p>
  </body>
</html>
`;

const tokens = tokenize(html);
console.log(tokens)
// const ast = parse(tokens);
// console.log(JSON.stringify(ast, null, 2));
