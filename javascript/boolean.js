 /* Quando você usa o operador de igualdade (==) em JavaScript, ocorre a coerção de tipo 
 (conversão automática de tipos) antes da comparação. No caso de true == "true", o valor booleano true 
 é convertido para a string "true" antes da comparação, e então ambos são considerados iguais.

Então, o processo é o seguinte:

true é convertido para a string "true".
A comparação é realizada entre a string "true" e a string "true".
Como as strings são iguais, a expressão true == "true" avalia para true.
Esse comportamento é uma peculiaridade do operador de igualdade (==) em JavaScript, 
que realiza a coerção de tipo. Se você quiser evitar a coerção de tipo e garantir uma comparação estrita, 
você pode usar o operador de igualdade estrita (===), que leva em conta o valor e o tipo dos operandos. */