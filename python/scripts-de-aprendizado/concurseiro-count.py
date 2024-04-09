respostas = []

print("Por favor, vá digitando V para (acertos) ou X para (erros) de forma equivalente às suas respostas.\n(Digite 'FIM' sem aspas para encerrar e descobrir o seu resultado):")
while True:
    resposta = input("> ").upper()  # Convertendo a resposta para maiúsculas para garantir consistência
    if resposta == "FIM":
        break  # Se o usuário digitar 'FIM', o loop é interrompido
    elif resposta not in ['V', 'X']:
        print("Resposta inválida. Por favor, digite 'V' para acerto ou 'X' para erro.")
    else:
        respostas.append(resposta)  # Adiciona a resposta à lista

acertos = respostas.count("V")
erros = respostas.count("X")
total_questoes = len(respostas)

porcentagem_acertos = (acertos / total_questoes) * 100 if total_questoes > 0 else 0

print("Total de questões respondidas:", total_questoes)
print("Número de acertos:", acertos)
print("Número de erros:", erros)
print("Porcentagem de acertos:", porcentagem_acertos, "%")
