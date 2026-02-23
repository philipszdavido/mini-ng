export function setupZone(callbackfn: () => void) {
    // here, we will patch into the listeners in the DOM
    // we will update the app from the root when an event is dispatched

    const oldListener = window.addEventListener;

    window.addEventListener = (
        type: any,
        listener: (this:Window, ev: any) => any,
        options?: boolean | AddEventListenerOptions) => {

        try {

            oldListener(type, listener, options);

            callbackfn();

        } catch (e) {
            console.error(e);
        }

    };

    const oldDocumentListener = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = (
        // type: string,
        // listener: EventListenerOrEventListenerObject,
        // options?: boolean | AddEventListenerOptions
        ...args
    ) => {

        try {

            const _args = [...args]

            const [type, listener, options] = _args

            // callbackfn();

            _args[1] = callbackfn

            oldDocumentListener.apply(this, _args);

        } catch (e) {
            console.error(e);
        }

    }

}
