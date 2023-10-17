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

    it('não deve cadastrar foodtruck com o nome duplicado', () => {
        
        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'Senha789'
        }

        const foodtruck = {
            latitude: '-20.911028337965604',
            longitude: '-44.50801748806',
            name: `Barlos`,
            details: 'A melhor cachaça aromatizada da cidade!!',
            opening_hours: 'De 16h às 02h',
            open_on_weekends: true
        }


        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)
        
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')

    })

    it('todos os campos são obrigatórios', () => {
        
        const user = {
            name: 'Juninho',
            instagram: '@junior',
            password: 'Senha1020'
        }

        const foodtruck = {
            latitude: '-20.90788948099976',
            longitude: '-44.507176280021675',
        }


        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeoLocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()

        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)
    })
})