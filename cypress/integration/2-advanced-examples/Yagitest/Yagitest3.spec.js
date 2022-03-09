describe('Semantik', () => {
    it('navigera till semantik sektionen i språk wiki', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('språk').should('have.value', 'språk')
      .type('{enter}')
      cy.get('[id=Semantik]').click()


      
    })
  })

