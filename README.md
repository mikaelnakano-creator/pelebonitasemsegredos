# LP com Quiz — Método Pele Bonita Sem Segredos

Esta é a segunda versão da LP com quiz, resultado personalizado, bloco de VSL e CTA para o checkout.

## Como publicar no mesmo projeto Vercel

Copie a pasta `quiz` para a raiz do projeto principal.

A URL final ficará:

https://pelebonitasemsegredos.vercel.app/quiz

## Configurar link do checkout

Abra:

quiz/assets/js/quiz.js

Procure:

const CHECKOUT_URL = "#";

Troque `#` pelo link do checkout da Cakto.

## Substituir VSL

No arquivo `quiz/index.html`, procure o bloco `video-placeholder` e substitua por iframe do vídeo.

## Lógica do resultado

Cada resposta soma ponto para uma das queixas: acne, oleosidade, manchas, sensibilidade, linhas ou cicatrizes. A pergunta 1 tem peso maior.
