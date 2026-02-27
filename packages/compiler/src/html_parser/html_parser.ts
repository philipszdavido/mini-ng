
export class Text {}
export class Comment {}
export class Element {}
export class CDATA {}
export class Document {
    childNodes: ChildNode[]
}

export type ChildNode = Text | Comment | Element | CDATA | Document

export class Node {}

export class HTMLParser {
    parseHTMLString(text: string): Document {
        return;
    }
}
