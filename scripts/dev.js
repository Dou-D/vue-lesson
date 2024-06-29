// 打包packages下的模块

import minimist from 'minimist'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import esbuild from 'esbuild'

const args = minimist(process.argv.slice(2))
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)
const target = args._[0] || 'reactivity' // 打包项目默认reactivity
const format = args.f || 'iife' // 打包格式默认iife-立即执行函数

const entry = resolve(__dirname, `../packages/${target}/src/index.ts`)

esbuild.context({
    entryPoints: [entry],
    outfile: resolve(__dirname, `../packages/${target}/dist/${target}.js`),
    bundle: true, // 相互依赖的包构建到一起
    platform: 'browser',
    sourcemap: true, // 源代码可调试
    format,
    globalName: require(`../packages/${target}/package.json`).buildOptions?.name, // iife打包定义函数名
}).then(ctx => {
    console.log("start dev");
    ctx.watch()
})