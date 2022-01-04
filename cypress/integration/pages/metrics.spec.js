describe('/metrics', () => {
  beforeEach(() => {
    cy.visit('/metrics')
  })

  describe('metrics table', () => {
    beforeEach(() => {
      cy.get('#metrics-table').as('metrics-table')
    })

    describe('header', () => {
      beforeEach(() => {
        cy.get('@metrics-table').children('thead').as('table-header')
      })

      it('should have expected headers', () => {
        cy.get('@table-header').contains('th', 'Id')
        cy.get('@table-header').contains('th', 'Name')
        cy.get('@table-header').contains('th', 'Value')
      })
    })

    describe('body', () => {
      beforeEach(() => {
        cy.get('@metrics-table').children('tbody').as('table-body')
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
