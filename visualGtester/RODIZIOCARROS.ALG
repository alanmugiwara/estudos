Algoritmo "RodizioCarros"

var
   placa, ultimoDigito : Caracter
Inicio
   Escreva("Digite o �ltimo d�gito da placa do ve�culo: ")
   Leia(placa)

   ultimoDigito <-placa

   Escolha ultimoDigito
   Caso "1", "2"
      Escreva("O ve�culo pode circular �s segundas-feiras.")
   Caso "3", "4"
      Escreva("O ve�culo pode circular �s ter�as-feiras.")
   Caso "5", "6"
      Escreva("O ve�culo pode circular �s quartas-feiras.")
   Caso "7", "8"
      Escreva("O ve�culo pode circular �s quintas-feiras.")
   Caso "9", "0"
      Escreva("O ve�culo pode circular �s sextas-feiras.")
   outroCaso
      Escreva("  D�gito inv�lido, Por favor, insira um d�gito de 0 a 9.")
   FimEscolha
FimAlgoritmo