export function cloneObject(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

export function stripQuotes(value: string): string {
    if (
        (value.startsWith("'") && value.endsWith("'")) ||
        (value.startsWith('"') && value.endsWith('"'))
    ) {
        return value.slice(1, -1);
    }
    return value;
}
