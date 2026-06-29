/* ===========================================================
   Delikta Web — clientseitiger Sprachumschalter (DE/EN)
   - Kurztexte: über data-i18n="key" + STRINGS-Wörterbuch
   - Lange Rechtstexte: über data-lang-block="de|en" Container
   Keine Build-Abhängigkeit, kein Framework.
   =========================================================== */
(function () {
  "use strict";

  var STRINGS = {
    de: {
      "nav.home": "Spiel",
      "nav.privacy": "Datenschutz",
      "nav.delete": "Account löschen",

      "hero.kicker": "Ein neuer Kriminalfall · täglich",
      "hero.subline": "Ein neuer Fall. Jeden Tag.",
      "hero.lede": "Delikta ist ein täglicher Kriminalfall, der sich Kapitel für Kapitel vor dir entfaltet. Sichte Verdächtige, lies die Hinweise und überführe den Täter – allein mit Logik.",
      "hero.android": "Android",
      "hero.ios": "iOS",
      "hero.store.get": "Hol dir",
      "hero.store.on": "Lade aus dem",
      "hero.soon": "Bald",
      "hero.qr": "Scannen für Android",

      "about.kicker": "Die Idee",
      "about.title": "Ein Fall. Jeden Tag.",
      "about.text": "Jeden Tag wartet genau ein Fall auf dich – für alle gleich. Er entfaltet sich Kapitel für Kapitel: Du liest die Geschichte, lernst die Verdächtigen kennen und sammelst die Hinweise. Dann prüfst du, wer Motiv, Mittel und Gelegenheit hatte, und erhebst Anklage. Liegst du richtig, wächst deine Serie.",

      "cases.kicker": "Drei Falltypen",
      "cases.title": "Jeder Fall ist anders gelagert",
      "case.whodunit.no": "FALL-TYP A",
      "case.whodunit.title": "Täter",
      "case.whodunit.text": "Genau eine Person vereint Motiv, Mittel und Gelegenheit. Wer ist der Täter?",
      "case.komplizen.no": "FALL-TYP B",
      "case.komplizen.title": "Komplizen",
      "case.komplizen.text": "Die Tat erforderte zwei Komplizen – beide hatten Motiv, Mittel und Gelegenheit. Benenne beide.",
      "case.luege.no": "FALL-TYP C",
      "case.luege.title": "Falsche Aussage",
      "case.luege.text": "Die Aussagen widersprechen sich: Genau eine Zeugenaussage ist gelogen. Finde die Lüge.",

      "how.kicker": "So funktioniert's",
      "how.title": "Ermitteln statt raten",
      "how.s1.title": "Geschichte lesen",
      "how.s1.text": "Der Fall entfaltet sich Kapitel für Kapitel – Verdächtige und Hinweise tauchen nach und nach auf.",
      "how.s2.title": "Raster führen",
      "how.s2.text": "Hake im Ermittlungsraster ab, wer Motiv, Mittel und Gelegenheit hatte.",
      "how.s3.title": "Anklage erheben",
      "how.s3.text": "Triff deine Entscheidung. Die Auflösung zeigt die lückenlose Beweiskette.",
      "how.attr.motive": "Motiv",
      "how.attr.means": "Mittel",
      "how.attr.opportunity": "Gelegenheit",

      "feat.kicker": "Im Spiel",
      "feat.title": "Mehr als ein Rätsel",
      "feat.story.title": "Fall als Geschichte",
      "feat.story.text": "Jeder Fall entfaltet sich Kapitel für Kapitel. Du folgst der Erzählung, lernst die Verdächtigen mit Porträt und Aussage kennen und deckst die Hinweise Schritt für Schritt auf.",
      "feat.streak.title": "Halte deine Serie",
      "feat.streak.text": "Löse den Fall des Tages und halte deine Serie am Leben. Melde dich optional mit Google oder Apple an – so wandert dein Fortschritt geräteübergreifend mit.",

      "shots.kicker": "Einblick",
      "shots.title": "Ermittlerischer Noir-Look",
      "shots.note": "Vorschau-Darstellungen – echte Screenshots folgen.",

      "footer.tagline": "Ein neuer Fall. Jeden Tag.",
      "footer.contact": "Kontakt",
      "footer.privacy": "Datenschutz",
      "footer.delete": "Account löschen",

      "privacy.kicker": "Rechtliches",
      "privacy.title": "Datenschutzerklärung",
      "delete.kicker": "Konto",
      "delete.title": "Account löschen"
    },
    en: {
      "nav.home": "Game",
      "nav.privacy": "Privacy",
      "nav.delete": "Delete account",

      "hero.kicker": "A new crime case · daily",
      "hero.subline": "A new case. Every day.",
      "hero.lede": "Delikta is a daily crime case that unfolds before you chapter by chapter. Review the suspects, read the clues and convict the culprit – using logic alone.",
      "hero.android": "Android",
      "hero.ios": "iOS",
      "hero.store.get": "Get it on",
      "hero.store.on": "Download on the",
      "hero.soon": "Soon",
      "hero.qr": "Scan for Android",

      "about.kicker": "The idea",
      "about.title": "One case. Every day.",
      "about.text": "Every day a single case awaits you – the same for everyone. It unfolds chapter by chapter: you read the story, get to know the suspects and gather the clues. Then you weigh who had motive, means and opportunity, and make your accusation. Get it right and your streak grows.",

      "cases.kicker": "Three case types",
      "cases.title": "Every case is set up differently",
      "case.whodunit.no": "CASE TYPE A",
      "case.whodunit.title": "The Culprit",
      "case.whodunit.text": "Exactly one person combines motive, means and opportunity. Who is the culprit?",
      "case.komplizen.no": "CASE TYPE B",
      "case.komplizen.title": "Accomplices",
      "case.komplizen.text": "The crime required two accomplices – both had motive, means and opportunity. Name them both.",
      "case.luege.no": "CASE TYPE C",
      "case.luege.title": "The False Statement",
      "case.luege.text": "The statements contradict each other: exactly one witness is lying. Find the lie.",

      "how.kicker": "How it works",
      "how.title": "Investigate, don't guess",
      "how.s1.title": "Read the story",
      "how.s1.text": "The case unfolds chapter by chapter – suspects and clues appear one by one.",
      "how.s2.title": "Keep the grid",
      "how.s2.text": "Tick off on the investigation grid who had motive, means and opportunity.",
      "how.s3.title": "Make the accusation",
      "how.s3.text": "Make your call. The solution reveals the complete chain of evidence.",
      "how.attr.motive": "Motive",
      "how.attr.means": "Means",
      "how.attr.opportunity": "Opportunity",

      "feat.kicker": "In the game",
      "feat.title": "More than a puzzle",
      "feat.story.title": "A case as a story",
      "feat.story.text": "Every case unfolds chapter by chapter. You follow the narrative, get to know the suspects with portrait and statement, and uncover the clues step by step.",
      "feat.streak.title": "Keep your streak",
      "feat.streak.text": "Solve the case of the day and keep your streak alive. Sign in with Google or Apple if you like – your progress then follows you across devices.",

      "shots.kicker": "A look inside",
      "shots.title": "Investigative noir look",
      "shots.note": "Preview renders – real screenshots to follow.",

      "footer.tagline": "A new case. Every day.",
      "footer.contact": "Contact",
      "footer.privacy": "Privacy",
      "footer.delete": "Delete account",

      "privacy.kicker": "Legal",
      "privacy.title": "Privacy Policy",
      "delete.kicker": "Account",
      "delete.title": "Delete account"
    }
  };

  var SUPPORTED = ["de", "en"];
  var STORAGE_KEY = "delikta-lang";

  function pickInitial() {
    var fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (fromQuery && SUPPORTED.indexOf(fromQuery) !== -1) return fromQuery;
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "de").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "de";
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "de";
    var dict = STRINGS[lang];

    // 1) Kurztexte
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    // Attribut-Übersetzungen (z. B. aria-label / title / content)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr"); // "attr:key,attr:key"
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });

    // 2) Sprachblöcke (lange Texte)
    document.querySelectorAll("[data-lang-block]").forEach(function (el) {
      el.classList.toggle("lang-active", el.getAttribute("data-lang-block") === lang);
    });

    // 3) Umschalter-Status
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });

    // 4) <html lang> + persistieren
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    apply(pickInitial());
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-set-lang"));
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
