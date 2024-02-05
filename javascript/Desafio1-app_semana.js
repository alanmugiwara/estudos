//alert('Boas vindas ao jogo do número secreto'); //Alert exibe mensagem na tela
//let numeroSecreto = 29; //Let declara a variável dentro de um bloco {}
//console.log(numeroSecreto)
//let chute = prompt('Escolha um número entre 1 e 30'); //Prompt equivale ao input - que solicita dados  ao usuário
//Acima estamos determinando que a variável chute recerá o mesmo valor que for atribuído no "prompt"

//LET - Ao usar let, você está restrigindo o escopo da variável ao bloco em que ela é declarada. 
//O escopo de bloco significa que a variável só é acessível dentro do conjunto de chaves {} onde foi definida. 
//Isso ajuda a evitar problemas relacionados à poluição do escopo e fornece maior controle sobre onde a variável pode ser usada.
// =(siginifica RECEBE) e ==(Significa realamente igualdade)

//if (numeroSecreto == chute) {
//    alert('Parabéns! Você descobriu o número secreto! ' + numeroSecreto + '.');
//} else {
//    alert('O número digitado está incorreto. '+ 'O número secreto é ' + numeroSecreto + '!')
//}



alert('Bem vinda! 😍'); 
let diaDeHoje = prompt('Oi, minha coisinha fofa, pode me dizer que dia é hoje?\ndigite apenas letras, por favor.');
if (diaDeHoje == 'sábado'|| diaDeHoje == 'sabado' || diaDeHoje == 'domingo') {
    alert('Bom fim de semana, meu amor!');
} else {
    alert('Boa semana, meu amor!');
}