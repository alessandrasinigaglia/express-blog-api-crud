const postsData = require('../data/postsData')

//index
const index = (req, res) => {
    res.send('Lista dei post')
}

//show
const show = (req, res)  => {
    res.send('Dettagli del post')
}

//create
const store = (req, res) => {
    res.send('Creazione nuovo post')
}

//update
const update = (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`)
}

//delete
const destroy = (req, res) => {
    res.send(`Eliminazione del post: ${req.params.id}`)
}

module.exports = { index, show, store, update, destroy }