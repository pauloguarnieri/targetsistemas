function fibonacci(pos) {
    let first = 0
    let second = 1
    let soma = 0
    if (pos === 0 || pos === 1) {
        return 0
    }
    if (pos === 2) {
        return 1
    } else {
        for (let i = 1; i < pos; i++) {
            soma = add(first, second)
            first = second
            second = soma
        }
    } return soma
}



//receber um numero e ver se ele pertence a sequencia fibonacci
// calcular a sequencia ate que obtenha um numero > ou igual o numero recebido