export function isObject(target: Record<any, any>) {
    return target !== null && typeof target === 'object'
}