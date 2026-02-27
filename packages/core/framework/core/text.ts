import {runtime} from "./core";
import {appendChild} from "./element";
import {getCurrentParentTNode} from "./state";

export function ɵɵtext(index: number, value = '') {
    const lView = runtime.currentLView!;
    const tView = lView.tView;

    let text = lView.data[index];

    if (tView.firstCreatePass) {
        text = document.createTextNode(value);
        lView.data[index] = text;
    }

    const parent = getCurrentParentTNode()

    appendChild(text, lView, tView, parent);

}

export function ɵɵtextInterpolate(...args: string[]/*prefix: string, value: any, suffix: string*/) {
    const node = runtime.currentLView.data[runtime.selectedIndex]//runtime.cursor as Text;
    const newValue = args.reduce((pV, cV, index) => pV + cV, '') // prefix + value + suffix;

    if (node.textContent !== newValue) {
        node.textContent = newValue;
    }
}
