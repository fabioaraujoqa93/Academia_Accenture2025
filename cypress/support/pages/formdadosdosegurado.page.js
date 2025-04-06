import { faker } from '@faker-js/faker'

//dados do segurado
const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_BIRTH = '#birthdate'
const RADIO_MALE = '#gendermale' // para selecionar o MALE
const INPUT_ADDRESS = "#streetaddress"
const INPUT_COUNTRY = '#country'
const INPUT_CODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCUPATION = '#occupation'
const RADIO_HOBBIE = '#other'
const INPUT_WEB = '#website'
const INPUT_PICTURE ='#picturecontainer'

//botão de próximo
const BTN_NEXTER2 = '#nextenterproductdata'

//validacao da pagina
const VAL_INSURANT = '#enterinsurantdata'



Cypress.Commands.add('dadosDoSegurado', () => {
    cy.get(VAL_INSURANT).should('be.visible') // VALIDAÇÃO QUE ESTA NA PAGINA CERTA
    cy.log('✅ Aba Dados do Segurado - Validado com sucesso')
    cy.get(INPUT_FIRSTNAME).type( faker.person.firstName({ sex: 'male' }).replace("-","."))
    cy.get(INPUT_LASTNAME).type(faker.person.lastName({ sex: 'male' }).replace("-","."))
    cy.get(INPUT_BIRTH).type(faker.date.birthdate({ min: 18, max: 69, mode: 'age' }).toLocaleDateString('en-US'));
    cy.get(RADIO_MALE).click({force: true}) //FORÇAR A INTEREÇÃO MESMO QUE O OBJETO ESTEJA INVISIVEL
    cy.get(INPUT_ADDRESS).type(faker.location.streetAddress());
    cy.get(INPUT_COUNTRY).select(Math.floor(Math.random() * 205) + 1)
    cy.get(INPUT_CODE).type(faker.location.zipCode("########").replace("-",""))
    cy.get(INPUT_CITY).type(faker.location.city())
    cy.get(INPUT_OCUPATION).select("Unemployed")
    cy.get(RADIO_HOBBIE).click({force: true}) //FORÇAR A INTEREÇÃO MESMO QUE O OBJETO ESTEJA INVISIVEL
    cy.get(INPUT_WEB).type("https://www.linkedin.com/in/fabioaraujoqa/")
    cy.get(INPUT_PICTURE).selectFile("Fabio.jpeg", {force: true})

    cy.get(BTN_NEXTER2).click()

})
