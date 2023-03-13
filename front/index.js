const uri = 'http://localhost:3000/livros'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')
const background = document.querySelector('#img')

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(data => montarTabela(data))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "id": cadastro.id.value,
        "titulo": cadastro.titulo.value,
        "autor": cadastro.autor.value,
        "valor": cadastro.valor.value,
        "data_emprestimo": cadastro.data_emprestimo.value,
        "data_prevista": cadastro.data_prevista.value,
        "data_devolucao": cadastro.data_devolucao.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let col6 = document.createElement('td')
        let col7 = document.createElement('td')
        let col8 = document.createElement('td')
        let col9 = document.createElement('td')
        let del = document.createElement('button')
        del.innerHTML = '[-]'
        del.setAttribute('onclick', `excluirItem('${e.id}')`)

        let dataEmp = e.data_emprestimo.split('T')
        let dataPrev = e.data_prevista.split('T')
      

        col1.innerHTML = e.id
        col2.innerHTML = e.titulo
        col3.innerHTML = e.autor
        col4.innerHTML = e.valor
        col5.innerHTML = dataEmp[0]
        col6.innerHTML = dataPrev[0]
        if(e.data_devolucao == null){
            col7.innerHTML = e.data_devolucao
        }else {
            let dataDev = e.data_devolucao.split('T');
            col7.innerHTML = dataDev[0]
        }

        col8.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        linha.appendChild(col7)
        linha.appendChild(col8)
        linha.appendChild(col9)
        corpo.appendChild(linha)
       
    });
}

function excluirItem(i) {
    if (confirm('Valida Exclusao'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}