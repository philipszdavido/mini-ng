import {getCurrentTNode, getLView} from "../core/state";
import {LView, TNode, Element} from "../core";

export class ElementRef<T = any> {
    public nativeElement: T;

    constructor(nativeElement: T) {
        this.nativeElement = nativeElement;
    }

    static __NG_ELEMENT_ID__: () => ElementRef = injectElementRef;

}

export function injectElementRef(): ElementRef {
    return createElementRef(getCurrentTNode()!, getLView());
}

export function createElementRef(tNode: TNode, lView: LView): ElementRef {
    return new ElementRef(getNativeByTNode(tNode, lView) as Element);
}

export function getNativeByTNode(tNode: TNode, lView: LView): Element {
    // const node = unwrapRNode(lView[tNode.index]);
    return lView.data[tNode.index];
}

export function unwrapRNode(value: LView) {
    // while (Array.isArray(value)) {
    //     value = value[HOST] as any;
    // }
    // return value as RNode;
}
