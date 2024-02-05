let contador = 1;

while (contador < 4) {
  console.log('Executando a iteração ' + contador);
  contador = contador + 1;
}


/*O código não gera um loop infinito porque a condição do while  é contador < 4. 
Enquanto essa condição for verdadeira, o loop continuará executando. Quandocontador atinge o valor de 4, 
a condição torna-se falsa, e o loop é interrompido.

Se o código fosse alterado para while (contador <= 4), então o loop seria executado quatro vezes, 
e o contador chegaria a 5. A diferença entre < e <= na condição do loop é crucial para determinar 
se o valor limite é incluído ou não. O < significa "menor que", enquanto <= significa "menor ou igual a".*/