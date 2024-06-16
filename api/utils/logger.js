import config from '#@/config'

const logger = name => {
    
    const verbs = [
        'log',
        'info',
        'warn',
        'error',
    ]
    
    const instance = verbs.reduce((acc, it) => ({
        ...acc,
        [it.substring(0, 1)]: (...args) => console[it](`[${config.log.level}]`, name, ...args),
    }), {})
    
    instance.d = instance.l
    
    Object.keys(console).forEach(it => {
        
        if (verbs.includes(it))
            instance[it] = (...args) => console[it](`[${config.log.level}]`, name, ...args)
        else
            instance[it] = console[it]
        
    }, {})
    
    return instance
    
}

export default logger
