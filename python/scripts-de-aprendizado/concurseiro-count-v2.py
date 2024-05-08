def obter_respostas():
  """Coleta as respostas do usuário e retorna uma lista."""
  respostas = []
  print("Por favor, vá digitando V para (acertos) ou X para (erros):\n(Digite 'FIM' sem aspas para encerrar):")
  while True:
    resposta = input("> ").upper()
    if resposta == "FIM":
      break
    elif resposta not in ['V', 'X']:
      print("Resposta inválida. Por favor, digite 'V' para acerto ou 'X' para erro.")
    else:
      respostas.append(resposta)
  return respostas

def calcular_resultados(respostas):
  """Calcula o número de acertos, erros e a porcentagem de acertos."""
  acertos = respostas.count("V")
  erros = respostas.count("X")
  total_questoes = len(respostas)
  porcentagem_acertos = (acertos / total_questoes) * 100 if total_questoes > 0 else 0
  return acertos, erros, porcentagem_acertos

def exibir_resultados(acertos, erros, porcentagem_acertos):
  """Exibe os resultados de forma formatada."""
  print("Total de questões respondidas:", len(respostas))
  print("Número de acertos:", acertos)
  print("Número de erros:", erros)
  print("Porcentagem de acertos:", porcentagem_acertos, "%")

# Fluxo principal do programa
respostas = obter_respostas()
acertos, erros, porcentagem_acertos = calcular_resultados(respostas)
exibir_resultados(acertos, erros, porcentagem_acertos)
