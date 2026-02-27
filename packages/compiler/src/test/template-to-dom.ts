function replaceCustomDirectivesV1(html) {
    // Replace @if (condition) {}
    html = html.replace(/@if\s*\(([^)]+)\)\s*\{([^}]*)\}/g, '<ng-if decls="$1">$2</ng-if>');

    // Replace @else if (condition) {}
    html = html.replace(/@else if\s*\(([^)]+)\)\s*\{([^}]*)\}/g, '<ng-else-if decls="$1">$2</ng-else-if>');

    // Replace @else {}
    html = html.replace(/@else\s*\{([^}]*)\}/g, '<ng-else>$1</ng-else>');

    // Replace @for (item of collection; track $index; let last = $last) {}
    html = html.replace(/@for\s*\(([^)]+)\)\s*\{([^}]*)\}/g, '<ng-for decls="$1">$2</ng-for>');

    // Replace @empty
    html = html.replace(/@empty/g, '<ng-for-empty>');

    // Replace @switch (expression) {}
    html = html.replace(/@switch\s*\(([^)]+)\)\s*\{([^}]*)\}/g, '<ng-switch decls="$1">$2</ng-switch>');

    // Replace @case (value) {}
    html = html.replace(/@case\s*\(([^)]+)\)\s*\{([^}]*)\}/g, '<ng-case decls="$1">$2</ng-case>');

    // Replace @default {}
    html = html.replace(/@default\s*\{([^}]*)\}/g, '<ng-default>$1</ng-default>');

    return html;
}

function replaceCustomDirectivesV2(html){
    // Function to match balanced curly braces
    const matchBalancedBraces = (str, startIndex) => {
        let stack = 1; // We already found the first '{'
        for (let i = startIndex + 1; i < str.length; i++) {
            if (str[i] === '{') stack++;
            if (str[i] === '}') stack--;
            if (stack === 0) return i;
        }
        throw new Error("Unbalanced braces in the string.");
    };

    // Function to replace a directive with the corresponding ng-* directive
    const replaceDirective = (str, directive, ngDirective, withDecls = true) => {

        const regex = new RegExp(`@${directive}\\s*\\(([^)]+)\\)\\s*\\{`, 'g');
        let match;
        while ((match = regex.exec(str)) !== null) {
            const startIndex = match.index;
            const endIndex = matchBalancedBraces(str, match.index + match[0].length - 1);
            const content = str.slice(match.index, endIndex + 1);

            let decls = match[1].trim();
            if (!withDecls) decls = "";

            const replacement = `<ng-${ngDirective} decls="${decls}">${content.slice(match[0].length, -1)}</ng-${ngDirective}>`;
            str = str.slice(0, startIndex) + replacement + str.slice(endIndex + 1);
        }
        return str;
    };

    // Replace @if, @else if, @else, @for, @empty, @switch, @case, @default
    html = replaceDirective(html, 'if', 'if');
    html = replaceDirective(html, 'else if', 'else-if');
    html = html.replace(/@else\s*\{([^}]*)\}/g, '<ng-else>$1</ng-else>');
    html = replaceDirective(html, 'for', 'for');
    html = html.replace(/@empty/g, '<ng-for-empty>');
    html = replaceDirective(html, 'switch', 'switch');
    html = replaceDirective(html, 'case', 'case');
    html = html.replace(/@default\s*\{([^}]*)\}/g, '<ng-default>$1</ng-default>');

    return html;
}

