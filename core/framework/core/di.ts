import {getCurrentTNode, getLView} from "./state";

const __NG_ELEMENT_ID__ = "__NG_ELEMENT_ID__"

// Look at current TNode
// Check bloom filter
// Search providers on node
// Search parent injectors
// Search root injector
// Throw if not found

export function ɵɵdirectiveInject<T>(type: any) {
    const lView = getLView();
    const tNode = getCurrentTNode();

    if (type.hasOwnProperty(__NG_ELEMENT_ID__)) {
        return type.__NG_ELEMENT_ID__();
    }

    return new type();

}
