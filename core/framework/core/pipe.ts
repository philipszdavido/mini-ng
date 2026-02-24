import {Type} from "./core";

export type FactoryFn<T> = {
        <U extends T>(t?: Type<U>): U;
    (t?: undefined): T;
};

export interface PipeDef<T> {
    type: Type<T>;
    readonly name: string;
    factory: FactoryFn<T> | null;
    readonly pure: boolean;
    onDestroy: (() => void) | null;
}

export function ɵɵdefinePipe<T>(pipeDef: {
    name: string;
    type: Type<T>;
    pure?: boolean;
}) {
    return <PipeDef<T>>{
        type: pipeDef.type,
        name: pipeDef.name,
        factory: null,
        pure: pipeDef.pure !== false,
        onDestroy: pipeDef.type.prototype.ngOnDestroy || null,
    };
}
