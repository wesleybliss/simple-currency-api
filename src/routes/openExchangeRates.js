import Logger from '#utils/logger'
import express from 'express'
import openExchangeRatesApi from '#api/openExchangeRatesApi'

const log = Logger('routes/openExchangeRates')
const router = express.Router()

const root = async (req, res) => {
    
    res.json({
        ok: true,
    })
    
}

const fetchCurrencies = async (req, res) => {
    
    try {
        
        const data = await openExchangeRatesApi.get('currencies.json')
        
        // @todo caching
        
        res.json(data)
        
    } catch (e) {
        
        log.e('fetchCurrencies', e)
        res.sendStatus(500)
        
    }
    
}

router.get('/', root)
router.get('/currencies', fetchCurrencies)

export const rootRouter = router

export default app => app.use('/oer', router)
