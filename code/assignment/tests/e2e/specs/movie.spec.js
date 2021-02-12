// https://docs.cypress.io/api/introduction/api.html

describe('Movie view Tests', () => {
  it('Go back to List view on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .visit('/movie/tt4853102')
      .get('[data-cy=back]').click()
      .get('[data-cy=list-page]')
      .url().should('eq', 'http://localhost:8080/')
  })
  it('Go back to List view on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .visit('/movie/tt4853102')
      .get('[data-cy=back]').click()
      .get('[data-cy=list-page]')
      .url().should('eq', 'http://localhost:8080/')
  })
  it('should display the title on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-title]').should('be.visible')
  })
  it('should display the title on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-title]').should('be.visible')
  })
  it('should display the poster on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-poster]').should('be.visible')
  })
  it('should display the poster on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-poster]').should('be.visible')
  })
  it('should display the like button on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=like]').should('be.visible')
  })
  it('should display the like button on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=like]').should('be.visible')
  })
  it('should display the plot on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-plot]').should('be.visible')
  })
  it('should display the plot on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-plot]').should('be.visible')
  })
  it('should display the cast on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-cast]').children().should('have.length.of.at.least', '1')
  })
  it('should display the cast on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-cast]').children().should('have.length.of.at.least', '1')
  })
  it('should display the genre on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-genre]').children().should('have.length.of.at.least', '1')
  })
  it('should display the genre on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-genre]').children().should('have.length.of.at.least', '1')
  })
  it('should display the director on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-director]').children().should('have.length.of.at.least', '1')
  })
  it('should display the director on mobile', () => {
    cy.viewport(360, 720)
      .visit('/movie/tt4853102')
      .get('[data-cy=movie-director]').children().should('have.length.of.at.least', '1')
  })
})
