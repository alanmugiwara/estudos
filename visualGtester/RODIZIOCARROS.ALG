Algoritmo "RodizioCarros"

var
   placa, ultimoDigito : Caracter
Inicio
   Escreva("Digite o último dígito da placa do veículo: ")
   Leia(placa)

   ultimoDigito <-placa

   Escolha ultimoDigito
   Caso "1", "2"
      Escreva("O veículo pode circular às segundas-feiras.")
   Caso "3", "4"
      Escreva("O veículo pode circular às terças-feiras.")
   Caso "5", "6"
      Escreva("O veículo pode circular às quartas-feiras.")
   Caso "7", "8"
      Escreva("O veículo pode circular às quintas-feiras.")
   Caso "9", "0"
      Escreva("O veículo pode circular às sextas-feiras.")
   outroCaso
      Escreva("  Dígito inválido, Por favor, insira um dígito de 0 a 9.")
   FimEscolha
FimAlgoritmo