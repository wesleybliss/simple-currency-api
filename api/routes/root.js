import Logger from '#utils/logger'
import express from 'express'
import pkg from '../../package.json' assert { type: 'json' }

const log = Logger('routes/root')
const router = express.Router()

const root = async (req, res) => {
    
    res.json({
        [pkg.name]: {
            version: pkg.version,
        },
    })
    
}

router.get('/', root)

export const rootRouter = router

export default app => app.use('/', router)
