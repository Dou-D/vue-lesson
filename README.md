`shamefully-hoist=true`使`node_modules`扁平
化

minimist
拿到命令行参数

esbuild

`fileURLToPath`获取命令行参数-查看当前文件目录（绝对路径）

`__filename`获取文件路径（绝对路径）
`__dirname`获取文件目录（绝对路径）  

打印的`require`
<img src="https://github.com/Dou-D/vue-lesson/raw/main/scripts/assets/images/require.jpg"/>  
访问 require 的属性

### 访问 `require` 的属性

1. **`require.cache`**:
   ```javascript
   console.log(require.cache);
   ```
   输出一个对象，包含所有已加载的模块及其路径。

2. **`require.extensions`**:
   ```javascript
   console.log(require.extensions);
   ```
   输出一个对象，包含不同文件扩展名及其对应的处理函数。注意：不推荐修改 `require.extensions`，因为这可能导致代码无法在不同版本的 Node.js 上运行。

3. **`require.main`**:
   ```javascript
   if (require.main === module) {
       console.log('This script is the main module.');
   }
   ```

`esm-bundler`: `import`
`esm-browser`: `<script src>`
`cjs`: `require` `module.export`  

`Object.prototype.toString.call()`比typeof更准确
```js

## 判断target是不是对象
console.log(Object.prototype.toString.call("hello")); // [object String]
console.log(Object.prototype.toString.call(123)); // [object Number]
console.log(Object.prototype.toString.call(true)); // [object Boolean]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(function() {})); // [object Function]
console.log(Object.prototype.toString.call(new Date())); // [object Date]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
```
Vue官方`isObject`
```ts
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

```

```bash
pnpm install @vue/shared --workspace --filter @vue/reactivity
```
加上--workspace，在本地仓库中安装依赖

## WeakMap Map
```js
const wm = new WeakMap()
const obj = {}
wm.set(obj, 1)
```
WeakMap保存的键只能是对象类型，而Map保存的键可以是任意类型。WeakMap的键所指向的对象被垃圾回收时，键值对自动消失。

reactive读取缓存必须是同一对象的引用


在代理对象中访问代理对象的属性，需要搭配Reflect