export var activeEffect: (() => void) | null = null;

export function signal<T>(initial: T) {
    let value = initial;
    const subscribers = new Set<() => void>();

    function getter() {
        if (activeEffect) {
            subscribers.add(activeEffect);
        }
        return value;
    }

    getter.set = (newValue: T) => {
        if (value !== newValue) {
            value = newValue;
            subscribers.forEach(effect => effect());
        }
    };

    return getter;
}

// let currentView = null;

// class Signal {
//     constructor(value) {
//         this.value = value;
//         this.subscribers = new Set();
//     }
//
//     get() {
//         if (currentView) {
//             this.subscribers.add(currentView);
//         }
//         return this.value;
//     }
//
//     set(value) {
//         this.value = value;
//         this.subscribers.forEach(view => {
//             view.dirty = true;
//             schedule(view);
//         });
//     }
// }
