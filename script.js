// Aparecer digito no display
function inserirDisplay(digito) {
    const display = document.querySelector('#display')
    const ultimoCaracter = display.value.slice(-1)

    // Impede de começar com zero
    if (display.value === 'ERRO') {
        display.value = ''
    }

    // Impede de começar com um operador inválido
    if (display.value === '' && ['+', '-', '*', '/'].includes(digito)) {
        return
    }

    // Impede dois operadores seguidos
    if (['+', '-', '*', '/'].includes(ultimoCaracter) && ['+', '-', '*', '/'].includes(digito)) {
        return
    }
    
    display.value += digito
}

// Realizar cálculo
function calcular(){
    const display = document.querySelector('#display')

    // Impede o calcular com valor vazio
    if (display.value == '') {
        display.value = '0'
    } else {
        try {
            display.value = new Function("return " + display.value)()
        } catch (error) {
            display.value = 'ERRO'
        }
    }
}

// Limpar todos os digitos
function limparTudo() {
    document.querySelector('#display').value = ''
}

// Apagar apenas um digito
function apagar() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}