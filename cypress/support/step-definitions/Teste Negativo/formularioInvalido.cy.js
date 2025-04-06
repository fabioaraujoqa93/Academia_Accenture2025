import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
 
Given('que o usuário acessa o portal', () => {
    cy.visit('/')
})

And('clicar em automobile', () => {
    cy.clicarEmAutomobile()
})

When('preenche os dados do veículo invalido', () => {
    cy.dadosDoVeiculoInvalido()
})

Then('o sistema deve impedir de escolher o plano', () => {
    cy.planoInvalido()
})
