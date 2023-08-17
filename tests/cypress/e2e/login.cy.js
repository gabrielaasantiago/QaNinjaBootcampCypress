import loginPage from '../support/pages/Login'

describe('Login', () => {
  
  it('deve logar com sucesso', () => {

    const user = {
      name: 'Gabriela',
      instagram: '@gabi.santiago',
      password: 'Theo2020'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
  })


  it('não deve logar com senha incorreta', () => { 

    const user = {
      instagram: '@gabi.santiago',
      password: '123abc'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')   
  })


  it('não deve logar com instagram inexistente', () => {

    const user = {
      instagram: '@santiago.gabi',
      password: '123abc'
    }

    cy.login(user)
    cy.modalHaveText('Credenciais inválidas, tente novamente!')    
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: 'Theo2020'
    }

    cy.login(user)
    cy.modalHaveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@gabi.santiago'
    }

    cy.login(user)
    cy.modalHaveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos devem ser obrigatórios', () => {
    const user = {}

    cy.login(user)
    cy.modalHaveText('Por favor, informe suas credenciais!')
  })

})

