const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const monsters = {
'anjanath' : {
    "name" : 'Anjanath',
    "type" : 'Brute Wyvern',
    "weakness" : [{'element' : "Water***"}, {'element':'Thunder**'}, {'element' :'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F2%2F29%2FMHW-Render_Anjanath_001.png%2Frevision%2Flatest%3Fcb%3D20171118105044%26path-prefix%3Des&f=1&nofb=1',
    'desc' : 'The Anjanath patrols the Ancient Forest looking for its favorite meal, Aptonoth. This belligerent monster will attack anything without the slightest provocation.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-anjanath_icon.pnggit '
},
'tobi-kadachi' : {
    'name' : "Tobi-Kadachi",
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element':'Water***'}, {'element':'Fire**'}, {'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Ff%2Ff9%2FMHW-Render_Tobi-Kadachi.png%2Frevision%2Flatest%2Fscale-to-width-down%2F640%3Fcb%3D20171012202936%26path-prefix%3Des&f=1&nofb=1',
    'desc' : 'A fanged wyvern that flies among the trees of the Ancient Forest. Its penchant to brush against the ground and the trees as it moves around builds up static electricity within its fur.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tobi-kadachi_icon.png'
},
'rathian' : {
    'name' : 'Rathian',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Dragon***'}, {'element':'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2F8%2F84%2FMHW-Rathian_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180201020034&f=1&nofb=1',
    'desc' : 'A wyvern known as the "Queen of the Land. Terrestrial predator, it overpowers its prey with a venomous tail and powerful legs.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathian_icon.png'
},
'rathalos' : {
    'name' : 'Rathalos',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Dragon***'}, {'element':'Thunder**'}, {'element':'Water*'}, {'element':'Ice*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F3%2F34%2FMHW-Render_Rathalos_001.png%2Frevision%2Flatest%3Fcb%3D20171118104211%26path-prefix%3Des&f=1&nofb=1',
    'desc' : 'The apex monster of the Ancient Forest, also known as the "King of the Skies. A fierce wyvern that descends upon invaders, attacking with its venomous claws and fiery breath.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-rathalos_icon.png'
},
'deviljho' : {
    'name' : 'Deviljho',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element':'Fire**'}, {'element':'Water**'}, {'element':'Thunder***'}, {'element':'Ice*'}, {'element':'Dragon***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2Fc%2Fcb%2FMHW-Deviljho_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180105132807&f=1&nofb=1',
    'desc' : 'A monster that must feed constantly and will devour anything in its path, even feeding on the largest of monsters with its massive jowls.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-deviljho_icon.png'
},
'dodogama' : {
    'name' : 'Dodogama',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element':'Thunder***'}, {'element':'Water**'}, {'element':'Ice**'}, {'element':'Dragon*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F7%2F7c%2FMHW-Render_Dodogama.png%2Frevision%2Flatest%3Fcb%3D20180112173353%26path-prefix%3Des&f=1&nofb=1',
    'desc' : 'A monster that devours rock as its primary diet. The Crystals it devours mix with its saliva to produce explosive minerals that it can spit at its enemies.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-dodogama_icon.png'
},
'diablos' : {
    'name' : 'Diablos',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Ice***'}, {'element':'Dragon**'}, {'element':'Water**'}, {'element':'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2F7%2F75%2FMHW-Diablos_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180201140345%26path-prefix%3Dfr&f=1&nofb=1',
    'desc' : 'The apex monster of the Wildspire Waste. A menacing, territorial beast that lurks underground. Loud noises will cause it to lunge out of the sand in search of prey.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-diablos_icon.png'
},
'legiana' : {
    'name' : 'Legiana',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Thunder***'}, {'element':'Fire**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F1%2F1f%2FMHW-Render_Legiana.png%2Frevision%2Flatest%3Fcb%3D20171112153522%26path-prefix%3Des&f=1&nofb=1',
    'desc' : "The apex monster of the Coral Highlands, whose diet primarily consists of Raphinos. It emits a chilling wind from its body, which dulls its prey's ability to escape.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-legiana_icon.png'
},
'bazelguese' : {
    'name' : 'Bazelgeuse',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element' : 'Thunder***'}, {'element' : 'Dragon**'}, {'element' : 'Ice**'}, {'element' : 'Water*'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmonsterhunterworld.wiki.fextralife.com%2Ffile%2FMonster-Hunter-World%2Fmhw-bazelgeuse_render_001.png&f=1&nofb=1',
    'desc' : 'A nefarious flying wyvern that travels the New World in search of prey. It scatters explosive scales over a wide area to prey on whatever gets caught in the blast',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-bazelgeuse_icon.png'
},
'odogaron' : {
    'name' : 'Odogaron',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Ice***'}, {'element' : 'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F3%2F3b%2FMHW-Render_Odogaron.png%2Frevision%2Flatest%3Fcb%3D20171111202848%26path-prefix%3Des&f=1&nofb=1',
    'desc' : 'A terrifying monster that scours the Rotten Vale for carrion. Its highly aggressive nature means that anything, be it monster or man, is a potential meal.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-odogaron_icon.png'
},
'paolumu' : {
    'name' : 'Paolumu',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element' : 'Fire***'}, {'element' : 'Thunder**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmonsterhunterworld.wiki.fextralife.com%2Ffile%2FMonster-Hunter-World%2Fmhw-paolumu_render_001.png&f=1&nofb=1',
    'desc' : 'Paolumu feast on eggs found in the Coral Highlands. They are able to propel through the air using unique sacs in their bodies, and attack with their extremely hard tails.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-paolumu_icon.png'
},
'jyuratodus' : {
    'name' : 'Jyuratodus',
    'type' : 'Piscine Wyvern',
    'weakness' : [{'element' : 'Thunder***(no mud)'}, {'element' : 'Water***(with mud)'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2F6%2F62%2FMHW-Render_Jyuratodus.png%2Frevision%2Flatest%3Fcb%3D20171117232545%26path-prefix%3Des&f=1&nofb=1',
    'desc' : "A large piscine wyvern that inhabits the swamps of the Wildspire Waste. It uses mud to capture prey, and it's known to battle other monsters over territory.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-jyuratodus_icon.png'
},
'barroth' : {
    'name' : 'Barroth',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element' : 'Water***(with mud)'}, {'element' : 'Fire***(no mud)'}, {'element' : 'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2F5%2F56%2FMHW-Barroth_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171012152627%26path-prefix%3Dfr&f=1&nofb=1',
    'desc' : 'Barroths seek out ants, their favorite snack, and mark their territory with mud. They attack potential rivals with their devastating charging attack.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/MHW-Barroth_Icon.png'
},
'great girros' : {
    'name' : 'Great Girros',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Water***'}, {'element' : 'Fire**'}, {'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2F4%2F4c%2FMHW-Great_Girros_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171112140027&f=1&nofb=1',
    'desc' : 'A monster that scavenges for meals dropped from the Coral Highlands. It acts as the alpha leader of a Girros pack, and sports giant fangs that paralyze its prey.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_girros_icon2.png'
},
'great jagras' : {
    'name' : 'Great Jagras',
    'type' : 'Fanged Wyvern',
    'weakness' : [{'element' : 'Fire***'}, {'element':'Thunder**'},{'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterwikiita%2Fimages%2Ff%2Ff5%2FMHW-Great_Jagras_Render_001.png%2Frevision%2Flatest%3Fcb%3D20190907110251%26path-prefix%3Dit&f=1&nofb=1',
    'desc' : 'The pack leader of the Jagras. When hungry, Great Jagras are known to attack monsters even stronger than themselves. It balloons to unbelievable proportions after swallowing prey.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_icon.png'
},
'kulu ya ku' : {
    'name' : 'Kulu Ya Ku',
    'type' : 'Bird Wyvern',
    'weakness' : [{'element':'Fire**'},{'element':'Ice**'},{'element':'Water***'},{'element':'Thunder**'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Fb%2Fb4%2FMHW-Render_Kulu-Ya-Ku.png%2Frevision%2Flatest%3Fcb%3D20171117144422%26path-prefix%3Des&f=1&nofb=1',
    'desc' : "An odd bird wyvern that has developed limbs capable of carrying weapons. It's been spotted stealing eggs from nests found in the Ancient Forest and Wildspire Waste.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kulu-ya-ku_icon.png'
},
'lavasioth' : {
    'name' : 'Lavasioth',
    'type' : 'Piscine Wyvern',
    'weakness' : [{'element' : 'Water***(**When hardened)'},{'element':'Thunder**(not Hardened)'},{'element':'Ice**(not Hardened)'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lavasioth_render_001.png',
    'desc' : 'Lavasioth utilizes molten lava as armor. They are extremely aggressive and will attack without prejudice until the threat has been eliminated.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lavasioth_icon.png'
},
'pukei pukei' : {
    'name' : 'Pukei Pukei',
    'type' : 'Flying Wyvern',
    'weakness' : [{'element':'Thunder***'},{'element':'Fire**'},{'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2Fe%2Fe3%2FMHW-Pukei-Pukei_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171011151724&f=1&nofb=1',
    'desc' : "A bird wyvern known to possess poisonous toxins in its body. It's been spotted storing scatternuts in its mouth or tail, coating them with poison and spitting them out at threats.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-pukei-pukei_icon.png'
},
'radobaan' : {
    'name' : 'Radobaan',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element' : 'Dragon***'},{'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2Fd%2Fd3%2FMHW-Radobaan_Render_001.png%2Frevision%2Flatest%3Fcb%3D20171112152824&f=1&nofb=1',
    'desc' : 'A gigantic brute wyvern that eats the bones of carcasses found in the Rotten Vale, using some of it as armor. It also rolls into a ball as a form of attack and transportation.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-radobaan_icon.png'
},
'tzitzi-ya-ku' : {
    'name' : 'Tzitzi-Ya-Ku',
    'type' : 'Bird Wyvern',
    'weakness' : [{'element':'Fire**'},{'element':'Water**'},{'element':'Thunder***'},{'element':'Ice***'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdrachen%2Fimages%2Fe%2Fe4%2FMHW-Tzitzi-Ya-Ku.png%2Frevision%2Flatest%3Fcb%3D20171016072016%26path-prefix%3Dde&f=1&nofb=1',
    'desc' : 'This odd monster blinds both prey and enemies with a special pulsing organ near its head. It then uses its strong legs to deliver finishing blows.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-tzitzi-ya-ku_icon2.png'
},
'uragaan' : {
    'name' : 'Uragaan',
    'type' : 'Brute Wyvern',
    'weakness' : [{'element':'Water***'},{'element':'Ice**'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.staticneo.com%2Fw%2Fmonsterhunter%2FUragaan.png&f=1&nofb=1',
    'desc' : "Large Brute Wyverns that feed on ore, using their mighty jaws to crush solid rock to powder. They've been known to confront Lavasioths over territory disputes",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-uragaan_icon.png'
},
'kirin' : {
    'name' : 'Kirin',
    'type' : 'Elder Dragon',
    'weakness' : [{'element' : 'Fire***'}, {'element':'Water**'},{'element':'Ice**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2Ff%2Ff5%2FMHW-Kirin_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180217145445%26path-prefix%3Dfr&f=1&nofb=1',
    'desc' : "Kirin are so rarely sighted that little is known of their ecology. It's been said they envelop themselves in pure electricity when they are provoked. The lightning a Kirin cloaks itself with has been confirmed to toughen its skin. The key to hunting a Kirin lies in staggering it, using Elderseal weapons, and protecting yourself from and avoiding its lightning attacks.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kirin_icon.png'
},
'kulve taroth' : {
    'name' : 'Kulve Taroth',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Water**'},{'element':'Ice***'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Fa%2Fa6%2FMHW-Render_Kulve_Taroth.png%2Frevision%2Flatest%3Fcb%3D20180418212130%26path-prefix%3Des&f=1&nofb=1',
    'desc' : "An Elder Dragon that protects itself with a glittering coat of metal. Its ecology and coat differ with each appearance, thus the need for a thorough investigation. An exhaustive investigation is required in order to break Kulve Taroth's giant gold plated horns. Pursue the monster to learn more about it. Gather tracks and recruit hunters to help you further your investigation",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kulve_taroth_icon.png'
},
'kushala daora' : {
    'name' : 'Kushala Daora',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Thunder***'},{'element':'Dragon**'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmogapedia%2Fimages%2F0%2F00%2FMHW-Kushala_Daora_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180111183557%26path-prefix%3Dfr&f=1&nofb=1',
    'desc' : 'An elder dragon that shields itself with fierce winds, preventing anyone from approaching it. Its skin consists of hard, metallic scales.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-kushala_daora_icon.png'
},
'nergigante' : {
    'name' : 'Nergigante',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Thunder***'},{'element':'Dragon**'}],
    'img' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-nergigante_render_001.png',
    'desc' : 'A terrible elder dragon that appears when other elders are in the vicinity. Its penchant for destruction is well documented.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-nergigante_icon.png'
},
'lunastra' : {
    'name' : 'Lunastra',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Dragon**'},{'element':'Ice***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterwikiita%2Fimages%2F3%2F33%2FMhw-lunastra_render_001.png%2Frevision%2Flatest%3Fcb%3D20191205152624%26path-prefix%3Dit&f=1&nofb=1',
    'desc' : ' A rare female Elder Dragon that litters the air with hot blue dust. Reports of it traveling with her mate, Teostra, are still unconfirmed.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-lunastra_icon2.png'
},
'teostra' : {
    'name' : 'Teostra',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Water***'},{'element':'Ice***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2Fe%2Fe0%2FMHW-Teostra_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180111134020&f=1&nofb=1',
    'desc' : 'A brutal elder dragon wreathed in flames that spits blazing fire. Teostra are of such a fierce and deadly nature that the Guild closely monitors their movements.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-teostra_icon.png'
},
'vaal hazak' : {
    'name' : 'Vaal Hazak',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Fire***'},{'element':'Dragon***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunter%2Fimages%2F5%2F54%2FMHW-Vaal_Hazak_Render_001.png%2Frevision%2Flatest%3Fcb%3D20180214002433&f=1&nofb=1',
    'desc' : 'A grotesque Elder Dragon, that inhabits the deepest part of the Rotten Vale. It uses the fatal vapor of the vale in what appears to be a symbiotic relationship.',
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-vaal_hazak_icon.png'
},
"xeno'jiiva" : {
    'name' : "Xeno'jiiva",
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Poison'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdrachen%2Fimages%2F2%2F23%2FXeno-jiiva.png%2Frevision%2Flatest%3Fcb%3D20180222090546%26path-prefix%3Dde&f=1&nofb=1',
    'desc' : 'A new species discovered in the depths of the Elder’s Recess. Its relationship to the other elder dragons is unclear, as is its ecology.',
    'logo' : "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-xeno'jiiva_icon.png"
},
'zorah magdaros' : {
    'name' : 'Zorah Magdoros',
    'type' : 'Elder Dragon',
    'weakness' : [{'element':'Dragon***'},{'element':'Water***'}],
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmonsterhunterespanol%2Fimages%2Fe%2Fe5%2FMHW-Render_Zorah_Magdaros_001.png%2Frevision%2Flatest%3Fcb%3D20170921144650%26path-prefix%3Des&f=1&nofb=1',
    'desc' : "An elder dragon that rises from the earth like a volcano. Where it's headed, and why, the Research Commission has yet to figure out.",
    'logo' : 'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-zorah_magdaros_icon.png'
},
'unknown' : {
    'name' : 'unknown',
    'type' : 'unknown',
    'weakness' : 'unknown',
    'img' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.downloadclipart.net%2Flarge%2Fcthulhu-png-transparent-background.png&f=1&nofb=1',
    'desc' : 'unknown',
    'logo' : 'unknown',
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
