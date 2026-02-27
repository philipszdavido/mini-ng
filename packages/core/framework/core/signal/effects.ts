import {activeEffect} from "./signal";

export function effect(fn: () => void) {
    const wrappedEffect = () => {
        // activeEffect = wrappedEffect;
        fn();
        // activeEffect = null;
    };

    wrappedEffect();
}

// ⚡ Pro-Level Improvement (Avoid CD Storm)

let scheduled = false;

function scheduleCD(callbackfn: () => void) {
    if (!scheduled) {
        scheduled = true;

        Promise.resolve().then(() => {
            scheduled = false;
            callbackfn();
        });
    }
}
