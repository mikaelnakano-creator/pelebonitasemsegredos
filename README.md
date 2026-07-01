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


## Atualização desta versão

Foi adicionada uma tela de envio após o botão `Enviar análise`.

Fluxo:
- Clique em `Enviar análise`
- Tela `Enviando suas respostas...`
- Barra de carregamento de 0% a 100%
- Etapas visuais de processamento
- Redirecionamento automático para `/resultado?tipo=...`

O tempo padrão é aproximadamente 3,8 segundos.
Para alterar, abra `quiz/index.html` e procure:

```js
const duration = 3800;
```

Altere para:
- `3000` = 3 segundos
- `4000` = 4 segundos
- `5000` = 5 segundos


## Atualização — LP de entrada mais completa

A página `/quiz` agora começa com uma estrutura mais completa antes das perguntas:

- Hero focado na dor: gastar dinheiro com produtos que não funcionam
- Promessa de análise guiada 100% gratuita
- Seção de ciclo de dor: compra, tenta skincare, mas a pele não melhora
- Seção de autoridade da Pamela Santos
- Explicação do método em 3 passos
- CTA final para iniciar a análise

A primeira pergunta só aparece depois da pessoa clicar no CTA.


## Atualização — linguagem alinhada para teste A/B

Esta versão foi ajustada para conversar com o mesmo anúncio que leva para:

- LP principal
- Página do quiz

Mensagem central:
"Pare de gastar dinheiro com produtos que não funcionam. Antes de comprar outro produto, descubra o que sua pele realmente precisa e siga uma rotina com direção."

Também foi incluído o arquivo:
COPY_FUNIL_ALINHADO.txt

Ele contém a promessa central, dor principal, mecanismo, ponte para resultado e estrutura de VSL.


## Ajustes desta versão

- Barra de progresso não aparece mais na tela inicial, evitando sobrepor o título.
- Barra passa a aparecer somente depois que a pessoa começa o quiz.
- Título principal da página `/quiz` foi reduzido para melhorar leitura no mobile.
