describe('/countries', () => {
  beforeEach(() => {
    cy.visit('/countries')
  })

  describe('countries table', () => {
    beforeEach(() => {
      cy.get('#countries-table').as('countries-table')
    })

    describe('header', () => {
      beforeEach(() => {
        cy.get('@countries-table').children('thead').as('table-header')
      })

      it('should have expected headers', () => {
        cy.get('@table-header').contains('th', 'Code')
        cy.get('@table-header').contains('th', 'Name')
        cy.get('@table-header').contains('th', 'Emoji')
      })
    })

    describe('body', () => {
      beforeEach(() => {
        cy.get('@countries-table').children('tbody').as('table-body')
      })

      it('should have multiple rows', () => {
        cy.get('@table-body').children('tr').should('have.length.gte', 2)
      })

      it('should populate all cells', () => {
        cy.get('@table-body')
          .find('td')
          .each(($td) => {
            cy.wrap($td).invoke('text').should('not.be.empty')
          })
      })
    })
  })
})
