const HEADER = 'header';
const HEADER_NAV = 'header nav';

describe('Testando página de Relógio', () => {
  it('1 - testa se há um <header />', () => {
    cy.visit('http://127.0.0.1:5500/pages/index/');
    cy.get(HEADER).should('exist');
  });
});
  