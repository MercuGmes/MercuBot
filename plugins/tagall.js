let handler = async(m, { conn, text, participants }) => {
let teks = `*|βββͺγ πΈπ½ππΎπ²π°π½π³πΎ πΆπππΏπΎ γβͺββ|*\n\nβ² *πΌπ΄π½ππ°πΉπ΄:* ${text ? text : 'πππ πππππππ'}\n\n`
for (let mem of participants) {
teks += `ΰΏβ‘οΈ @${mem.id.split('@')[0]}\n` }
teks += `\nβ Β©MercuBot β`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
