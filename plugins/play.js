process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let { MessageType } = require('@adiwajshing/baileys')
let yts = require('yt-search')
let fs = require('fs')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, command, text, isPrems, isOwner, DevMode, args, usedPrexi }) => {
conn.play = conn.play ? conn.play : {}
if (!text) throw '*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*#play Good Feeling - Flo Rida*'
try {
let results = await yts(text)
let vid = results.all.find(video => video.seconds < 3600)
let { dl_link, thumb, title, filesize, filesizeF } = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${dl_link}`)).text()
conn.sendFile(m.chat, thumb, 'error.jpg', `
π *ππΈπππ»πΎ:* ${title}
*π πΏπ΄ππΎ:* ${filesizeF}
*π πππ»:* ${vid.url}
*π₯ π³π΄ππ²π°ππΆπ°π:* ${shortUrl}
`.trim(), m, false, { 
contextInfo: { externalAdReply: {
title: 'Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄',
body: 'Β©πππππππ΅ππ‘', 
sourceUrl: `https://github.com/MercuGmes/MercuBot`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})
conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*π ππΈπππ»πΎ:* ${title}
*π πΏπ΄ππΎ:* ${filesizeF}
*π πππ»:* ${vid.url}
`.trim(), m)
} catch {
try {

m.reply(`*[β] π»π° π³π΄ππ²π°ππΆπ° π³π΄π» π°ππ³πΈπΎ / ππΈπ³π΄πΎ π΅π°π»π»πΎ, πΈπ½ππ΄π½ππ°π½π³πΎ π²πΎπ½ πΎπππΎ ππ΄πππΈπ³πΎπ π³π΄ π°ππ³πΈπΎ...*\n\n*ββ ππ΄π²ππ΄ππ³π° πππ΄ πΏππ΄π³π΄ πππ°π π»π° πΎπΏπ²πΈπΎπ½ πΉ π³π΄ π³π΄ππ²π°ππΆπ° πππ°π½π³πΎ π΄π» π²πΎπΌπ°π½π³πΎ*\nβ _#play3 *[texto]*_`)  
let res = await (await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`))    
let json = await res.json()
conn.sendMessage(m.chat, { audio: { url: json.result.audio }, mimetype: 'audio/mp4', fileName: json.result.title + `.mp3`}, {quoted: m})

} catch  {
m.reply('*[β] π΄πππΎπ*')
}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^play2?$/i
module.exports = handler
