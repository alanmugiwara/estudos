#Nesse código o aluno pra ser aprovado
#precisa ter média 7 ou superior
#precisa ter 5 faltas ou menos


media_final = int(input('Escreva o valor numérico da média final do aluno: '))
faltas = int(input('Escreva o número de faltas do aluno: '))

if media_final >= 7 and faltas <= 5:
    print("Aluno aprovado")
    
else:
    print("Aluno reprovado")
