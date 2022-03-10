describe('Etymologi', () => {
    it('navigera till etymologi sektion i författare wiki', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('författare').should('have.value', 'författare')
      .type('{enter}')
      cy.get('[id=Etymologi]').click(

      
      
    })
  })
