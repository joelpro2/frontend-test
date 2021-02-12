// https://docs.cypress.io/api/introduction/api.html

describe('List view Tests', () => {
  it('Vist List view on mobile with empty list', () => {
    cy.visit('/')
    cy.contains('p', 'No info')
  })
})
