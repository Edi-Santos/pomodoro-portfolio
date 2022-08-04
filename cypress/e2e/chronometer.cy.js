const HEADER = 'header';

describe('Testando página de Cronômetro', () => {
  it('5 - testa se há um <header />', () => {
    cy.visit('http://127.0.0.1:5500/pages/chronometer/chronometer.html');
    cy.get(HEADER).should('exist');
  })
});