function replaceCustomDirectivesV3(html) {
    // Function to match balanced curly braces
    const matchBalancedBraces = (str, startIndex) => {
        let stack = 1; // We already found the first '{'
        for (let i = startIndex + 1; i < str.length; i++) {
            if (str[i] === '{') stack++;
            if (str[i] === '}') stack--;
            if (stack === 0) return i;
        }
        throw new Error("Unbalanced braces in the string.");
    };

    // Function to replace a directive with the corresponding ng-* directive
    const replaceDirective = (str, directive, ngDirective, withDecls = true) => {
        const regex = new RegExp(`@${directive}\\s*\\(([^)]+)\\)\\s*\\{`, 'g');
        let match;
        while ((match = regex.exec(str)) !== null) {
            const startIndex = match.index;
            const endIndex = matchBalancedBraces(str, match.index + match[0].length - 1);
            const content = str.slice(match.index, endIndex + 1);

            let decls = match[1].trim();
            if (!withDecls) decls = "";

            const replacement = `<ng-${ngDirective} decls="${decls}">${content.slice(match[0].length, -1)}</ng-${ngDirective}>`;
            str = str.slice(0, startIndex) + replacement + str.slice(endIndex + 1);
        }
        return str;
    };

    // Replace @if, @else if, @else, @for, @empty, @switch, @case, @default
    html = replaceDirective(html, 'if', 'if');
    html = replaceDirective(html, 'else if', 'else-if');
    html = html.replace(/@else\s*\{([^}]*)\}/g, '<ng-else>$1</ng-else>');
    html = replaceDirective(html, 'for', 'for');
    html = html.replace(/@empty/g, '<ng-for-empty />');
    html = replaceDirective(html, 'switch', 'switch');
    html = replaceDirective(html, 'case', 'case');
    html = html.replace(/@default\s*\{([^}]*)\}/g, '<ng-default>$1</ng-default>');

    return html;
}

function replaceCustomDirectivesV4(html) {
    // Function to match balanced curly braces
    const matchBalancedBraces = (str, startIndex) => {
        let stack = 1; // We already found the first '{'
        for (let i = startIndex + 1; i < str.length; i++) {
            if (str[i] === '{') stack++;
            if (str[i] === '}') stack--;
            if (stack === 0) return i;
        }
        throw new Error("Unbalanced braces in the string.");
    };

    // Function to replace a directive with the corresponding ng-* directive
    const replaceDirective = (str, directive, ngDirective, withDecls = true) => {
        const regex = new RegExp(`@${directive}\\s*\\(([^)]+)\\)\\s*\\{`, 'g');
        let match;
        while ((match = regex.exec(str)) !== null) {
            const startIndex = match.index;
            const endIndex = matchBalancedBraces(str, match.index + match[0].length - 1);
            const content = str.slice(match.index, endIndex + 1);

            let decls = match[1].trim();
            if (!withDecls) decls = "";

            const replacement = `<ng-${ngDirective} decls="${decls}">${content.slice(match[0].length, -1)}</ng-${ngDirective}>`;
            str = str.slice(0, startIndex) + replacement + str.slice(endIndex + 1);
        }
        return str;
    };

    // Replace @if, @else if, @else, @for, @empty, @switch, @case, @default
    html = replaceDirective(html, 'if', 'if');
    html = replaceDirective(html, 'else if', 'else-if');
    html = html.replace(/@else\s*\{([^}]*)\}/g, '<ng-else>$1</ng-else>');
    html = replaceDirective(html, 'for', 'for');

    // Handle @empty case specifically
    const emptyRegex = /@empty\s*\{([^}]*)\}/g;
    html = html.replace(emptyRegex, '<ng-for-empty>$1</ng-for-empty>');

    html = replaceDirective(html, 'switch', 'switch');
    html = replaceDirective(html, 'case', 'case');
    html = html.replace(/@default\s*\{([^}]*)\}/g, '<ng-default>$1</ng-default>');

    return html;
}

