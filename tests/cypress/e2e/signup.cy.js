import signupPage from "../support/pages/Signup"


describe('Signup', () => {

    it('deve cadastrar um novo usuário', () => {
        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'onalim321'
        }

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })
})