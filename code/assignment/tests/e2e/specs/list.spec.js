// https://docs.cypress.io/api/introduction/api.html

describe('At List view', () => {
  it('should render empty list, on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .contains('p', 'No info available')
  })
  it('should render empty list, on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .contains('p', 'No info available')
  })
  it('should search by unknown id, on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .get('[data-cy=search]').type('tt0000000{enter}').end()
      .get('[data-cy=main]').contains('p', 'No info available')
  })
  it('should search by unknown id, on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .get('[data-cy=search]').type('tt0000000{enter}').end()
      .get('[data-cy=main]').contains('p', 'No info available')
  })
  it('should search by unknown text, on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .get('[data-cy=search]').type('qwertyuiop{enter}').end()
      .get('[data-cy=main]').contains('p', 'No info available')
  })
  it('should search by unknown text, on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .get('[data-cy=search]').type('qwertyuiop{enter}').end()
      .get('[data-cy=main]').contains('p', 'No info available')
  })
  it('should search by known id, on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .get('[data-cy=search]')
      .type('tt4853102{enter}')
      .wait(1000).end()
      .get('div[data-cy=movie-row]').then(($row) => {
        // search by id shall return only 1 element
        cy.wrap($row).children().should('have.length', '1')
        for ($movieCard of $row.children()) {
          //each card should occupy 4 columns (3 cards per row)
          cy.wrap($movieCard).should('have.class', 'col-lg-4').end()
            //each card should have a movie title
            .get('[data-cy=movie-title]').should('be.visible').end()
            //each card should have a movie image not empty
            .get('[data-cy=movie-image]').should('have.css', 'background-image')
        }
      })
  })
  it('should search by known id, on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .get('[data-cy=search]')
      .type('tt4853102{enter}')
      .wait(1000).end()
      .get('div[data-cy=movie-row]').then(($row) => {
        // search by id shall return only 1 element
        cy.wrap($row).children().should('have.length', '1')
        for ($movieCard of $row.children()) {
          //each card should occupy 12 columns (1 cards per row)
          cy.wrap($movieCard).should('have.class', 'col-12').end()
            //each card should have a movie title not empty
            .get('[data-cy=movie-title]').should('be.visible').end()
            //each card should have a movie image not empty
            .get('[data-cy=movie-image]').should('have.css', 'background-image')
        }
      })
  })
  it('should search by known search, on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .get('[data-cy=search]')
      .type('Batman{enter}')
      .wait(1000).end()
      .get('div[data-cy=movie-row]').then(($row) => {
        cy.wrap($row).children().should('have.length', '12')
        for ($movieCard of $row.children()) {
          //each card should occupy 4 columns (3 cards per row)
          cy.wrap($movieCard).should('have.class', 'col-lg-4').end()
          //each card should have a movie title
            .get('[data-cy=movie-title]').should('be.visible').end()
          //each card should have a movie image not empty
            .get('[data-cy=movie-image]').should('have.css', 'background-image')
        }
    }).end() // search by id shall return only 1 element
      .get('[data-cy=more]').should('be.visible')
  })
  it('should search by known search, on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .get('[data-cy=search]')
      .type('Batman{enter}')
      .wait(1000).end()
      .get('div[data-cy=movie-row]').then(($row) => {
      // search by id shall return only 1 element
      cy.wrap($row).children().should('have.length', '12')
      for ($movieCard of $row.children()) {
        //each card should occupy 4 columns (3 cards per row)
        cy.wrap($movieCard).should('have.class', 'col-lg-4').end()
        //each card should have a movie title
          .get('[data-cy=movie-title]').should('be.visible').end()
        //each card should have a movie image not empty
          .get('[data-cy=movie-image]').should('have.css', 'background-image')
      }
    }).end()
      .get('[data-cy=more]').should('be.visible')
  })
  it('should open Movie view on desktop', () => {
    cy.viewport(1270, 1024)
      .visit('/')
      .get('[data-cy=search]')
      .type('tt4853102{enter}')
      .wait(1000).end()
      .get('[data-cy=movie-image]').click().end()
      .get('[data-cy=back]').url().should('contain', '/movie/tt4853102')
  })
  it('should open Movie view on mobile', () => {
    cy.viewport(360, 720)
      .visit('/')
      .get('[data-cy=search]')
      .type('tt4853102{enter}')
      .wait(1000).end()
      .get('[data-cy=movie-image]').click().end()
      .get('[data-cy=back]').url().should('contain', '/movie/tt4853102')
  })
})
