# AFA Excavation | Pavers — Landing Page

Site estático (HTML + CSS + JavaScript puro). Sem build, sem dependências: funciona em qualquer hospedagem.

## Estrutura

```
index.html            página (seções semânticas)
css/styles.css        todos os estilos (mobile first)
js/data.js            ★ DADOS EDITÁVEIS: links, serviços, fotos dos carrosséis
js/i18n.js            traduções EN / PT / ES e troca de idioma
js/carousel.js        componente de carrossel reutilizável
js/main.js            monta os slides, menu mobile, links
assets/images/        logo, fotos do hero/about, favicon
  services/           coloque aqui as fotos dos serviços
  projects/           coloque aqui as fotos dos projetos
```

## Rodar localmente

Opção 1 — dar dois cliques em `index.html` (funciona direto no navegador).

Opção 2 — servidor local:
```
python3 -m http.server 8080
# abra http://localhost:8080
```

## Adicionar fotos aos carrosséis

Tudo é feito em `js/data.js`. Não é preciso mexer em HTML/CSS.

**Serviços** — salve a foto em `assets/images/services/` e preencha o campo `image`:
```js
{ id: "pavers", image: "assets/images/services/pavers.jpg" },
```
Campo vazio (`""`) = slide vazio, elegante, sem imagem quebrada.

**Projetos** — cada linha da lista é um slide. Para adicionar, copie uma linha; para remover, apague:
```js
{ image: "assets/images/projects/driveway-01.jpg", alt: "Paver driveway in Boca Raton" },
```
`alt` descreve a foto (acessibilidade e SEO). Se a foto não carregar, o slide volta ao estado vazio.

**Dicas de imagem:** proporção 3:2 para serviços e 16:9 para projetos; largura de 1600 px; formato JPG/WebP com até ~250 KB (use squoosh.app para comprimir). As fotos usam lazy loading automaticamente.

## Trocar textos, links ou idiomas

- Links do WhatsApp e do Instagram: `js/data.js` → `links` (um único lugar; vale para botões, ícones flutuantes e rodapé).
- Textos nos 3 idiomas: `js/i18n.js`.

## Publicar na internet (grátis)

Qualquer opção abaixo serve; basta enviar a pasta inteira:

- **Netlify Drop** — arraste a pasta em app.netlify.com/drop.
- **Cloudflare Pages** ou **Vercel** — novo projeto → upload da pasta (sem comando de build, diretório de saída `/`).
- **GitHub Pages** — suba para um repositório e ative Pages na branch `main`.

Depois de publicar: descomente/adicione `<link rel="canonical">` no `index.html` com o endereço final.

## Observações

- As fontes (Montserrat e Inter) vêm do Google Fonts; sem internet o site usa fontes do sistema.
- `assets/images/hero-driveway.jpg` e `about-pavers.jpg` foram recortadas do mockup enviado e têm resolução baixa. Substitua pelas fotos originais em alta (mesmo nome de arquivo, ideal ≥ 1800 px de largura).
