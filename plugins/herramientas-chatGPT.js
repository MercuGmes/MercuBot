import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½π° πΏπ΄ππΈπ²πΈπΎπ½ πΎ ππ½π° πΎππ³π΄π½ πΏπ°ππ° πππ°π π»π° π΅ππ½π²πΈπΎπ½ π³π΄ π²π·π°ππΆπΏπ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎπ π³π΄ πΏπ΄ππΈπ²πΈπΎπ½π΄π π πΎππ³π΄π½π΄π*\n*β ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*β ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
m.reply('*[β] π΄ππΏπ΄ππ΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ πΌπ°π½π³πΎ π»πΎ πππ΄ πΌπ΄ πΏπΈπ³πΈπΎ*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[β] π΄πππΎπ, πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler