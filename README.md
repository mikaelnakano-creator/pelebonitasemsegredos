# Página /obrigado sem upsell — Pamela Santos

Esta é uma página de obrigado limpa, sem upsell, para usar depois da compra aprovada.

URL desejada:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

## Estrutura

Copie a pasta `obrigado` para a raiz do projeto principal.

```txt
seu-projeto/
├─ index.html
├─ assets/
└─ obrigado/
   ├─ index.html
   └─ assets/
      └─ img/
         └─ metodo-pele-bonita.png
```

## Configuração na Cakto

Na tela do produto principal:

1. Ative:
   `Esse produto tem uma página de obrigado personalizada ou upsell`

2. Em `Cartão ou Pix aprovado`, coloque:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

3. Como você vai usar order bump e remover upsell, pode manter:
   `Redirecionar upsell ignorando falhas...` ativado ou não. Isso não deve impactar se não houver upsell.

4. E-mail:
   Como não terá upsell, pode usar:
   `Enviar imediatamente após o pagamento`.

## Redirecionamento automático para área de membros

No arquivo:

```txt
obrigado/index.html
```

Procure este trecho:

```js
const MEMBERS_AREA_URL = "#";
```

Troque o `#` pela URL real da área de membros da Cakto.

Exemplo:

```js
const MEMBERS_AREA_URL = "https://app.cakto.com.br/sua-area-de-membros";
```

Depois de alterar, faça novo deploy no Vercel.

Enquanto o valor estiver como `#`, a página não redireciona automaticamente por segurança.
