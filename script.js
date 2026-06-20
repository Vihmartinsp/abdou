const translations = {
  pt: {
    languageLabel: "Idioma",
    kicker: "Do Brasil para a Argélia, com todo meu carinho",
    title: "Feliz aniversário, Abdou 💙",
    subtitle: "Eu não tenho nossas fotos ainda, então transformei essa distância em um céu azul cheio de carinho, estrelas e um pedacinho das cores da Argélia.",
    wish: "Que seu novo ano seja leve, bonito e cheio de motivos para sorrir. Mesmo longe, você é uma parte linda dos meus dias.",
    noteOneTitle: "Seu azul favorito",
    noteOneText: "Coloquei azul por todos os cantinhos para lembrar de você e deixar tudo calmo, doce e do jeitinho que você gosta.",
    noteTwoTitle: "Argélia no coração",
    noteTwoText: "O verde, o branco, o vermelho, a lua e a estrela aparecem aqui como um abraço carinhoso para o lugar onde você está.",
    noteThreeTitle: "Distância pequena",
    noteThreeText: "Brasil e Argélia parecem longe no mapa, mas você fica pertinho em pensamento, em oração e no meu coração.",
    button: "Abrir meu recadinho",
    surpriseTitle: "Abdou, hoje o mundo comemora você.",
    surpriseText: "Espero que você sinta, mesmo daí, todo o carinho que coloquei nessa página. Feliz aniversário, meu amor. Que Allah ilumine seus caminhos e que seu sorriso nunca falte. 💙"
  },
  en: {
    languageLabel: "Language",
    kicker: "From Brazil to Algeria, with all my affection",
    title: "Happy birthday, Abdou 💙",
    subtitle: "We do not have our photos yet, so I turned the distance into a blue sky full of affection, stars, and a little piece of Algeria's colors.",
    wish: "May your new year feel light, beautiful, and full of reasons to smile. Even far away, you are a lovely part of my days.",
    noteOneTitle: "Your favorite blue",
    noteOneText: "I placed blue in every corner to remind me of you and make everything calm, sweet, and exactly the way you like it.",
    noteTwoTitle: "Algeria in my heart",
    noteTwoText: "Green, white, red, the moon, and the star are here like a tender hug for the place where you are.",
    noteThreeTitle: "A tiny distance",
    noteThreeText: "Brazil and Algeria look far on a map, but you stay close in my thoughts, my prayers, and my heart.",
    button: "Open my little note",
    surpriseTitle: "Abdou, today the world celebrates you.",
    surpriseText: "I hope you can feel, even from there, all the affection I placed on this page. Happy birthday, my love. May Allah light your path and may your smile never disappear. 💙"
  },
  fr: {
    languageLabel: "Langue",
    kicker: "Du Brésil à l'Algérie, avec toute mon affection",
    title: "Joyeux anniversaire, Abdou 💙",
    subtitle: "Nous n'avons pas encore nos photos, alors j'ai transformé la distance en un ciel bleu rempli de tendresse, d'étoiles et d'un petit morceau des couleurs de l'Algérie.",
    wish: "Que ta nouvelle année soit douce, belle et remplie de raisons de sourire. Même de loin, tu es une jolie partie de mes journées.",
    noteOneTitle: "Ton bleu préféré",
    noteOneText: "J'ai mis du bleu dans tous les coins pour penser à toi et rendre tout calme, doux et comme tu l'aimes.",
    noteTwoTitle: "L'Algérie dans le cœur",
    noteTwoText: "Le vert, le blanc, le rouge, la lune et l'étoile sont ici comme un câlin tendre pour l'endroit où tu es.",
    noteThreeTitle: "Une petite distance",
    noteThreeText: "Le Brésil et l'Algérie semblent loin sur la carte, mais tu restes proche dans mes pensées, mes prières et mon cœur.",
    button: "Ouvrir mon petit message",
    surpriseTitle: "Abdou, aujourd'hui le monde te célèbre.",
    surpriseText: "J'espère que tu sens, même de là-bas, toute l'affection que j'ai mise dans cette page. Joyeux anniversaire, mon amour. Qu'Allah illumine ton chemin et que ton sourire ne manque jamais. 💙"
  },
  ar: {
    languageLabel: "اللغة",
    kicker: "من البرازيل إلى الجزائر، بكل حناني",
    title: "عيد ميلاد سعيد يا عبدو 💙",
    subtitle: "ليست لدينا صور معًا بعد، لذلك حوّلت المسافة إلى سماء زرقاء مليئة بالحب والنجوم ولمسة من ألوان الجزائر.",
    wish: "أتمنى أن تكون سنتك الجديدة خفيفة وجميلة ومليئة بالأسباب التي تجعلك تبتسم. رغم البعد، أنت جزء جميل من أيامي.",
    noteOneTitle: "لونك الأزرق المفضل",
    noteOneText: "وضعت الأزرق في كل زاوية كي أتذكرك، وليكون كل شيء هادئًا ولطيفًا كما تحب.",
    noteTwoTitle: "الجزائر في القلب",
    noteTwoText: "الأخضر والأبيض والأحمر والهلال والنجمة هنا مثل عناق حنون للمكان الذي تعيش فيه.",
    noteThreeTitle: "مسافة صغيرة",
    noteThreeText: "تبدو البرازيل والجزائر بعيدتين على الخريطة، لكنك قريب في أفكاري ودعائي وقلبي.",
    button: "افتح رسالتي الصغيرة",
    surpriseTitle: "عبدو، اليوم العالم يحتفل بك.",
    surpriseText: "أتمنى أن تشعر، حتى من هناك، بكل الحب الذي وضعته في هذه الصفحة. عيد ميلاد سعيد يا حبي. الله ينور طريقك ولا تغيب ابتسامتك أبدًا. 💙"
  }
};

const languageButtons = document.querySelectorAll(".language-button");
const translatableElements = document.querySelectorAll("[data-i18n]");
const surpriseButton = document.querySelector("#surpriseButton");
const surprise = document.querySelector("#surprise");

function setLanguage(language) {
  const dictionary = translations[language] || translations.pt;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

surpriseButton.addEventListener("click", () => {
  document.body.classList.add("is-celebrating");
  surprise.classList.add("is-visible");
  surpriseButton.hidden = true;
  surprise.scrollIntoView({ behavior: "smooth", block: "center" });
});
