# Quiz Pamela — versão corrigida blindada

Esta versão usa CSS e JavaScript embutidos dentro do próprio HTML.

Isso evita o problema da página abrir sem estilo quando a pasta assets/css ou assets/js não sobe corretamente.

## Instalação

Substitua as pastas antigas:

- quiz/
- resultado/

por estas novas pastas.

Estrutura:

seu-projeto/
├─ quiz/
│  └─ index.html
└─ resultado/
   └─ index.html

## URLs

/quiz
/resultado

## Configurar checkout

Abra:

resultado/index.html

Procure:

const CHECKOUT_URL = "#";

Troque pelo link real do checkout da Cakto.
