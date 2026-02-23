import {AttributeMarker} from "./attribute_marker";
import {
    ComponentDef,
    CREATE,
    DirectiveDef,
    enterView,
    leaveView,
    LView,
    NameSpace,
    runtime,
    TNode,
    TNodeFlags,
    TNodeType,
    TView,
    TViewType,
    UPDATE
} from "./core";
import {getCurrentParentTNode, setCurrentTNode} from "./state";
import { isComponentDef} from "./shared";
import {createDirectivesInstances, resolveDirectives} from "./directive";
import {renderView} from "./change_detection";

const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
const SVG_NS = "http://www.w3.org/2000/svg";

export function ɵɵelementStart(index: number, tag: string, attrsIndex?: number | null,) {
    const lView = runtime.currentLView!;
    const tView = lView.tView;

    let el = lView.data[index];

    // get or create tNode
    let tNode: TNode

    if (tView.data[index]) {
        tNode = tView.data[index] as TNode;
    } else {
        const parentNode = getCurrentParentTNode();
        tNode = createTNode(index, tag, TNodeType.Element, null, parentNode, null);
        tView.data[index] = tNode;
    }

    setCurrentTNode(tNode, true)

    if (tView.firstCreatePass) {

        if (tag.toLowerCase() == "svg") {
            runtime.currentNamespace = NameSpace.SvgNameSpace
        }

        if (runtime.currentNamespace == NameSpace.SvgNameSpace) {
            el = document.createElementNS(SVG_NS, tag);
        } else {
            el = document.createElement(tag);
        }

        lView.data[index] = el;

        // set styles
        if (attrsIndex !== undefined && attrsIndex >= 0) {
            // get consts
            const attrArray = tView.consts[attrsIndex];
            tNode.attrs = attrArray;
            for (let i = 0; i < attrArray.length; i++) {

                const attr = attrArray[i];
                const attribute = attr[0];

                if (attribute == AttributeMarker.Styles) {
                    (el as HTMLElement).setAttribute("style", attr[1]);
                } else if (attribute == AttributeMarker.Classes) {
                    (el as HTMLElement).setAttribute("class", attr[1]);
                } else if (attribute == AttributeMarker.Bindings) {

                } else if (attribute == AttributeMarker.Template) {

                } else {
                    (el as HTMLElement).setAttribute(attribute, attr[1]);
                }
            }
        }

        const id = lView.tView?.id;

        const id_value = "_ngcontent-" + id;
        (el as HTMLElement).setAttribute(id_value, id_value);

    }

    let matchedDirectiveDefs = resolveDirectives(tNode, tView, lView)

    appendChild(el, lView, tView, runtime.currentTNode.parent)

    // check the tag is a component
    // search in tview directive registry

    if (isDirectiveHost(tNode)) {
        createDirectivesInstances(tNode, tView, lView)
        renderComponent(matchedDirectiveDefs[tNode.componentOffset], tView, el, lView, index);
    }

}

export function appendChild(native: Element | any, lView: LView, tView: TView, tNode: TNode) {

    if (tNode == null) {

        if (tView.type == TViewType.Embedded) {
            // we use insertBefore
            const anchorNode = lView.host
            const parentNode = anchorNode.parentElement; //lView.parent.host;
            return parentNode.insertBefore(native, anchorNode);

        }

        return lView.host.appendChild(native);
    }

    return lView.data[tNode.index].appendChild(native);

}

export function createTNode(
    index: number,
    tag: string,
    type: TNodeType,
    tView: TView,
    parentNode: TNode,
    attrs: any[] | null,
): TNode {
    let flags = 0;

    return {
        type,
        index: index,
        value: tag,
        tView: tView,
        parent: parentNode,
        flags,
        attrs,
        localNames: null,
        inputs: null,
        outputs: null,
        componentOffset: -1,
        directiveStart: -1,
        directiveEnd: -1,
    }
}

export function ɵɵelementEnd() {

    // if (runtime.currentLView.parent) {
    //     runtime.currentTNode = runtime.currentLView.parent.host;
    // } else {
    //     runtime.currentTNode = runtime.currentLView.host;
    // }

    const tagName = runtime.currentTNode.value;

    if (tagName.toUpperCase() === "SVG") {
        runtime.currentNamespace = NameSpace.None;
    }

    runtime.currentTNode = runtime.currentTNode.parent;

}

function renderComponent(def: DirectiveDef<any>, parentTView: TView, el: any, parent: LView, index: number) {

    if (!def || !isComponentDef(def)) {
        return;
    }

    const componentLView = parent.instances[index]
    const componentInstance = componentLView.context;

    const componentDef = def as ComponentDef<any>;

    const tView = componentLView.tView

    const templateFn = componentDef.template;

    const id_value = "_nghost-" + tView.id;
    (el as HTMLElement).setAttribute(id_value, id_value);

    if (templateFn !== null) {

        if (componentDef.styles) {
            shimCss(componentDef.id, componentDef.styles.join("\n"));
        }

        // First update pass
        renderView(tView, componentLView, componentInstance)

    }

}

// TODO: we don't need to recreate styles everytime
function shimCss(componentIdentifier: string, styleText: string) {

    styleText = styleText.replaceAll(COMPONENT_VARIABLE, componentIdentifier)

    const style = document.createElement("style");
    style.textContent = styleText;
    document.head.appendChild(style);
}

export function isDirectiveHost(tNode: TNode): boolean {
    return (tNode.flags & TNodeFlags.isDirectiveHost) === TNodeFlags.isDirectiveHost;
}
