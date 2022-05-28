let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/yatim.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*di katain yatim😔*', 'status@broadcast')
}

handler.customPrefix = /^(yatim|bacot yatim|ytm|yteam)$/i
handler.command = new RegExp

module.exports = handler
