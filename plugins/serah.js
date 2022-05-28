let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/serah.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*SERAH LU *', 'status@broadcast')
}

handler.customPrefix = /^(bacot|berisik|serah|diem)$/i
handler.command = new RegExp

module.exports = handler
