# Página /obrigado com Upsell — Pamela Santos

Esta página foi criada para ficar dentro do mesmo projeto Vercel da oferta principal.

URL desejada:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

## Arquivos

- `obrigado/index.html`
- `obrigado/assets/img/avaliacao-digital-da-pele.png`

## Como instalar no projeto já existente da LP

1. Baixe e extraia este ZIP.
2. Copie a pasta `obrigado`.
3. Cole a pasta `obrigado` na raiz do projeto da LP principal.
4. Faça novo deploy no Vercel.

A estrutura deve ficar parecida com:

```txt
seu-projeto/
├─ index.html
├─ assets/
│  ├─ css/
│  └─ img/
└─ obrigado/
   ├─ index.html
   └─ assets/
      └─ img/
         └─ avaliacao-digital-da-pele.png
```

Depois do deploy, acesse:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

## Configuração na Cakto

Na tela do produto principal:

1. Vá em `Upsell / Downsell`.
2. Ative: `Esse produto tem uma página de obrigado personalizada ou upsell`.
3. No campo `Cartão ou Pix aprovado`, cole:

```txt
https://pelebonitasemsegredos.vercel.app/obrigado
```

4. Mantenha ativado:
   `Redirecionar upsell ignorando falhas nos pagamentos de order bumps`.

5. Em e-mail de confirmação, escolha:
   `Enviar após concluir as ofertas de upsell`.

## Botões da Cakto

O botão de aceitar usa:

```txt
offer-id="35pdht5"
```

Não altere esse ID a menos que você gere uma nova oferta na Cakto.

Tanto aceitar quanto recusar estão configurados para:

```txt
members_area
```

Ou seja, depois da decisão, a cliente será enviada para a área de membros.
