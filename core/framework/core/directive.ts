import {ComponentDef, DirectiveDef, LView, runtime, TNode, TNodeFlags, TView, ɵɵdefineComponent} from "./core";
import {allocExpando, findDirectiveDefMatches, getOrCreateComponentTView, isComponentDef} from "./shared";
import {RenderFlags} from "./render_flags";
import {createLView} from "./bootstrap";

export function ɵɵdefineDirective(def: any) {
    return ɵɵdefineComponent(def);
}

export function resolveDirectives(tNode: TNode, tView: TView, lView: LView) {

    const matchedDirectiveDefs = findDirectiveDefMatches(tView, tNode)

    if (matchedDirectiveDefs !== null) {

        initializeDirectives(
            tView,
            lView,
            tNode,
            matchedDirectiveDefs,
            {},
        );

    }

    return matchedDirectiveDefs;

}

function initializeDirectives(
    tView: TView,
    lView: LView,
    tNode: TNode,
    directives: DirectiveDef<unknown>[],
    exportsMap: {[key: string]: number} | null,
) {
    const directivesLength = directives.length;
    let componentDef: ComponentDef<unknown> | null = null;

    for (let i = 0; i < directivesLength; i++) {
        const def = directives[i];
        if (componentDef === null && isComponentDef(def)) {
            // componentDef = def;
            markAsComponentHost(tView, tNode, i);
        }
    }

    if (directivesLength > 0) {
        tNode.directiveToIndex = [];
    }

    (lView.directive_instances ??= []);
    (tView.directives ??= []);

    initTNodeFlags(tNode, tView.directives.length, directivesLength);

    let directiveIdx = allocExpando(tView, lView, directivesLength, null);

    for (let i = 0; i < directivesLength; i++) {
        const def = directives[i];

        if (def.hostBindings !== null /*|| def.hostAttrs !== null || def.hostVars !== 0*/)
            tNode.flags |= TNodeFlags.hasHostBindings;

        lView.directive_instances[directiveIdx] = def;
        tView.directives[directiveIdx] = def;

        directiveIdx++;

    }

}

function markAsComponentHost(tView: TView, hostTNode: TNode, componentOffset: number): void {
    hostTNode.componentOffset = componentOffset;
    (tView.components ??= []).push(hostTNode.index);
}

function initTNodeFlags(tNode: TNode, index: number, numberOfDirectives: number) {
    tNode.flags |= TNodeFlags.isDirectiveHost;
    tNode.directiveStart = index;
    tNode.directiveEnd = index + numberOfDirectives;
}

export function createDirectivesInstances(tNode: TNode, tView: TView, lView: LView) {

    instantiateAllDirectives(tView, lView, tNode);
    if ((tNode.flags & TNodeFlags.hasHostBindings) === TNodeFlags.hasHostBindings) {
        invokeDirectivesHostBindings(tView, lView, tNode);
    }

    // for (let i = 0; i < tNode.directiveToIndex.length; i++) {
    //     const type = tNode.directiveToIndex[i];
    //     const dirInstance = type.ɵfac()
    //
    //     if (tNode.flags & TNodeFlags.hasHostBindings) {
    //         type.ɵdir.hostBindings(RenderFlags.CREATE, dirInstance)
    //         // type.ɵdir.hostBindings(RenderFlags.UPDATE, dirInstance)
    //     }
    // }
}

function instantiateAllDirectives(tView: TView, lView: LView, tNode: TNode) {

    const start = tNode.directiveStart;
    const end = tNode.directiveEnd;

    if (isComponentHost(tNode)) {

        const native = (lView.data[tNode.index]);

        const compInstance = null
        const compTView = getOrCreateComponentTView(tView.directives[start + tNode.componentOffset] as ComponentDef<any>)
        let compLView = createLView(lView, compTView, compInstance, null, native, null);
        lView.instances[tNode.index] = compLView;

    }

    for (let i = start; i < end; i++) {

        const def = tView.directives[i] as DirectiveDef<any>;
        const directiveInstance = def.type['ɵfac']();
        lView.directive_instances[i] = directiveInstance;

        if (isComponentDef(def)) {
            const componentView = lView.instances[tNode.index];
            componentView.context = directiveInstance;
        }


    }

}

export function invokeDirectivesHostBindings(tView: TView, lView: LView, tNode: TNode) {
    // const start = tNode.directiveStart;
    // const end = tNode.directiveEnd;
    const elementIndex = tNode.index;
    // const currentDirectiveIndex = getCurrentDirectiveIndex();
    try {
        setSelectedIndex(elementIndex);
        for (let dirIndex = 0; dirIndex < tNode.directiveToIndex.length; dirIndex++) {
            const def = tView.directives[dirIndex] as DirectiveDef<unknown>;
            const directive = lView.directive_instances[dirIndex];
            // setCurrentDirectiveIndex(dirIndex);
            if (def.hostBindings !== null /*|| def.hostVars !== 0 || def.hostAttrs !== null*/) {
                invokeHostBindingsInCreationMode(def, directive);
            }
        }
    } finally {
        setSelectedIndex(-1);
        // setCurrentDirectiveIndex(currentDirectiveIndex);
    }

}

export function isComponentHost(tNode: TNode): boolean {
    return tNode.componentOffset > -1;
}

export function setSelectedIndex(index: number) {
    runtime.selectedIndex = index
}

export function invokeHostBindingsInCreationMode(def: DirectiveDef<any>, directive: any) {
    if (def.hostBindings !== null) {
        def.hostBindings!(RenderFlags.CREATE, directive);
    }
}
