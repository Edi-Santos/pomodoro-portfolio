/// <reference types="cypress" />

const HEADER = 'header';
const HEADER_NAV = 'header nav';
const MAIN = 'main';
const CLASS_TITLE = '.title';
const CLASS_WORK_TIMER_TITLE = '.work-timer-title';
const CLASS_WORK_TIMER = '.work-timer';

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

  it('20 - testa se há o subtítulo "TRABALHO" e a contagem iniciando em 25 minutos', () => {
    cy.get(CLASS_WORK_TIMER_TITLE).should('exist');
    cy.get(CLASS_WORK_TIMER_TITLE).should('have.text', 'TRABALHO');
    cy.get(CLASS_WORK_TIMER).should('exist');
    cy.get(CLASS_WORK_TIMER).should('have.text', '25:00');
  });
});
