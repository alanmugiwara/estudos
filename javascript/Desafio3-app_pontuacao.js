//Crie um sistema de pontuação para um jogo. 
//Se a pontuação for maior ou igual a 100, mostre 
//"Parabéns, você venceu!". Caso contrário, 
//mostre "Tente novamente para ganhar.".


alert('Bem vinda! 😍'); 
let points = prompt('Por favor, digite um valor entre 0 e 1000,\napenas números, sem pontos ou vírgulas.\nPara que possamos validar o seu resultado.');
if (points >=1000) {
    alert('Você venceu');
}
else if (points ==990 && points <1000) {
    alert('Nossa, quaaase!');
}
else {
    alert('você perdeu');
}