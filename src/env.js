import { fileURLToPath } from 'url'
import * as fs from 'fs'
import * as path from 'path'
import dotenv from 'dotenv'
import pkg from '../package.json' assert { type: 'json' }
import jsconfig from '../jsconfig.json' assert { type: 'json' }

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

if (fs.existsSync(path.join(__dirname, '../.env')))
    dotenv.config({ path: path.resolve(__dirname, '../.env') })

jsconfig.compilerOptions.paths = Object.keys(pkg.imports).reduce((acc, it) => ({
    ...acc,
    [it]: [pkg.imports[it]],
}), {})

fs.writeFileSync('../jsconfig.json',
    JSON.stringify(jsconfig, null, 4), 'utf8')
