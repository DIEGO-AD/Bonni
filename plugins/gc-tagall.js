let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐁𝐮𝐞𝐧𝐨𝐬 𝐃𝐢́𝐚𝐬 / 𝐓𝐚𝐫𝐝𝐞𝐬 / 𝐍𝐨𝐜𝐡𝐞𝐬... 🤗🤗: ${pesan}`
let teks = `🤡 BOT JUAN  LES INVOCA 💀, 𝐍𝐎 𝐒𝐄𝐀𝐍 𝐏𝐋𝐀𝐍𝐓𝐈𝐓𝐀𝐒 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🥷🏻  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐁𝐨𝐭 𝐃𝐞 𝐉𝐮𝐚𝐧`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
