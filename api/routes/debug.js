import Logger from '#utils/logger'
import express from 'express'

const log = Logger('routes/debug')
const router = express.Router()

router.get('/', (req, res) => {
    
    res.json({ debug: true })
    
})

export default app => app.use('/debug', router)
