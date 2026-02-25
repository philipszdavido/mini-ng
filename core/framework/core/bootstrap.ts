import {
  LView,
  enterView,
  leaveView,
  TView,
  ComponentDef,
  CssSelector,
  Type, TViewType, TNode, runtime
} from "./core";
import { DefaultDomRenderer2 } from "./browser";
import { setupZone } from "./zone";
import {getUniqueLViewId, LViewFlags} from "./type";
import {detectChanges} from "./change_detection";
import {createTView} from "./shared";
import {RenderFlags} from "./render_flags";

function locateHostElement(
  renderer,
  elementOrSelector,
  encapsulation,
  injector,
) {
  const preserveContent = true;
  const rootElement = renderer.selectRootElement(
    elementOrSelector,
    preserveContent,
  );
  return rootElement;
}

export function createElementNode(
  renderer: DefaultDomRenderer2,
  name: string,
  namespace: string | null,
): any {
  return renderer.createElement(name, namespace);
}

export function bootstrapApplication(component: any) {
  const componentDef = component.ɵcmp;
  const componentInstance = component.ɵfac();

  const elementName = componentDef.selectors[0][0] || "div";

  const rootSelectorOrNode = componentDef.selectors[0][0];

  const hostRenderer = new DefaultDomRenderer2(window.document);

  const hostElement = rootSelectorOrNode
    ? locateHostElement(
        hostRenderer,
        rootSelectorOrNode,
        null,
        null,
      )
    : createElementNode(hostRenderer, elementName, "");

  // we need to root TView
  const rootTView = createRootTView(rootSelectorOrNode, componentDef, undefined);
  rootTView.template = componentDef.template

  const templateFn = rootTView.template

  const lView: LView = {
    flags: undefined,
    id: 0,
    tView: rootTView,
    data: [],
    instances: [],
    parent: null,
    host: hostElement,
    context: componentInstance,
    context_value: null,
    queries: null
  };

  setupZone(() => {
    tick();
  });

  enterView(lView);

  templateFn(RenderFlags.CREATE, componentInstance);

  rootTView.firstCreatePass = false;

  // First update pass
  templateFn(RenderFlags.UPDATE, componentInstance);

  leaveView();

  enterView(lView);

}

function extractAttrsAndClassesFromSelector(selector: CssSelector) {
  return [];
}

function createRootTView(
    rootSelectorOrNode: any,
    componentDef: ComponentDef<unknown>,
    directives: (Type<unknown>)[] | undefined,
): TView {
  const tAttributes = rootSelectorOrNode
      ? ['mini-ng-version', '0.0.0-PLACEHOLDER']
      :  extractAttrsAndClassesFromSelector(componentDef.selectors[0]);
  let varsToAllocate = 0;

  // const directivesToApply: DirectiveDef<unknown>[] = [componentDef];

  const rootTView = createTView(
      TViewType.Root,
      null,
      null,
      1,
      varsToAllocate,
      componentDef.directiveDefs,
      [tAttributes],
      null
  );

  return rootTView;
}

export function createLView<T>(
    parentLView: LView | null,
    tView: TView,
    context: T | null,
    flags: LViewFlags,
    host: any | null,
    tHostNode: TNode | null,
): LView {

  const lView: LView = {
    context,
    context_value: undefined,
    data: [],
    host,
    instances: [],
    parent: parentLView,
    queries: undefined,
    tView,
    flags: flags |
        LViewFlags.CreationMode |
        LViewFlags.Attached |
        LViewFlags.FirstLViewPass |
        LViewFlags.Dirty |
        LViewFlags.RefreshView,
    id: getUniqueLViewId(),
  }

  return lView as LView;
}

function tick() {
  let rootLView = runtime.currentLView as LView;
  detectChanges(rootLView);
}
