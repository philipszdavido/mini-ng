
export type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};

export const enum LViewFlags {
    InitPhaseStateIncrementer = 0b00000000001,
    InitPhaseStateMask = 0b00000000011,
    CreationMode = 1 << 2,
    FirstLViewPass = 1 << 3,
    CheckAlways = 1 << 4,
    HasI18n = 1 << 5,
    Dirty = 1 << 6,
    Attached = 1 << 7,
    Destroyed = 1 << 8,
    IsRoot = 1 << 9,
    RefreshView = 1 << 10,
    HasEmbeddedViewInjector = 1 << 11,
    SignalView = 1 << 12,
    HasChildViewsToRefresh = 1 << 13,
    IndexWithinInitPhaseShift = 14,
    //IndexWithinInitPhaseIncrementer = 1 << IndexWithinInitPhaseShift,
    //IndexWithinInitPhaseReset = (1 << IndexWithinInitPhaseShift) - 1,
}

let uniqueIdCounter = 0;

export function getUniqueLViewId(): number {
    return uniqueIdCounter++;
}
