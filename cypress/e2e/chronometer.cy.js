const HEADER = 'header';
const HEADER_NAV = 'header nav';

describe('Testando página de Cronômetro', () => {
  it('5 - testa se há um <header />', () => {
    cy.visit('http://127.0.0.1:5500/pages/chronometer/chronometer.html');
    cy.get(HEADER).should('exist');
  })

  it('6 - Testa se no <header /> há um <nav />, e se, na TAG <nav />, há 3 elementos filhos', () => {
    cy.get(HEADER_NAV).should('exist');
    cy.get(HEADER_NAV).children().should('have.length', 3);
  });
});