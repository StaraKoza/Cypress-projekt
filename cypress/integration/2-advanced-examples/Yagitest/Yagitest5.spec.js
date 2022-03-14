describe('Recept', () => {
    it('hitta favorit recept', () => {
      cy.visit('https://www.mathem.se/recept')
      cy.get('[id=main-search]')
      .type('bolognese').should('have.value', 'bolognese')
      cy.get('a:contains(Pappardelle Bolognese)').should('be.visible').click({force: true})


      
    })
  })