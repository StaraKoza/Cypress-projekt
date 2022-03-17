describe('Bitola', () => {
    it('navigera till övrigt sektionen i bitola ', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('bitola').should('have.value', 'bitola')
      .type('{enter}')
      cy.get('[id=Klimat]').click()
      

      
      

      
    })
  })