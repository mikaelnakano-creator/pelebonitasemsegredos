# Página /obrigado clean — um bloco só

Esta versão remove o bloco de imagem lateral e deixa a página de obrigado mais simples, clean e centralizada.

## Como instalar

Copie a pasta `obrigado` para a raiz do projeto principal e faça deploy no Vercel.

URL final:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

## Como configurar redirecionamento automático

Abra:

```txt
obrigado/index.html
```

Procure:

```js
const MEMBERS_AREA_URL = "#";
```

Troque o `#` pela URL real da área de membros da Cakto.

Exemplo:

```js
const MEMBERS_AREA_URL = "https://app.cakto.com.br/members/sua-area";
```

Pronto. A página vai redirecionar automaticamente depois de 8 segundos.

## Como mudar o tempo

No mesmo arquivo, altere:

```js
const AUTO_REDIRECT_SECONDS = 8;
```

Para 5, 10 ou outro valor.

## Como deixar só com botão, sem redirecionamento automático

Remova ou comente este trecho no final do arquivo:

```js
const interval = setInterval(() => {
  remaining -= 1;
  timerText.innerHTML = `Você será redirecionada automaticamente em <strong>${remaining} segundos</strong>.`;

  if (remaining <= 0) {
    clearInterval(interval);
    window.location.href = MEMBERS_AREA_URL;
  }
}, 1000);
```

E altere o texto do timer, se quiser.
