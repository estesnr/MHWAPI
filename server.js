const express = require('express')
const app = express()
const PORT = 8000

const monsters = {
'anjanath' : {
    "name" : 'Anjanath',
    "type" : 'Brute Wyvern',
    "weakness" : ["Water***", 'Thunder**', 'Ice**']
},
'tobi-kadachi' : {
    'name' : "Tobi-Kadachi",
    'type' : 'Fanged Wyvern',
    'weakness' : ['Water***', 'Fire**', 'Ice**']
},
'rathian' : {
    'name' : 'Rathian',
    'type' : 'Flying Wyvern',
    'weakness' : ['Dragon***', 'Thunder**']
},
'rathalos' : {
    'name' : 'Rathalos',
    'type' : 'Flying Wyvern',
    'weakness' : ['Dragon***', 'Thunder**', 'Water*', 'Ice*']
},
'unknown' : {
    'name' : 'unknown',
    'type' : 'unknown',
    'weakness' : 'unknown'
}
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(monsters)
})

app.get('/api/:monst', (req, res) => {
    const monstName = request.params.name.toLowerCase()
    if(monsters[monstName]) {
        res.json(monsters[monstName])
    }
    else {
        res.json(monsters['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})