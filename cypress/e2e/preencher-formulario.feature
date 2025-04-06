#utf-8
#language: pt

Funcionalidade: Preencher formulário no portal Tricentis

  Cenario: Usuário preenche os dados do veículo e envia o formulário
    Dado que o usuário acessa o portal
    E clicar em automobile
    Quando preenche os dados do veículo
    E preenche os dados do seguro
    E preenche os dados do produto
    E seleciona a opção de preço
    Então formulário enviado com sucesso