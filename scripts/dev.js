// 打包packages下的模块

import minimist from 'minimist'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const args = minimist(process.argv.slice(2))
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const target = args._[0] || 'reactivity' // 打包项目默认reactivity
const format = args.f || 'iife' // 打包格式默认iife-立即执行函数