function replaceCustomDirectivesAndPipes(html) {
    // Function to match balanced curly braces
    const matchBalancedBraces = (str, startIndex) => {
        let stack = 1; // We already found the first '{'
        for (let i = startIndex + 1; i < str.length; i++) {
            if (str[i] === '{') stack++;
            if (str[i] === '}') stack--;
            if (stack === 0) return i;
        }
        throw new Error("Unbalanced braces in the string.");
    };

    // Function to replace a directive with the corresponding ng-* directive
    const replaceDirective = (str, directive, ngDirective, withDecls = true) => {
        const regex = new RegExp(`@${directive}\\s*\\(([^)]+)\\)\\s*\\{`, 'g');
        let match;
        while ((match = regex.exec(str)) !== null) {
            const startIndex = match.index;
            const endIndex = matchBalancedBraces(str, match.index + match[0].length - 1);
            const content = str.slice(match.index, endIndex + 1);

            let decls = match[1].trim();
            if (!withDecls) decls = "";

            const replacement = `<ng-${ngDirective} decls="${decls}">${content.slice(match[0].length, -1)}</ng-${ngDirective}>`;
            str = str.slice(0, startIndex) + replacement + str.slice(endIndex + 1);
        }
        return str;
    };

    // Function to replace pipes in interpolations
    const replacePipesInInterpolations = (str) => {
        const interpolationRegex = /\{\{([^}]+)\|([^}]+)\}\}/g;
        return str.replace(interpolationRegex, (_match, expr, pipe) => {
            return `<ng-pipe expr="${expr.trim()}" pipe="${pipe.trim()}"></ng-pipe>`;
        });
    };

    // Replace @if, @else if, @else, @for, @empty, @switch, @case, @default
    html = replaceDirective(html, 'if', 'if');
    html = replaceDirective(html, 'else if', 'else-if');
    html = html.replace(/@else\s*\{([^}]*)\}/g, '<ng-else>$1</ng-else>');
    html = replaceDirective(html, 'for', 'for');

    // Handle @empty case specifically
    const emptyRegex = /@empty\s*\{([^}]*)\}/g;
    html = html.replace(emptyRegex, '<ng-for-empty>$1</ng-for-empty>');

    html = replaceDirective(html, 'switch', 'switch');
    html = replaceDirective(html, 'case', 'case');
    html = html.replace(/@default\s*\{([^}]*)\}/g, '<ng-default>$1</ng-default>');

    // Replace pipes in interpolations
    html = replacePipesInInterpolations(html);

    return html;
}


// Sample HTML input
const htmlInput = `<!DOCTYPE html>
<html>

<body>
  <h1 (click)="console.log(34); $event">My First Heading</h1>
  <p [disabled]="true">My first paragraph. {{yu}} {{rtr$ | async}} {{console.log(34)}}{{a.o}}</p>
<p *ngIf="true">@</p>

</body>

</html>

<p></p>
errr@if(prim == 4) { hjhjh
    <div>Hello if new</div>
    <div>Hello if new {{expr | date}}</div>
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

function s() {
// Replace directives in the sample HTML
    const resultHtml = replaceCustomDirectivesAndPipes(htmlInput);
    console.log(resultHtml);
}

// s();

`
<!DOCTYPE html>
<html>

<body>
<h1 (click)="console.log(34); $event">My First Heading</h1>
<p [disabled]="true">My first paragraph. {{yu}} <ng-pipe expr="rtr$" pipe="async"></ng-pipe> {{console.log(34)}}{{a.o}}</p>
<p *ngIf="true">@</p>

</body>

</html>

<p></p>
errr<ng-if decls="prim == 4"> hjhjh
<div>Hello if new</div>
<div>Hello if new <ng-pipe expr="expr" pipe="date"></ng-pipe></div>
</ng-if> <ng-else-if decls="prim == 5">
<div>Hello else if new</div>
<div>Hello else if new</div>
</ng-else-if> <ng-else>
<div>Hello else new</div>
<div>Hello else new</div>
</ng-else>

<ng-for decls="arr of prim; track $index; let last = $last">
<div>For {{arr}}</div>
<div>For {{count()}}</div>
<ng-if decls="prim == 4">
<div>Hello if new</div>
<div>Hello if new</div>
</ng-if>
</ng-for> <ng-for-empty>
<div>Empty</div>
</ng-for-empty>

<ng-switch decls="prim">
<ng-case decls="4">
<div>Case 4</div>
</ng-case> <ng-case decls="5">
<div>Case 5</div>
</ng-case> <ng-default>
<div>Default</div>
</ng-default>
</ng-switch>
`
