import {enterView, leaveView, runtime, TNode, UPDATE} from "./core";
import { isDirectiveHost} from "./element";
import {getLView, getSelectedIndex, getTView} from "./state";
import {getNativeByTNode} from "../common";

// i0.ɵɵproperty("bind", ctx.name);
export function ɵɵproperty<T>(
    propName: string,
    value: T,
) {
    const lView = runtime.currentLView!;
    const tView = lView.tView;
    const tNode = tView.data[runtime.selectedIndex] as TNode

    lView.data[tNode.index][propName] = value;

    if (isDirectiveHost(tNode)) {

        const childLView = lView.instances[runtime.selectedIndex];
        childLView.context[propName] = value as string;

        enterView(childLView);
        childLView.tView.template(UPDATE, childLView.context);
        leaveView()
    }

}

export function ɵɵclassProp(
    className: string,
    value: boolean | undefined | null,
) {

    checkStylingProperty(className, value, null, true);

}

export function ɵɵstyleProp(
    prop: string,
    value: string | number | undefined | null,
    suffix?: string | null,
) {

    checkStylingProperty(prop, value, suffix, false);

}

export function ɵɵattribute(
    className: string,
    value: any,
) {

    const lView = getLView();
    const tView = getTView();
    const index = getSelectedIndex();

    const tNode = tView.data[index] as TNode

    const el = getNativeByTNode(tNode, lView) as HTMLElement

    el.removeAttribute(className)
    el.setAttribute(className, value)

}

function checkStylingProperty(
    prop: string,
    value: any,
    suffix: string | undefined | null,
    isClassBased: boolean,
) {
    const lView = getLView();
    const tView = getTView();
    const index = getSelectedIndex();

    const tNode = tView.data[index] as TNode

    const el = getNativeByTNode(tNode, lView) as HTMLElement

    if (isClassBased) {
        if (!value) {
            el.classList.remove(prop);
        } else {
            el.classList.add(prop);
        }
    } else {
        el.style.setProperty(prop, value)
    }

}
