const HEADER = 'header';
const HEADER_NAV = 'header nav';
const MAIN = 'main';
const CLASS_TITLE = '.title';
const CLASS_TIME = '.time';
const CLASS_START = '.start';
const CLASS_STOP = '.stop';
const CLASS_BACK_TO_ZERO = '.back-to-zero';

describe('Testando página de Temporizador', () => {
  it('5 - testa se há um <header />', () => {
    cy.visit('../../pages/timer/timer.html');
    cy.get(HEADER).should('exist');
  })

  it('6 - Testa se no <header /> há um <nav />, e se, na TAG <nav />, há 3 elementos filhos', () => {
    cy.get(HEADER_NAV).should('exist');
    cy.get(HEADER_NAV).children().should('have.length', 3);
  });

  it('7 - Testa se há um <main />', () => {
    cy.get(MAIN).should('exist');
  });

  it('8 - testa se há um título e um espaço para colocar tempo do temporizador', () => {
    cy.get(CLASS_TITLE).should('exist');
    cy.get(CLASS_TIME).should('exist');
  });

  it('9 - testa se é possível adicionar horas, minutos e segundos ao temporizador', () => {
    cy.get(CLASS_TIME).children('.hh').should('have.value', '00');
    cy.get(CLASS_TIME).children('.mm').should('have.value', '00');
    cy.get(CLASS_TIME).children('.ss').should('have.value', '00');

    cy.get(CLASS_TIME).children('.hh').clear();
    cy.get(CLASS_TIME).children('.mm').clear();
    cy.get(CLASS_TIME).children('.ss').clear();

    cy.get(CLASS_TIME).children('.hh').type('01')
    cy.get(CLASS_TIME).children('.mm').type('30');
    cy.get(CLASS_TIME).children('.ss').type('10');
  });

  it('10 - testa se há um botão para começar a contagem', () => {
    cy.get(CLASS_START).should('exist');
  });

  it('11 - testa se o botão inicia a contagem', () => {
    cy.get(CLASS_START).click();

    cy.get(CLASS_TIME).children('.ss').should('have.value', 9)
  });

  it('12 - testa se há um botão para pausar a contagem', () => {
    cy.get(CLASS_STOP).should('exist');
  });
  
  it('13 - testa se o botão pausa a contagem', () => {
    cy.get(CLASS_STOP).click();
    cy.get(CLASS_TIME).children('.ss').should('have.value', 9);
  })

  it('14 - testa se há um botão para zerar a contagem', () => {
    cy.get(CLASS_BACK_TO_ZERO).should('exist');
  });

  it('15 - testa se o botão zera a contagem', () => {
    cy.get(CLASS_BACK_TO_ZERO).click();
    
    cy.get(CLASS_TIME).children('.hh').should('have.value', '00');
    cy.get(CLASS_TIME).children('.mm').should('have.value', '00');
    cy.get(CLASS_TIME).children('.ss').should('have.value', '00');
  });
});