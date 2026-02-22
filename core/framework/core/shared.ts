import {
    ComponentDef,
    CssSelector,
    DirectiveDef,
    getComponentDef,
    getDirectiveDef,
    TNode,
    TView,
    Type,
    TAttributes,
    LView, TViewType
} from "./core";
import {AttributeMarker} from "./attribute_marker";
import {createTView} from "./bootstrap";

export function findDirectiveDefMatches(
    tView: TView,
    tNode: TNode,
): any[] | null {

    const registry = tView.directiveRegistry;
    let matches: any[] | null = null;
    if (registry) {
        for (let i = 0; i < registry.length; i++) {
            const def = registry[i];
            if (isNodeMatchingSelectorList(tNode, def.selectors!, false)) {
                matches ??= [];

                if (isComponentDef(def)) {

                    matches.unshift(def);
                } else {
                    matches.push(def);
                }
            }
        }
    }

    return matches;
}

export function isNodeMatchingSelectorList(
    tNode: TNode,
    selector: any[],
    isProjectionMode: boolean = false,
): boolean {
    for (let i = 0; i < selector.length; i++) {
        if (isNodeMatchingSelector(tNode, selector[i], isProjectionMode)) {
            return true;
        }
    }

    return false;
}

export function isComponentDef<T>(def: any) {
    return !!(def).template;
}

function isNodeMatchingSelector(tNode: TNode,
                                selector: any[],
                                isProjectionMode: boolean = false,) {

    const tNodeSelector = tNode.value;
    const nodeAttrs = tNode.attrs;

    for (let i = 0; i < selector.length; i++) {
        const currentSelector = selector[i]

        if (currentSelector === tNodeSelector) {
            return true;
        }

        if (!nodeAttrs) {
            return false;
        }

        for (let nodeAttrIndex = 0; nodeAttrIndex < nodeAttrs.length; nodeAttrIndex++) {
            const nodeAttr = nodeAttrs[nodeAttrIndex];

            if (Array.isArray(nodeAttr)) {
                if (nodeAttr[0].toString().toLowerCase() === currentSelector.toLowerCase()) {
                    return true;
                }
            }
        }

    }

    return false

}

export function extractDirectiveDef(type: Type<any>): DirectiveDef<any> | ComponentDef<any> | null {
    return getComponentDef(type) || getDirectiveDef(type);
}

function getNameOnlyMarkerIndex(nodeAttrs: TAttributes) {
    for (let i = 0; i < nodeAttrs.length; i++) {
        const nodeAttr = nodeAttrs[i];
        if (isNameOnlyAttributeMarker(nodeAttr)) {
            return i;
        }
    }
    return nodeAttrs.length;
}

export function isNameOnlyAttributeMarker(marker: string | AttributeMarker | CssSelector) {
    return (
        marker === AttributeMarker.Bindings ||
        marker === AttributeMarker.Template ||
        marker === AttributeMarker.I18n
    );
}

export function allocExpando(
    tView: TView,
    lView: LView,
    numSlotsToAlloc: number,
    initialValue: unknown,
): number {
    if (numSlotsToAlloc === 0) return -1;
    const allocIdx = lView.directive_instances.length;
    for (let i = 0; i < numSlotsToAlloc; i++) {
        lView.directive_instances.push(initialValue);
        // tView.blueprint.push(initialValue);
        tView.directives.push(null);
    }
    return allocIdx;
}


export function getOrCreateComponentTView(def: ComponentDef<any>): TView {
    const tView = def.tView;

    if (tView === null) {

        const declTNode = null;

        return (def.tView = createTView(
            TViewType.Component,
            declTNode,
            def.template,
            def.decls,
            def.vars,
            def.directiveDefs,
            def.consts,
            def.id,
        ));
    }

    return tView;
}
