# Fluxo completo — LP + Quiz + Resultado

Este pacote cria três páginas separadas no mesmo projeto Vercel:

```txt
/quiz       → Página de entrada, visual parecida com a LP, com botão "Responder quiz"
/analise    → Quiz com uma pergunta por vez, barra de progresso e botão final "Enviar análise"
/resultado  → Página com diagnóstico, bloco de VSL e CTA para checkout
```

## Como instalar

Copie as três pastas para a raiz do projeto principal da LP:

```txt
seu-projeto/
├─ index.html
├─ assets/
├─ obrigado/
├─ quiz/
├─ analise/
└─ resultado/
```

Depois faça novo deploy no Vercel.

## URLs finais

```txt
https://pelebonitasemsegredos.vercel.app/quiz
https://pelebonitasemsegredos.vercel.app/analise
https://pelebonitasemsegredos.vercel.app/resultado
```

## Configurar link do checkout

Abra:

```txt
resultado/assets/js/resultado.js
```

Procure:

```js
const CHECKOUT_URL = "#";
```

Troque pelo link real do checkout da Cakto:

```js
const CHECKOUT_URL = "https://pay.cakto.com.br/SEU-CHECKOUT";
```

## Como funciona o fluxo

1. A pessoa entra em `/quiz`.
2. Clica em `Responder quiz agora`.
3. Vai para `/analise`.
4. Responde uma pergunta por vez.
5. Na última pergunta, clica em `Enviar análise`.
6. O JavaScript calcula o resultado.
7. A pessoa é enviada para `/resultado?tipo=...`.
8. A página de resultado mostra o diagnóstico correspondente + VSL + CTA.

## Substituir a VSL

Em:

```txt
resultado/index.html
```

Procure o bloco:

```html
<div class="video-placeholder">
```

Substitua esse bloco por um iframe do vídeo da Pamela.

Exemplo:

```html
<iframe src="URL_DO_VIDEO" title="VSL Pamela Santos" allowfullscreen></iframe>
```

Depois ajuste o CSS, se necessário.

## Resultados possíveis

- acne
- oleosidade
- manchas
- sensibilidade
- linhas
- cicatrizes

A pergunta 1 tem peso extra porque representa a principal queixa declarada pela pessoa.
