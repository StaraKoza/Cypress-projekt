
describe('Runstenar', () => {
    it('Does not shit', () => {
      cy.visit('https://sv.wikipedia.org/wiki/Portal:Huvudsida')
      cy.get('.vector-search-box-input')
      .type('viking').should('have.value', 'viking')
      .type('{enter}')
      cy.get('[id=Runstenar]').click()
      
    })
  })
