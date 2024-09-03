function contarLetraA(texto) {
    const textoLower = texto.toLowerCase();
    const correspondencias = textoLower.match(/a/g);
    return correspondencias ? correspondencias.length : 0;
}

function verificarLetraA() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe uma string para verificar a ocorrência da letra "a": ', (input) => {
        const quantidade = contarLetraA(input);

        if (quantidade > 0) {
            console.log(`A letra "a" ocorre ${quantidade} vez(es) na string.`);
        } else {
            console.log('A letra "a" não ocorre na string.');
        }

        rl.close();
    });
}

verificarLetraA();
