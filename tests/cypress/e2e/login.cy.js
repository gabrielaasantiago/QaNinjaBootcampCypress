import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

import users from '../fixtures/login-users.json'

describe('Login', () => {
  
  // before(() => {
  //   cy.fixture('login-users').then(function (users) {
  //     this.users = users
  //   })
  // })

  it.only('deve logar com sucesso', () => {

    const user = users.success

    cy.apiCreateUser(user)

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
    
  })


  it('não deve logar com senha incorreta', () => { 

    const user = {
      instagram: '@gabi.santiago',
      password: '123abc'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')

  })


  it('não deve logar com instagram inexistente', () => {

    const user = {
      instagram: '@santiago.gabi',
      password: '123abc'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')    
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: 'Theo2020'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@gabi.santiago'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatórios', () => {
    const user = {}

    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

})

