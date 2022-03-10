describe('Turism', () => {
    it('navigera till turism sektionen makedonien wiki', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('makedonien').should('have.value', 'makedonien')
      .type('{enter}')
      cy.get('[id=Turism]').click(


      
    })
  })
