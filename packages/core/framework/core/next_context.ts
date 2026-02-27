import {LView} from "./core";
import {getLView} from "./state";

export function ɵɵnextContext(level: number) {
    const lView = getLView();

    return walkContext(lView, level)

}

function walkContext(lView: LView, level: number): any {
    let current: LView | null = lView.parent;

    for (let i = 0; i < level; i++) {
        if (!current?.parent) {
            throw new Error(`Cannot walk to context level ${level}`);
        }
        current = current.parent;
    }

    return current.context;
}
