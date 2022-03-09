describe('Infrastruktur', () => {
    it('navigera till infrastruktur sektionen i sverige wiki', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('sverige').should('have.value', 'sverige')
      .type('{enter}')
      cy.get('[id=Infrastruktur]').click(


      
    })
  })