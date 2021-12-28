describe('/', () => {
  describe('when requested with no parameters', () => {
    before(() => {
      cy.visit('/')
    })

    it('should display expected greeting', () => {
      cy.findByText('Hello Larry!').should('be.visible')
    })
  })

  describe('when requested with ?name=Gary', () => {
    before(() => {
      cy.visit('/?name=Gary')
    })

    it('should display expected greeting', () => {
      cy.findByText('Hello Gary!').should('be.visible')
    })
  })
})
