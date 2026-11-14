/* ==========================================================
   AFA Excavation | Pavers — DADOS EDITÁVEIS
   Para adicionar fotos, preencha o campo "image" com o caminho
   do arquivo, por exemplo: "assets/images/services/pavers.jpg".
   Campo vazio ("") = slide vazio, sem imagem quebrada.
   ========================================================== */
window.AFA_DATA = {
  links: {
    whatsapp: "https://api.whatsapp.com/send/?phone=15618149467&text&type=phone_number&app_absent=0",
    instagram: "https://www.instagram.com/afampavers"
  },

  /* Serviços: "id" liga o slide aos textos em js/i18n.js (services.<id>) */
  services: [
    { id: "excavation",      image: "" },
    { id: "pavers",          image: "" },
    { id: "driveways",       image: "" },
    { id: "poolDecks",       image: "" },
    { id: "patios",          image: "" },
    { id: "walkways",        image: "" },
    { id: "sidewalks",       image: "" },
    { id: "entryways",       image: "" },
    { id: "parkingAreas",    image: "" },
    { id: "sitePreparation", image: "" },
    { id: "basePreparation", image: "" },
    { id: "drainage",        image: "" }
  ],

  /* Projetos: cada item é um slide. Para adicionar, copie uma linha.
     Para remover, apague a linha. "alt" é o texto alternativo da foto. */
  projects: [
    { image: "", alt: "" },
    { image: "", alt: "" },
    { image: "", alt: "" },
    { image: "", alt: "" },
    { image: "", alt: "" },
    { image: "", alt: "" }
  ]
};
