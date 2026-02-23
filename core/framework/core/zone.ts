export function setupZone(callbackfn: () => void) {
    const originalAdd = EventTarget.prototype.addEventListener;
    const originalRemove = EventTarget.prototype.removeEventListener;

    const listenerMap = new WeakMap<EventListenerOrEventListenerObject, any>();

    EventTarget.prototype.addEventListener = function (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ) {
        if (!listener) {
            return originalAdd.call(this, type, listener, options);
        }

        const wrapped = function (event: Event) {
            try {
                // Call original listener properly
                if (typeof listener === "function") {
                    listener.call(this, event);
                } else if (listener.handleEvent) {
                    listener.handleEvent.call(listener, event);
                }

                // Trigger change detection AFTER event handler
                // callbackfn();
            } catch (e) {
                console.error(e);
            }
        };

        listenerMap.set(listener, wrapped);

        return originalAdd.call(this, type, wrapped, options);
    };

    EventTarget.prototype.removeEventListener = function (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
    ) {
        const wrapped = listenerMap.get(listener) || listener;
        return originalRemove.call(this, type, wrapped, options);
    };

    const originalSetTimeout = window.setTimeout;

    // @ts-ignore
    window.setTimeout = function (callback, delay?, ...args) {
        const wrapped = function () {
            callback.apply(this, args);
            callbackfn();
        };

        return originalSetTimeout(wrapped, delay);
    };

    const originalThen = Promise.prototype.then;

    Promise.prototype.then = function (onFulfilled, onRejected) {
        const wrappedFulfilled = onFulfilled
            ? (value) => {
                const result = onFulfilled(value);
                callbackfn();
                return result;
            }
            : undefined;

        const wrappedRejected = onRejected
            ? (reason) => {
                const result = onRejected(reason);
                callbackfn();
                return result;
            }
            : undefined;

        return originalThen.call(this, wrappedFulfilled, wrappedRejected);
    };

}
