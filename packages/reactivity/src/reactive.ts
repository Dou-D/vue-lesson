import { isObject } from "@vue/shared"
import { mutableHandlers } from './baseHandlers'
import { ReactiveFlags } from './constants'

export function reactive(target: any) {
    return createReactiveObject(target)
}
/**
 * reactiveMap Proxy缓存 创建出的Proxy放入到WeapMap
 * handler: Proxy(target, handler)
 */
const reactiveMap = new WeakMap()

function createReactiveObject(target: any){
    if(!isObject(target)) {
        throw new Error(`${target} is not a object`)
    }
    // 缓存
    const exitsProxy = reactiveMap.get(target)
    if(exitsProxy) {
        return exitsProxy
    }
    // 防止重复的reactive
    if(Reflect.get(target, ReactiveFlags.IS_REACTIVE)){
        return target
    }
    const proxy = new Proxy(target, mutableHandlers)
    reactiveMap.set(target, proxy)
    return proxy
}