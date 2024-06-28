export function isObject(target: unknown) {
    return Object.prototype.toString.call(target) === '[object Object]';
}