/// <reference types="cypress" />

const HEADER = 'header';

describe('Testa página Pomodoro', () => {
  before(() => {
    cy.visit('http://127.0.0.1:5500/pages/pomodoro/pomodoro.html')
  });

  it('16 - testa se há um <header />', () => {
    cy.get(HEADER).should('exist');
  });
});
