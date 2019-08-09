const translations = {
  greeting: {
    en: "Hello!",
    es: "¡Hola!"
  }
};

export default function Translate(language, textKey) {
  return translations[textKey][language];
}
