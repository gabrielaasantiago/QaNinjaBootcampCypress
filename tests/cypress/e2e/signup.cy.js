import signupPage from "../support/pages/Signup"


describe('Signup', () => {

    it('deve cadastrar um novo usuário', () => {
        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'onalim321'
        }

        // cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => { 
        //     cy.log(res)
        // })

        cy.apiResetUser(user.instagram)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('não deve cadastrar com instagram duplicado', () => {

        const user = {
            name: 'Paola',
            instagram: '@carosela.paola',
            password: 'pwd123'
        }

        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')

    })
})


