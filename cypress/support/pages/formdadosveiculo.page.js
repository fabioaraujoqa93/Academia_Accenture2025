import { faker } from '@faker-js/faker'

//dados do veiculo
const SELECT_MAKE = '#make'
const INPUT_PERFORMANCE = '#engineperformance'
const INPUT_DATE = '#dateofmanufacture'
const INPUT_NUMBEROFSEATS = '#numberofseats'
const INPUT_FUEL = '#fuel'
const INPUT_LISTPRICE = '#listprice'
const INPUT_LICENSE = '#licenseplatenumber'
const INPUT_ANUALKM = '#annualmileage'

//botão de próximo
const BTN_NEXTER1 = '#nextenterinsurantdata'

//validacao
const VAL_VEHICLE = '#entervehicledata'


Cypress.Commands.add('dadosDoVeiculo', () => {
    cy.get(VAL_VEHICLE).should('be.visible') // VALIDAÇÃO QUE ESTA NA PAGINA CERTA
    cy.log('✅ Aba Dados do Veiculo - Validado com sucesso')
    cy.get(SELECT_MAKE).select(Math.floor(Math.random() * 15) + 1)
    cy.get(INPUT_PERFORMANCE).type(faker.number.int({ min: 1, max: 2000 }).toString())
    cy.get(INPUT_DATE).type(faker.date.past(30).toLocaleDateString('en-US'))
    cy.get(INPUT_NUMBEROFSEATS).select(faker.number.int({ min: 1, max: 9 }).toString())
    cy.get(INPUT_FUEL).select(Math.floor(Math.random() * 5) + 1)
    cy.get(INPUT_LISTPRICE).type(faker.number.int({ min: 500, max: 100000 }).toString())
    cy.get(INPUT_LICENSE).type("654321")
    cy.get(INPUT_ANUALKM).type(faker.number.int({ min: 100, max: 100000 }).toString())

    cy.get(BTN_NEXTER1).click()
})

Cypress.Commands.add('dadosDoVeiculoInvalido', () => {
    cy.get(INPUT_PERFORMANCE).type(faker.number.int({ min: 1, max: 2000 }).toString())
    cy.get(INPUT_DATE).type(faker.date.past(30).toLocaleDateString('en-US'))
    cy.get(INPUT_NUMBEROFSEATS).select(faker.number.int({ min: 1, max: 9 }).toString())
    cy.get(INPUT_FUEL).select(Math.floor(Math.random() * 5) + 1)
    cy.get(INPUT_LISTPRICE).type(faker.number.int({ min: 500, max: 100000 }).toString())
    cy.get(INPUT_LICENSE).type("654321")
    cy.get(INPUT_ANUALKM).type(faker.number.int({ min: 100, max: 100000 }).toString())

    cy.get(BTN_NEXTER1).click()
})





