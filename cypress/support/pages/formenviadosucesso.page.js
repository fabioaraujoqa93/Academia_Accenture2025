import { faker } from '@faker-js/faker'

//dados de enviar cotação
const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFPASSWORD = '#confirmpassword'
const INPUT_COMENTS = '#Comments'

// botão de enviar o email
const BTN_SENDEMAIL = '#sendemail'

//validacao
const VAL_ENVI = '#entervehicledata'

Cypress.Commands.add('enviadoComSucesso', () => {
    cy.get(VAL_ENVI).should('be.visible') // VALIDAÇÃO QUE ESTA NA PAGINA CERTA
    cy.log('✅ Aba Enviar Cotação - Validado com sucesso')
    cy.get(INPUT_EMAIL).type(faker.internet.email({ provider: 'test.com' }))
    cy.get(INPUT_PHONE).type("819999999")
    cy.get(INPUT_USERNAME).type(Cypress.env("username"), {log: false})
    cy.get(INPUT_PASSWORD).type(Cypress.env("password"), {log: false})
    cy.get(INPUT_CONFPASSWORD).type(Cypress.env("password"), {log: false})
    cy.get(INPUT_COMENTS).type("Finalizo esse projeto onde aprendi muito sobre automação!")
    cy.get(BTN_SENDEMAIL).click()

})
