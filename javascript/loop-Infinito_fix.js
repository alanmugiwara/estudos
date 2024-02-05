let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while (contador > 0) {
    let input = prompt('Digite o número:');
    let numero = parseInt(input);

    // Verifica se a entrada é um número válido
    if (!isNaN(numero)) {
        soma += numero;
        contador--;
    } else {
        alert('Por favor, digite um número válido.');
    }
}

let media = soma / qtdNumeros;

console.log(media);
