const con = require('../dao/connect')
const Livros = require('../models/livros')

const teste = (req, res) => {
    res.json("Back-End Respondendo").end()
}

const criar = (req, res) => {
    let livros = new Livros(req.body)
    con.query(livros.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let livros = new Livros(req.params)
    con.query(livros.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let livros = new Livros(req.body)
    con.query(livros.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let livros = new Livros(req.params)
    con.query(livros.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}