/// <reference types="cypress" />

const HEADER = 'header';
const HEADER_NAV = 'header nav';
const MAIN = 'main';
const CLASS_TITLE = '.title';
const CLASS_WORK_TIMER_TITLE = '.work-timer-title';
const CLASS_WORK_TIMER = '.work-timer';
const CLASS_REST_TIMER_TITLE = '.rest-timer-title';
const CLASS_REST_TIMER = '.rest-timer';
const CLASS_START = '.start';
const CLASS_STOP = '.stop';
const CLASS_RESTART = '.restart';

describe('Testa página Pomodoro', () => {
  before(() => {
    cy.visit('../../pages/pomodoro/pomodoro.html')
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

  it('21 - testa se há espaço para o subtítulo "DESCANSO" e contagem do tempo de descanso', () => {
    cy.get(CLASS_REST_TIMER_TITLE).should('exist');
    cy.get(CLASS_REST_TIMER_TITLE).should('have.value', '');
    cy.get(CLASS_REST_TIMER).should('exist');
    cy.get(CLASS_REST_TIMER).should('have.value', '');
  });

  it('22 - testa se há um botão para iniciar e se ele inicia a contagem', () => {
    cy.get(CLASS_START).should('exist');
    cy.get(CLASS_START).click();
    cy.get(CLASS_WORK_TIMER).should('have.text', '24:59');
  });

  it('23 - testa se há um botão para pausar e se ele pausa a contagem', () => {
    cy.get(CLASS_STOP).should('exist');
    cy.get(CLASS_STOP).click();
    cy.get(CLASS_WORK_TIMER).should('have.text', '24:59');
  });

  it('24 - testa se há um botão para reiniciar e se ele reinicia a contagem', () => {
    cy.get(CLASS_RESTART).should('exist');
    cy.get(CLASS_RESTART).click();
    cy.get(CLASS_WORK_TIMER).should('have.text', '25:00');
  });
});
