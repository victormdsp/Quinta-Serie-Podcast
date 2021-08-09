const cors = require('cors')
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const Users = require('./registro')

app.use(cors())
app.use(express.json());

let id = 0;

const usuarios = [];

app.get("/usuarios", (req,res) => {
    res.json(usuarios);
})

app.get('/',(req,res) => res.send('Hello World'));

app.get('/usuarios/:id', (req,res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id))

    if(!usuario){
        return res.status(404).send('404 | Usuário não encontrado');
    }
    res.send(usuario)
})

app.post('/usuarios', (req,res) => {

    if(!req.body.name || req.body.name < 2){
        return res.status(400).send("400 | Nome inválido")
    }

    const usuario = new Users(id, req.body.name, req.body.senha)
    usuarios.push(usuario);
    id++;

    res.status(200).send(usuario)
    
})

app.put('/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id))

    if(!usuario){
        return res.status(404).send("404 | Usuário não encontrado")
    }

    if(!req.body.name || req.body.name < 2){
        return res.status(400).send("400 | Nome inválido")
    }

    usuario.name = req.body.name
    res.send(usuario)
})
    
app.delete('/usuarios/:id', (req,res) => {
    const usuario = usuarios.find(c => c.id === parseInt(req.params.id))

    if(!usuario){
        return res.status(404).send("404 | Usuário não encontrado")
    }

    const index = usuarios.indexOf(usuario)
    usuarios.splice(index, 1)

    res.send(usuario)
})

app.listen(port, () => console.log(`Exmaple app listening on port ${port}!`))
