const utilHelper = {
  clientIp: (req) => {
    let ip = (req.headers['x-client-wp'] || '') || (req.headers['x-forwarded-for'] || '').split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress
    if (ip.substr(0, 7) === '::ffff:') {
      ip = ip.substr(7)
    }
    return ip
  },
  isJson (item) {
    item = typeof item !== 'string' ? JSON.stringify(item) : item
    try {
      item = JSON.parse(item)
    } catch (e) {
      return false
    }
    if (typeof item === 'object' && item !== null) {
      return true
    }
    return false
  },
  fnValidatePhone (value) {
    let str = value || ''
    str = str.replace(/-/g, '')
    str = str.replace(/ /g, '')
    str = str.replace(/g\?/g, '')
    const phone = /0(6|8|9)\d{8}/g
    const strPhone = (str.match(phone) || []).join('')
    if (strPhone.length !== 10) {
      return false
    } else {
      return true
    }
  },
  fnReplaceSpecialAlphabet (input) {
    const result = input.replace(/[`~%^&*!@#$()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    return result
  }
}

export default utilHelper