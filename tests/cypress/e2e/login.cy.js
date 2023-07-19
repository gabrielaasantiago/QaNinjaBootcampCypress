describe('Login', () => {
  it('deve logar com sucesso', () => {

    const user = {
      name: 'Gabriela',
      instagram: '@gabi.santiago',
      password: 'Theo2020'
    }

    cy.login(user)    
    cy.loggedUser(user.name)
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
})

