import Api from './api.js'
import config from '#@/config'

export default new Api('https://openexchangerates.org/api', {
    headers: {
        ...Api.defaultHeaders,
        'Authorization': `Token ${config.openExchangeRates.appId}`,
    },
})
