const jwt = require('jsonwebtoken')
const { publicKey } = require('../configs')

async function verifyToken(req, res, next){
    const token = req.header('auth-token')
    if(!token) return res.status(402).send('Access Denied')
    try{
        const verification = jwt.verify(token, publicKey)
        req.body.email = verification._email
        next()
    } catch {
        res.status(400).send('Invalid Token')
    }
    
}

module.exports = verifyToken