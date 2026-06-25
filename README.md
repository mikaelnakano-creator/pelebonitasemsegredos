# LP Pele Bonita — Duas versões no mesmo link

Esta versão mantém:
- Desktop completo, baseado na versão final enviada.
- Mobile simplificado, mais curto e mais focado em conversão.

## Como funciona

O mesmo `index.html` contém duas versões:

- `.desktop-page`: aparece em telas acima de 768px.
- `.mobile-page`: aparece em telas até 768px.

Tudo é controlado pelo CSS em `assets/css/style.css`.

## Configurar checkout

Troque o link em:

`assets/js/config.js`

```js
const CHECKOUT_URL = "https://SEU-LINK-DA-KIWIFY-AQUI";
```

## Imagens esperadas

Mantenha os arquivos nestes caminhos:

- `assets/img/pamela-hero.jpg`
- `assets/img/pamela-about.jpg`
- `assets/img/depoimentos/depoimento-1.jpg`
- `assets/img/depoimentos/depoimento-2.jpg`
- `assets/img/depoimentos/depoimento-3.jpg`
- `assets/img/resultados/resultado-01.jpg`
- `assets/img/resultados/resultado-02.jpg`
- `assets/img/resultados/resultado-03.jpg`
- `assets/img/og-image.jpg`
- `assets/img/favicon.png`

## Ajustes finais mobile

Alterações aplicadas:
- Foto principal mobile aumentada para 360px e centralizada verticalmente.
- Selo visual de 7 dias adicionado na seção de garantia mobile.
- Seção "O que você recebe" mantida e ampliada no mobile.
- FAQ mobile completo com as mesmas perguntas principais da versão desktop.
