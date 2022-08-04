const HEADER = 'header';
const HEADER_NAV = 'header nav';
const MAIN = 'main';
const CLASS_TITLE = '.title';
const CLASS_CLOCK = '.clock';

describe('Testando página de Relógio', () => {
  it('1 - testa se há um <header />', () => {
    cy.visit('http://127.0.0.1:5500/pages/index/');
    cy.get(HEADER).should('exist');
  });

  it('2 - Testa se no <header /> há um <nav />, e se, na TAG <nav />, há 3 elementos filhos', () => {
    cy.get(HEADER_NAV).should('exist');
    cy.get(HEADER_NAV).children().should('have.length', 3);
  });

  it('3 - Testa se há um <main />', () => {
    cy.get(MAIN).should('exist');
  });

  it('4 - Testa se há um título e um espaço para o relógio', () => {
    cy.get(CLASS_TITLE).should('exist');
    cy.get(CLASS_CLOCK).should('exist');
  });
});
  