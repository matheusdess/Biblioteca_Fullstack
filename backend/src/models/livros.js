class Livros {

    constructor(i) {
        this.id = i.id
        this.titulo = i.titulo
        this.autor = i.autor
        this.valor = i.valor
        this.data_emprestimo = i.data_emprestimo
        this.data_prevista = i.data_prevista
        this.data_devolucao = i.data_devolucao
    }

    create() {
        return `INSERT INTO livros VALUE('${this.id}','${this.titulo}','${this.autor}',${this.valor},'${this.data_emprestimo}','${this.data_prevista}','${this.data_devolucao}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM livros`
        else
            return `SELECT * FROM livros WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE livros SET titulo = '${this.titulo}', autor = '${this.autor}', valor = ${this.valor}, data_emprestimo = '${this.data_emprestimo}', data_prevista = '${this.data_prevista}', data_devolucao = '${this.data_devolucao}' WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM livros WHERE id = '${this.id}'`
    }
}

module.exports = Livros 