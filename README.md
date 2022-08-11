# Bem Vindo ao Projeto Pomodoro!!!

Este é o terceiro projeto da iniciativa PorConta. Iniciativa que tem o propósito de ajudar aos novos programadores a começarem a desenvolver um Portfólio. Também ajudará aos que desejam pegar novos projetos para praticar e se aperfeiçoarem, estendendo, consequentenmente, ainda mais o Portfólio.
Fique a vontade para pegar os projetos e desenvolver à sua maneira, publicar no LinkedIn, mostrar para rescrutadores e tudo mais.

>*__Obs__*.: __LEIA ATENTAMENTE TODO O `README` ANTES DE COMEÇAR O DESENVOLVIMENTO DO PROJETO, POIS NELE ESTÃO CONTIDAS TODAS AS INFORMAÇÕES NECESSÁRIAS PARA O DESENVOLVIMENTO DO PROJETO.__

---

## Sumário
  - [Requisitos Para Desenvolver Este Projeto](#requisitos-para-desenvolver-este-projeto)
  - [Sobre o Projeto](#sobre-o-projeto)
     - [Tecnologias a Serem Utilizadas](#tecnologias-a-serem-utilizadas)
  - [Durante o Desenvolvimento](#durante-o-desenvolvimento)
     - [Mantendo Seu Código Versionado](#mantendo-seu-código-versionado)
  - [Desenvolvendo o Projeto](#desenvolvendo-o-projeto)
     - [Iniciando o Projeto](#iniciando-o-projeto)
     - [Instalando as Dependências](#instalando-as-dependências)
     - [Rodando os Testes](#rodando-os-testes)
  - [Requisitos do Projeto](#requisitos-do-projeto)
     - [Lista de Requisitos](#lista-de-requisitos)
       - [Tela de Relógio (index.html)](#tela-de-relógio-indexhtml)
         - [1 - Crie um Header](#1---crie-um-header)
         - [2 - Crie um Nav dentro do Header](#2---crie-um-nav-dentro-do-header)
         - [3 - Crie um Main](#3---crie-um-main)
         - [4 - Testa se há um um Título na página e um espaço para o Relógio](#4---testa-se-há-um-um-título-na-página-e-um-espaço-para-o-relógio)
       - [Tela de Temporizador (timer.html)](#tela-de-temporizador-timerhtml)
         - [5 - Crie um Header](#5---crie-um-header)
         - [6 - Crie um Nav dentro do Header](#6---crie-um-nav-dentro-do-header)
         - [7 - Crie um Main](#7---crie-um-main)
         - [8 - Crie um Título na página e um espaço para o Temporizador](#8---crie-um-título-na-página-e-um-espaço-para-o-temporizador)
         - [9 - Faça que seja possível adicionar horas, minutos e segundos ao temporizador](#9---faça-que-seja-possível-adicionar-horas-minutos-e-segundos-ao-temporizador)
         - [10 - Crie um botão para iniciar a contagem](#10---crie-um-botão-para-iniciar-a-contagem)
         - [11 - Faça que o botão se torne funcional](#11---faça-que-o-botão-se-torne-funcional)
         - [12 - Crie um botão para pausar a contagem](#12---crie-um-botão-para-pausar-a-contagem)
         - [13 - Faça que o botão se torne funcional](#13---faça-que-o-botão-se-torne-funcional)
         - [14 - Crie um botão para zerar a contagem](#14---crie-um-botão-para-zerar-a-contagem)
         - [15 - Faça que o botão se torne funcional](#15---faça-que-o-botão-se-torne-funcional)
       - [Tela Pomodoro (pomodoro.html)](#tela-pomodoro-pomodorohtml)
         - [16 - Crie um Header](#16---crie-um-header)
         - [17 - Crie um Nav dentro do Header](#17---crie-um-nav-dentro-do-header)
         - [18 - Crie um Main](#18---crie-um-main)
         - [19 - Crie um Título na página](#19---crie-um-título-na-página)
         - [20 - Crie um subtítulo e espaço para a contagem do tempo (_TRABALHO_)](#20---crie-um-subtítulo-e-espaço-para-a-contagem-do-tempo-trabalho)
         - [21 - Crie um subtítulo e espaço para a contagem do tempo (_DESCANSO_)](#21---crie-um-subtítulo-e-espaço-para-a-contagem-do-tempo-descanso)
         - [22 - Crie um botão para iniciar a contagem](#22---crie-um-botão-para-iniciar-a-contagem)
         - [23 - Crie um botão para pausar a contagem](#23---crie-um-botão-para-pausar-a-contagem)
         - [24 - Crie um botão para reiniciar a contagem](#24---crie-um-botão-para-reiniciar-a-contagem)
      - [Considerações Finais](#considerações-finais)
---

### Requisitos Para Desenvolver Este Projeto

- VS Code
- NodeJS v14^

Para este projeto você precisa ter instalado em sua máquina um editor de código (sugiro o VS Code pela sua simplicidade e leveza, além
de extensões que facilitam muito o desenvolvimento) e o Node na versão 14.0.0 ou superior.

Para saber qual versão do Node está rodando em sua máquina, abra o terminal e execute:

```
node --version
```

Caso precise mudar a versão do Node, uma opção é fazer uso do `NVM` para instalar novas versões e gerenciar as versões do Node em sua máquina.

Para saber se você tem o `NVM` instalado em sua máquina, abra o terminal e execute:

```
nvm --version
```

Você pode aprender mais sobre `NVM` <a href='https://github.com/nvm-sh/nvm'>aqui</a>

---

### Sobre o Projeto

Neste projeto você desenvolverá 3 telas onde a primeira se trata de um relógio digital, a segunda, um temporizador, e a terceira, um contador Pomodoro. O objetivo deste projeto é de você desenvolver e consolidar seus conhecimentos em _HTML_, _CSS_ e _JS_ na manipulação do DOM, além de praticar a __lógica de programação__.

>__Obs.1__: Sinta-se à vontade para desenvolver o projeto bem à sua maneira, com suas características, mas vise sempre manter o código mais limpo e legível possível. Mantenha a organização de seus códigos.

>__Obs.2__: Na raiz do projeto há um diretório (pasta) chamada *__base_answer__*. Nesta pasta está um exemplo do projeto pronto desenvolvido por mim. A intenção é de você poder ter um lugar para que possa tirar alguma dúvida. Busque não se debruçar em cima do projeto pronto, tente fazer do seu jeito, pesquise quando surgir dúvidas, use este exemplo pronto apenas como último recurso.

#### Tecnologias a Serem Utilizadas

- __HTML__
- __CSS__
- __JavaScript__

Fique à vontade para ir além e utilizar bibliotecas como, por exemplo, _Bootstrap_ e o jQuery.

---

### Durante o Desenvolvimento

#### Mantendo Seu Código Versionado

Busque fazer pequenos commits a cada nova funcionalidade do projeto implementada. </br>
É uma boa prática de mercado o uso de `commits semânticos`. Caso ainda não conheça esta prática, você pode começar a ler sobre eles <a href='https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657'>aqui</a>

---

### Desenvolvendo o Projeto

#### Iniciando o Projeto

Para dar o primeiro passo você precisa criar um _fork_ do projeto. Assim você estará puxando o projeto do meu repositório para o seu.

>__Obs.1__: Se você ainda não possui conhecimento sobre como o _fork_ funciona, leia <a href='https://docs.github.com/pt/get-started/quickstart/contributing-to-projects'>este guia</a> sobre _fork_ até a seção `Fazendo e enviando por push as alterações`. </br> Você pode ir além nos conhecimentos sobre _fork_ mas não serão necessários para este projeto.

>__Obs.2__: *__NÃO É NECESSÁRIO ABRIR UM PR (Pull Request)!!!__*

Feito o _fork_, clone o repositório para o seu computador

#### Instalando as Dependências

Para iniciar o projeto certifique-se de instalar as dependências.

Abra o seu terminal na raiz do projeto (o terminal do VS Code já abre na pasta que o VS Code foi aberto) e execute o comando:

```
npm install
```

Executado este comando, serão instaladas todas as dependências do projeto.

#### Rodando os Testes

Para os testes de Front-end nós estaremos utilizando o __Cypress__, uma poderosa ferramenta de testes para validação de telas. Ele acessa o código fonte ou URL e verifica, de acordo com os testes implementados, a existência ou não de elementos DOM. </br>
O mais importante aqui é que você saiba como executar estes testes para que possa desenvolver o projeto de acordo com o que se é pedido.

Para começar a testar, com seu terminal aberto na raiz do projeto, execute:

```
npm run test:cy
```

Aguarde um momento! O Cypress será iniciado (paciência... às vezes demora um pouco mesmo :grimacing:).

Após a inicialização do Cypress abrirá a seguinte tela:

><img src='./img_readme/cypress-tela_inicial.png' alt='Tela inicial do Cypress'/> </br>

Escolha a opção `E2E Testing`, pois é esta que está configurada e com testes feitos.<br>
Em seguida, abrirá a seguinte tela:

><img src='./img_readme/cypress-tela_escolha_execucao.png'>

Escolha alguma das 3 opções. A que você escolher será onde abrirá os testes do _Cypress_ e executará os testes.
Após selecionar a opção e clicar em `Start E2E Testing in ...`, abrirá a seguinte tela:

><img src='./img_readme/cypress-tela_testes.png'>

>__Obs__: Estarei utilizando a opção _Chrome_. 

Veja que temos 3 arquivos de testes. Escolha um arquivo de teste para que o _Cypress_ abra-o e execute-o.

><img src='./img_readme/cypress-tela_executando_testes.png'> <br>

A tela mostrada acima é a tela que abrirá executando todos os testes presentes no arquivo *__index.cy.js__*

Caso abrir o teste seja a primeira coisa que você faça, abrirá exatamente a tela mostrada no print abaixo.

><img src='./img_readme/cypress-tela_executando_teste_falhando.png'> <br>

Conforme você for cumprindo cada requisito, você vai ganhando um *__check__* verde indicando o seu avanço.

---

### Requisitos do Projeto

Faça com calma e atenção. Muito importante a __organização__ de seus códigos.

Ao concluir o projeto, ele deverá estar semelhante ao seguinte:

><img src='./img_readme/projeto-finalizado-1.png'>
><img src='./img_readme/projeto-finalizado-2.png'>
><img src='./img_readme/projeto-finalizado-3.png'>

Mas fique à vontade para adicionar novas funcionalidades, mudar a aparência e demais mudanças. As imagens acima são apenas exemplos (o resultado do código da pasta _base_answer_)

---

## ATENÇÂO!
#### OS ARQUIVOS `HTML` JÁ ESTÃO CRIADOS, SENDO NECESSÁRIO QUE VOCÊ, APENAS, IMPLEMENTE-OS. OS DEMAIS ARQUIVOS NECESSÁRIOS PARA O DESENVOLVIMENTO DO PROJETO PODERÃO SER CRIADOS COM A ESTRUTURA QUE ACHAR MELHOR. </br> </br>

>__Obs__: Lembre-se de que há o projeto pronto dentro da pasta *__base_answer__* de onde você pode tirar dúvida, inclusive, olhar a estrutura de arquivos.

#### Lista de Requisitos

## Tela de Relógio (index.html)

### 1 - Crie um Header

##### O que será validado?

- Será validado que a tela Relógio possui uma TAG `<header />`.


### 2 - Crie um Nav dentro do Header

Crie um `<nav />` que possua 3 elementos. <br>
Estes elementos devem ser links para navegação entre as telas.

##### O que será validado?

- Será validado que o `<header />` possui uma TAG `<nav />`;
- Será validado que a TAG `<nav />` possui 3 elementos.

### 3 - Crie um Main

##### O que será validado?

- Será validado que seu projeto possui uma TAG `<main />`.

### 4 - Crie um Título na página e um espaço para o Relógio

Aqui é necessário um pouco mais de atenção pois a TAG para o título deve ter, exatamente, a classe `class="title"` e a TAG com o relógio deve ter a classe `class="clock"` para que o teste passe.

##### O que será validado?

- Será validado que seu projeto possui um _título_;
- Será validado que seu projeto possui um espaço para o _relógio_.

## Tela de Temporizador (timer.html)

### 5 - Crie um Header

##### O que será validado?

- Será validado que a tela Temporizador possui uma TAG `<header />`.


### 6 - Crie um Nav dentro do Header

Crie um `<nav />` que possua 3 elementos. <br>
Estes elementos devem ser links para navegação entre as telas.

##### O que será validado?

- Será validado que o `<header />` possui uma TAG `<nav />`;
- Será validado que a TAG `<nav />` possui 3 elementos.

### 7 - Crie um Main

##### O que será validado?

- Será validado que seu projeto possui uma TAG `<main />`.

### 8 - Crie um Título na página e um espaço para o Temporizador

Assim como na tela anterior, o _título_ deve ter, exatamente, a classe `class="title"` e a TAG com o _temporizador_ deve ter a classe `class="time"`.

##### O que será validado?

- Será validado que seu projeto possui um _título_;
- Será validado que seu projeto possui um espaço para o _temporizador_.

### 9 - Faça que seja possível adicionar horas, minutos e segundos ao temporizador

Aqui será testado se é possível fazer todas estas ações descritas acima. <br>
O campo de horas deve ter a classe `class="hh"`, o campo de minutos deve ter a classe `class="mm"` e o campo de segundos deve ter a classe `class="ss"`.

##### O que será validado?

- Será validado que o valor inicial de horas, minutos e segundas é igual a 00 (valor em _String_);
- Será validado que é possível alterar estes valores.

### 10 - Crie um botão para iniciar a contagem

O botão deve ter a classe `class="start"`.

##### O que será validado?

- Será validado que o botão existe.

### 11 - Faça que o botão se torne funcional

##### O que será validado?

- Será validado que o botão inicia a contagem.

### 12 - Crie um botão para pausar a contagem

O botão deve ter a classe `class="stop"`.

##### O que será validado?

- Será validado que o botão existe.

### 13 - Faça que o botão se torne funcional

##### O que será validado?

- Será validado que o botão pausa a contagem.

### 14 - Crie um botão para zerar a contagem

O botão deve ter a classe `class="back-to-zero"`.

##### O que será validado?

- Será validado que o botão existe.

### 15 - Faça que o botão se torne funcional

##### O que será validado?

- Será validado que o botão zera o valor do campo de horas, minutos e segundos.

## Tela Pomodoro (pomodoro.html)

### 16 - Crie um Header

##### O que será validado?

- Será validado que a tela Pomodoro possui uma TAG `<header />`.

### 17 - Crie um Nav dentro do Header

Crie um `<nav />` que possua 3 elementos. <br>
Estes elementos devem ser links para navegação entre as telas.

##### O que será validado?

- Será validado que o `<header />` possui uma TAG `<nav />`;
- Será validado que a TAG `<nav />` possui 3 elementos.

### 18 - Crie um Main

##### O que será validado?

- Será validado que a tela Pomodoro possui uma TAG `<main />`.

### 19 - Crie um Título na página

Assim como na tela anterior, o _título_ deve ter, exatamente, a classe `class="title"`.

##### O que será validado?

- Será validado que seu projeto possui um _título_;

### 20 - Crie um subtítulo e espaço para a contagem do tempo (_TRABALHO_)

O subtítulo é para informar se a contagem é referente ao tempo dedicado ao trabalho ou ao descanso. <br>
O subtítulo deve ter, exatamente, a classe `class="work-timer-title"` com o texto `TRABALHO`. E a contagem do tempo deve ser iniciada em _25:00_ (valor em String). O espaço para a contagem deve ter a classe `class="work-timer"` para que os testes sejam realizados.

##### O que será validado?

- Será validado que há um subtítulo com o texto `TRABALHO`;
- Será validado que a contagem inicia em _25:00_.

### 21 - Crie um subtítulo e espaço para a contagem do tempo (_DESCANSO_)

O subtítulo deve ter, exatamente, a classe `class="rest-timer-title"` sem valor inicial. O espaço para a contagem deve ter a classe `class="rest-timer"` para que os testes sejam realizados. Este também deve estar sem um valor inicial. <br>
Estes valores devem ser acresentados ao iniciar o tempo de descanso.

##### O que será validado?

- Será validado que há um subtítulo com o valor vazio;
- Será validado que a contagem está com o valor vazio.

### 22 - Crie um botão para iniciar a contagem

O botão deve ter a classe `class="start"`.

##### O que será validado?

- Será validado que o botão existe;
- Será validado que o botão inicia a contagem.

### 23 - Crie um botão para pausar a contagem

O botão deve ter a classe `class="stop"`.

##### O que será validado?

- Será validado que o botão existe;
- Será validado que o botão pausa a contagem.

### 24 - Crie um botão para reiniciar a contagem

O botão deve ter a classe `class="restart"`.

##### O que será validado?

- Será validado que o botão existe;
- Será validado que o botão reinicia a contagem.

---

### Considerações Finais

*__Parabéns por chegar até aqui e concluir o Projeto Pomodoro__*

<img src='./img_readme/the-office-steve-carell_congratulations.gif'>

## Muito obrigado pelo seu voto de confiança!

Acesse o nosso grupo do Discord para se manter atualizado com relação a novos projetos, interagir comigo e com outras pessoas, tirar suas dúvidas e ajudar outros colegas.

Link para o Discord: https://discord.gg/KN4uxuaYg6
