describe('Portafolio App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('frontpage can be opened', () => {
    cy.contains('Jordi Armengol Cherto')
  })

  it('user can send contact form', () => {
    cy.get('[name = "emailForm"]').type('jorditest@gmail.com')
    cy.get('[name = "nameForm"]').type('Jordi Test')
    cy.get('[name = "descripcion"]').type('Content test form')
  })
})
 