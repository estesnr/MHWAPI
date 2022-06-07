const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const monsters = {
'anjanath' : {
    "name" : 'Anjanath',
    "type" : 'Brute Wyvern',
    "weakness" : [{'element' : "Water***"}, {'element':'Thunder**'}, {'element' :'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F2%2F29%2FMHW-Render_Anjanath_001.png%2Frevision%2Flatest%3Fcb%3D20171118105044%26path-prefix%3Des&f=1&nofb=1'
},
'tobi-kadachi' : {
    'name' : "Tobi-Kadachi",
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element':'Water***'}, {'element':'Fire**'}, {'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Ff%2Ff9%2FMHW-Render_Tobi-Kadachi.png%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20171012202936%26path-prefix%3Des&f=1&nofb=1'
},
'rathian' : {
    'name' : 'Rathian',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Dragon***'}, {'element':'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2F8%2F84%2FMHW-Rathian_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180201020034&f=1&nofb=1'
},
'rathalos' : {
    'name' : 'Rathalos',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Dragon***'}, {'element':'Thunder**'}, {'element':'Water*'}, {'element':'Ice*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F3%2F34%2FMHW-Render_Rathalos_001.png%2Frevision%2Flatest%3Fcb%3D20171118104211%26path-prefix%3Des&f=1&nofb=1'
},
'deviljho' : {
    'name' : 'Deviljho',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element':'Fire**'}, {'element':'Water**'}, {'element':'Thunder***'}, {'element':'Ice*'}, {'element':'Dragon***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2Fc%2Fcb%2FMHW-Deviljho_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180105132807&f=1&nofb=1'
},
'dodogama' : {
    'name' : 'Dodogama',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element':'Thunder***'}, {'element':'Water**'}, {'element':'Ice**'}, {'element':'Dragon*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F7%2F7c%2FMHW-Render_Dodogama.png%2Frevision%2Flatest%3Fcb%3D20180112173353%26path-prefix%3Des&f=1&nofb=1'
},
'diablos' : {
    'name' : 'Diablos',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Ice***'}, {'element':'Dragon**'}, {'element':'Water**'}, {'element':'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2F7%2F75%2FMHW-Diablos_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180201140345%26path-prefix%3Dfr&f=1&nofb=1'
},
'legiana' : {
    'name' : 'Legiana',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Thunder***'}, {'element':'Fire**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F1%2F1f%2FMHW-Render_Legiana.png%2Frevision%2Flatest%3Fcb%3D20171112153522%26path-prefix%3Des&f=1&nofb=1'
},
'bazelguese' : {
    'name' : 'Bazelgeuse',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element' : 'Thunder***'}, {'element' : 'Dragon**'}, {'element' : 'Ice**'}, {'element' : 'Water*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmonsterhunterworld.wiki.fextralife.com%2Ffile%2FMonster-Hunter-World%2Fmhw-bazelgeuse_render_001.png&f=1&nofb=1'
},
'odogaron' : {
    'name' : 'Odogaron',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Ice***'}, {'element' : 'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F3%2F3b%2FMHW-Render_Odogaron.png%2Frevision%2Flatest%3Fcb%3D20171111202848%26path-prefix%3Des&f=1&nofb=1'
},
'paolumu' : {
    'name' : 'Paolumu',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element' : 'Fire***'}, {'element' : 'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmonsterhunterworld.wiki.fextralife.com%2Ffile%2FMonster-Hunter-World%2Fmhw-paolumu_render_001.png&f=1&nofb=1'
},
'jyuratodus' : {
    'name' : 'Jyuratodus',
    'type' : 'Piscine Wyvern',
    'weakness' : [{'element' : 'Thunder***(no mud)'}, {'element' : 'Water***(with mud)'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F6%2F62%2FMHW-Render_Jyuratodus.png%2Frevision%2Flatest%3Fcb%3D20171117232545%26path-prefix%3Des&f=1&nofb=1'
},
'barroth' : {
    'name' : 'Barroth',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element' : 'Water***(with mud)'}, {'element' : 'Fire***(no mud)'}, {'element' : 'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2F5%2F56%2FMHW-Barroth_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171012152627%26path-prefix%3Dfr&f=1&nofb=1'
},
'great girros' : {
    'name' : 'Great Girros',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Water***'}, {'element' : 'Fire**'}, {'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2F4%2F4c%2FMHW-Great_Girros_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171112140027&f=1&nofb=1',
},
'great jagras' : {
    'name' : 'Great Jagras',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Fire***'}, {'element':'Thunder**'},{'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterwikiita%2Fimages%2Ff%2Ff5%2FMHW-Great_Jagras_Render_001.png%2Frevision%2Flatest%3Fcb%3D20190907110251%26path-prefix%3Dit&f=1&nofb=1',
},
'kulu ya ku' : {
    'name' : 'Kulu Ya Ku',
    'type' : 'Bird Wyvern',
    'weakness' : [{'element':'Fire**'},{'element':'Ice**'},{'element':'Water***'},{'element':'Thunder**'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Fb%2Fb4%2FMHW-Render_Kulu-Ya-Ku.png%2Frevision%2Flatest%3Fcb%3D20171117144422%26path-prefix%3Des&f=1&nofb=1',
},
'lavasioth' : {
    'name' : 'Lavasioth',
    'type' : 'Piscine Wyvern',
    'weakness' : [{'element' : 'Water***(**When hardened)'},{'element':'Thunder**(not Hardened)'},{'element':'Ice**(not Hardened)'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-lavasioth_render_001.png',
},
'pukei pukei' : {
    'name' : 'Pukei Pukei',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Thunder***'},{'element':'Fire**'},{'element':'Ice**'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-pukei-pukei_render_001.png'
},
'radobaan' : {
    'name' : 'Radobaan',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element' : 'Dragon***'},{'element':'Ice**'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-radobaan_render_001.png'
},
'tzitzi-ya-ku' : {
    'name' : 'Tzitzi-Ya-Ku',
    'type' : 'Bird Wyvern',
    'weakness' : [{'element':'Fire**'},{'element':'Water**'},{'element':'Thunder***'},{'element':'Ice***'},{'element':'Dragon**'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-tzitzi-ya-ku_render_001.png'
},
'uragaan' : {
    'name' : 'Uragaan',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element':'Water***'},{'element':'Ice**'},{'element':'Dragon**'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-uragaan_render_001.png',
},
'unknown' : {
    'name' : 'unknown',
    'type' : 'unknown',
    'weakness' : 'unknown',
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.downloadclipart.net%2Flarge%2Fcthulhu-png-transparent-background.png&f=1&nofb=1'
}
}

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(monsters)
})

app.get('/api/:monst', (req, res) => {
    const monstName = req.params.monst.toLowerCase()
    if(monsters[monstName]) {
        res.json(monsters[monstName])
    }
    else {
        res.json(monsters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})