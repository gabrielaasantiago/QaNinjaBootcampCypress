describe('Login', () => {
  it('deve logar com sucesso', () => {
    cy.login('@gabi.santiago', 'Theo2020')
      
    cy.get('.logged-user')
      .should('be.visible')
      .should('have.text', 'Olá, Gabriela')
  })


  it('não deve logar com senha incorreta', () => { 
    cy.login('@gabi.santiago', 'abc123')

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Credenciais inválidas, tente novamente!')
  })


  it('não deve logar com instagram inexistente', () => {
    cy.login('@santiago.gabi', 'Theo2020')

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Credenciais inválidas, tente novamente!')
  })
})

Cypress.Commands.add('login', (instagram, password) => {
  cy.visit('/')

  cy.get('input[name=instagram]').type(instagram)
  cy.get('input[name=password]').type(password)

  cy.contains('button', 'Entrar').click()
})