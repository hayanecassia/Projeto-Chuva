function verMais () {
    const teste = document.getElementById('hidden')
    const verMais = document.getElementById('verMais')

    console.log(teste)

    if(teste.style.display === '') {
        teste.style.display = 'inline'
        verMais.innerText = 'ver menos'
    } else if (teste.style.display === 'none'){
        teste.style.display = 'inline'
        verMais.innerText = 'ver menos'
    } else if (teste.style.display === 'inline'){
        teste.style.display = 'none'
        verMais.innerText = 'ver mais'
        }
}

function criarTopico () {
        const discussoes = document.getElementById('discussoes-inicio')
        const btn = document.getElementById('formulario')

        if(discussoes.style.display === ''){
            discussoes.style.display = 'none'
            btn.style.display = 'inherit'
        }
}
    
function enviado () {
        const formulario = document.getElementById('formulario')
        const confirma = document.getElementById('confirmacao')

        if(formulario.style.display === 'inherit'){
            formulario.style.display = 'none'
            confirma.style.display = 'inherit'
        }
}

function novoTopico() {
        const confirma = document.getElementById('confirmacao')
        const btn = document.getElementById('formulario')

        if (confirma.style.display === 'inherit') {
            confirma.style.display = 'none'
            btn.style.display = 'inherit'
        }
}

const count = document.getElementById('like')

document.querySelector('[data-button-like]').addEventListener('click', function (){
    const num = parseInt(count.textContent) + 1
    count.textContent = num
})

const count1 = document.getElementById('like1')

document.querySelector('[data-button-likee]').addEventListener('click', function (){
    const num = parseInt(count1.textContent) + 1
    count1.textContent = num
})