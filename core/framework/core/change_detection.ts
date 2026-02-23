import {CREATE, enterView, leaveView, LView, TNode, TView, UPDATE} from "./core";
import {invokeDirectivesHostBindings, processHostBindingOpCodes} from "./shared";
import {setCurrentTNode} from "./state";

export function renderView(tView: TView, lView: LView, ctx: any) {

    const templateFn = tView.template

    enterView(lView);

    if (tView.firstCreatePass) {
        templateFn(CREATE | UPDATE, ctx);
        tView.firstCreatePass = false;
    } else {
        templateFn(UPDATE, ctx);
    }

    leaveView();
}

export function detectChanges(lView: LView) {
    refreshView(lView);

    for (const child of lView.instances) {
        if (!child) continue
        detectChanges(child);
    }
}

function refreshView(lView: LView) {
    const tView = lView.tView;
    const template = tView.template;

    enterView(lView)

    template(UPDATE, lView.context);

    // update directives
    for (let i = 0; i < tView.data.length; i++) {
        const tNode = tView.data[i] as TNode;
        if (!tNode) continue;
        processHostBindingOpCodes(tView, lView, tNode);
    }

    leaveView();

}

