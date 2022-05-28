let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/sesat.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sesat sesat*', 'status@broadcast')
}

handler.customPrefix = /^(bokep|hentai|ngentod|ngntd)$/i
handler.command = new RegExp

module.exports = handler
