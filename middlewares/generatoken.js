import jwt from 'jsonwebtoken'

const generatoken = (username, exp) => {
    let tokens
    const tokensecret = process.env.TOKEN_SECRET
    if (username === 'AUTORUN') {
      tokens = jwt.sign({ username }, tokensecret, { expiresIn: '99d' })
    } else {
      tokens = jwt.sign({ username }, tokensecret, { expiresIn: '15m' })
    }
    const timeToExpire = jwt.decode(tokens).exp - Math.floor(Date.now() / 1000)
    return tokens
}

export default generatoken
