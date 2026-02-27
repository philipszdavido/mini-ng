import postcss from "postcss";

interface CssRule {
    selectors: string[];
    declarations: CssDeclaration[];
}

interface CssDeclaration {
    prop: string;
    value: string;
}

export class CSSParser {

     cssBlockRegex =
        /((\s*?@media[\s\S]*?){([\s\S]*?)}\s*?})|(([\s\S]*?){([\s\S]*?)})/g;

     parseCSS(css: string) {
        const blocks: {
            type: "media" | "rule";
            selector?: string;
            mediaQuery?: string;
            body: string;
        }[] = [];

        let match: RegExpExecArray | null;

        while ((match = this.cssBlockRegex.exec(css)) !== null) {
            // @media block
            if (match[2]) {
                blocks.push({
                    type: "media",
                    mediaQuery: match[2].trim(),
                    body: match[3].trim(),
                });
            }
            // normal rule
            else {
                blocks.push({
                    type: "rule",
                    selector: match[5].trim(),
                    body: match[6].trim(),
                });
            }
        }

        return blocks;
    }

    parsePostCSS(cssText: string) {

        const root = postcss.parse(cssText);

        root.walkRules(rule => {
            // rule.selectors = rule.selectors.map(
            //     s => `${s}[_ngcontent-%COMP%]`
            // );
            rule.selectors = rule.selectors.map(this.scopeSelectorV1);
        });

        const result = root.toString();

        return result;

    }

     scopeSelector(selector: string) {
        return selector
            .split(/\s+/)
            .map(part => {
                if (part.includes(':host')) {
                    return part.replace(
                        /:host(\((.*?)\))?/g,
                        (_, __, hostSel) =>
                            hostSel
                                ? `[_nghost-%COMP%]${hostSel}`
                                : `[_nghost-%COMP%]`
                    );
                }

                // Ignore pseudo selectors like :hover
                if (part.startsWith(':')) return part;

                return `${part}[_ngcontent-%COMP%]`;
            })
            .join(' ');
    }

    scopeSelectorV1(selector: string) {
        return selector
            .split(/\s+/)
            .map(part => {
                if (part.includes(':host')) {
                    return part.replace(
                        /:host(\((.*?)\))?/g,
                        (_, __, hostSel) =>
                            hostSel
                                ? `[_nghost-%COMP%]${hostSel}`
                                : `[_nghost-%COMP%]`
                    );
                }

                // combinators or pseudo-only selectors
                if (part.startsWith(':')) return part;

                return scopeSimpleSelector(part);
            })
            .join(' ');
    }

}

function scopeSimpleSelector(sel: string) {
    // split before pseudo
    const match = sel.match(/^([^:]+)(.*)$/);

    if (!match) return sel;

    const [, base, pseudo] = match;

    return `${base}[_ngcontent-%COMP%]${pseudo}`;
}
