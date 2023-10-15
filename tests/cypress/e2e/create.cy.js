import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Papito',
            instagram: '@papito.qa',
            password: 'Senha321'
        }

        const foodtruck = {
            latitude: '-20.905158352261022',
            longitude: '-44.5056501030922',
            name: `Tampinha's Burguer`,
            details: 'O melhor sanduíche podrão da cidade, bem servido e custo-benefício justo!',
            opening_hours: 'De 18h às 02h',
            open_on_weekends: false
        }


        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')

    })
})