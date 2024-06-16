import * as path from 'path'
import { __dirname } from '#@/env'
import { EnvType, env } from '#utils/env'

const config = {
    host: env('HOST', EnvType.String),
    port: env('PORT', EnvType.Int),
    root: path.resolve(__dirname, '..'),
    log: {
        level: env('LOG_LEVEL', EnvType.String),
        events: {
            requests: env('LOG_REQUESTS', EnvType.Boolean, false, true),
        },
    },
    cors: {
        logRequests: env('CORS_LOG_REQUESTS', EnvType.Boolean),
        allowUndefined: env('CORS_ALLOW_UNDEFINED', EnvType.Boolean),
        whitelist: {
            enabled: env('CORS_WHITELIST_ENABLED', EnvType.Boolean),
            file: env('CORS_WHITELIST_FILE', EnvType.String),
        },
    },
    security: {
        tokenSecret: env('TOKEN_SECRET', EnvType.String),
    },
    openExchangeRates: {
        appId: env('OPEN_EXCHANGE_RATES_APP_ID', EnvType.String),
    },
}

export default config
