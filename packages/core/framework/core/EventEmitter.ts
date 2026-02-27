export class EventEmitter {

    private listener = (any) => {};

    on(fn: (any) => void) {
        this.listener = fn
    }

    emit(data: any) {
        this.listener(data)
    }

    once(fn) {
        const self = this
        function onceFn(data) {
            self.removeEventListener()
            fn(data)
        }
        this.on(onceFn)
    }

    addEventListener(fn) {
        this.on(fn)
    }

    removeEventListener() {
        this.listener = () => {};
    }

}
