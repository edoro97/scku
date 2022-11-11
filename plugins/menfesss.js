// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6283823701518?text=.chat 6283160327945|Hi  Hehehe 🌹', body: 'edོbot By Edo Romadon', thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6283823701518?text=.chat 6283823701518|Hi  Edo Hehehe 🌹', body: 'edོbot By Edo Romadon', thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6283823701518?text=.chat 6283823701518|Hi Edo Hehehe 🌹', body: 'edོbot By Edo Romadon', thumbnail: await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

⬡──⬡─────────⬡──⬡

💌 Pesan : ${pesan}

⬡──⬡─────────⬡──⬡

Maaf Anda Belum Bisa Membalas ke Pengirim`

let aritube = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(), chat1, aritube, '😇Owner', '.owner', 'Owner😇', '.owner', m)
    
    let logs = `BOT AKAN BLOKIR KONTAKMU JIKA?
    
≫ Spam
≫ Chat Aneh Aneh
≫ Ngirim Virtex`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
    conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/41c9ed72b58b97e587185.jpg')).buffer(), logs, haori1, '😇Owner', '.owner', 'Owner😇', '.owner', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess|chat)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
