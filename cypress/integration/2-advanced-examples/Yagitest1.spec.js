describe('yagi', () => {
    it('Does not shit', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Ryssland')
      cy.get('.vector-search-box-input')
      .type('test').should('have.value', 'test')
      .type('{enter}')

    })
  })
