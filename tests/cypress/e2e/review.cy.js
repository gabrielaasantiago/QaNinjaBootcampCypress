import mapPage from "../support/pages/Map"
import foodTruckPage from "../support/pages/Foodtruck"

describe('Avaliações', () => {

    it('deve enviar uma nova avaliação', () => {

        const user = {
            name: 'Madruga Ramon',
            instagram: '@madruguinha',
            password: 'gatinholevado'
        }

        const foodtruck = {
            latitude: '-20.913386666390924',
            longitude: '-44.50958490371705',
            name: `Renata's FoodTruck`,
            details: 'A melhor cachaça da cidade ao som das melhores músicas que irá curtir!',
            opening_hours: 'De 19h às 03h',
            open_on_weekends: true
        }

        const review = {
            comment: 'A experiência de ouvir vinil foi muito legal!',
            stars: 4
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodTruck(foodtruck.name)
        foodTruckPage.addReview(review)
        foodTruckPage.reviewShouldBe(user, review)
        
    })
})