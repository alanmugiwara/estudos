



//###PROBLEMA###

//let porcentagemDesconto = 0;

//if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
//}

//if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
//} else {
    porcentagemDesconto = 0;
//}


//###MINHA RESPOSTA###

let porcentagemDesconto = 0;

if(quantidadeMilhas > 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else if (quantidadeMilhas < 30000 && quantidadeMilhas > 5000) {
    porcentagemDesconto = porcentagemDesconto + 10;
} else { 
    porcentagemDesconto = 0;
}


//###PSEUDO CÓDIGO###

//Defina porcentagemDesconto como 0

//Se quantidadeMilhas for maior que 30000:
//    Defina porcentagemDesconto como 20
//Senão, se quantidadeMilhas for maior que 5000 e menor que 30000:
//    Defina porcentagemDesconto como 10
//Senão:
//    Defina porcentagemDesconto como 0


//###RESPOSTA DO SISTEMA###
//let porcentagemDesconto = 0;

//if(quantidadeMilhas > 30000){
//    porcentagemDesconto = porcentagemDesconto + 20;
//} else {
//    if(quantidadeMilhas > 5000){
//    porcentagemDesconto = porcentagemDesconto + 10;