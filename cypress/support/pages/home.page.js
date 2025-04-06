const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('clicarEmAutomobile', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

