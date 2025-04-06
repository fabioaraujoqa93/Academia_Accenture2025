import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
 
Given('que o usuário acessa o portal', () => {
    cy.visit('/')
})

And('clicar em automobile', () => {
    cy.clicarEmAutomobile()
})

When('preenche os dados do veículo', () => {
    cy.dadosDoVeiculo()
})

And('preenche os dados do seguro', () => {
    cy.dadosDoSegurado()
})

And('preenche os dados do produto', () => {
    cy.dadosDoProduto()
})

And('seleciona a opção de preço', () => {
    cy.opçãoDePreço()
})

Then('formulário enviado com sucesso', () => {
    cy.enviadoComSucesso()
})