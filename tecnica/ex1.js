function pertenceFibonacci(numero) {
    let a = 0, b = 1, fib = 0;

    if (numero === 0) return true;
    if (numero === 1) return true;

    while (fib < numero) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib === numero;
}

function verificarNumeroFibonacci() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
        const numero = parseInt(input);

        if (isNaN(numero)) {
            console.log('Por favor, informe um número válido.');
        } else {
            if (pertenceFibonacci(numero)) {
                console.log(`${numero} pertence à sequência de Fibonacci.`);
            } else {
                console.log(`${numero} não pertence à sequência de Fibonacci.`);
            }
        }

        rl.close();
    });
}

verificarNumeroFibonacci();
