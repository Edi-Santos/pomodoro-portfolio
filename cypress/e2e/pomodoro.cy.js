/// <reference types="cypress" />

const HEADER = 'header';
const HEADER_NAV = 'header nav';
const MAIN = 'main';
const CLASS_TITLE = '.title';

describe('Testa página Pomodoro', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/pages/pomodoro/pomodoro.html')
  });

  it('16 - testa se há um <header />', () => {
    cy.get(HEADER).should('exist');
  });

  it('17 - testa se no <header /> há um <nav />, e se, na TAG <nav />, há 3 elementos filhos', () => {
    cy.get(HEADER_NAV).should('exist');
    cy.get(HEADER_NAV).children().should('have.length', 3);
  });

  it('18 - testa se há um <main />', () => {
    cy.get(MAIN).should('exist');
  });

  it('19 - testa se há um título', () => {
    cy.get(CLASS_TITLE).should('exist');
  });
});
