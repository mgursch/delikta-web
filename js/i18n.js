/* ===========================================================
   Delikta Web — clientseitiger Sprachumschalter (DE/EN)
   - Kurztexte:      data-i18n="key"            -> textContent
   - Mit Markup:     data-i18n-html="key"       -> innerHTML (z. B. <b>, <span class="accent">)
   - Attribute:      data-i18n-attr="attr:key,…" -> setAttribute (alt, aria-label, title, src …)
   - Lange Blöcke:   data-lang-block="de|en"    -> Sichtbarkeit (Rechtsseiten)
   Default-Sprache: EN. Browsersprache überschreibt (DE-Browser -> DE).
   Keine Build-Abhängigkeit, kein Framework.
   =========================================================== */
(function () {
  "use strict";

  var STRINGS = {
    de: {
      /* ---- Meta ---- */
      "meta.title": "Delikta — Der Fall entfaltet sich",
      "meta.description": "Delikta: Ein neuer Kriminalfall. Jeden Tag. Erlebe, wie sich der Fall Kapitel für Kapitel entfaltet.",

      /* ---- Topbar / Wortmarke ---- */
      "brand.wordmark": "DELIK<b>TA</b>",

      /* ---- Hero ---- */
      "hero.icon.alt": "Delikta",
      "hero.h1": "DELIK<b>TA</b>",
      "hero.kicker": "Ein neuer Kriminalfall · täglich",
      "hero.lede": "Ein Toter im Ledersessel. Vier Verdächtige. Eine Wahrheit, die sich erst beim Weiterlesen zeigt.",
      "hero.scrollcue": "Fall öffnen",

      /* ---- Kapitel: Kriminalgeschichte ---- */
      "chapter.krimi.img.alt": "Delikta — der Fall entfaltet sich Kapitel für Kapitel",
      "chapter.krimi.num": "Die Kriminalgeschichte",
      "chapter.krimi.h2": "Der Fall entfaltet sich <span class=\"accent\">Kapitel für Kapitel.</span>",
      "chapter.krimi.p": "Kein trockenes Rätsel, sondern eine Geschichte. Du liest dich durch die Nacht des Verbrechens – und mit jedem Kapitel treten neue Verdächtige und Hinweise ans Licht. Lass dir den Fall sogar vorlesen.",

      /* ---- Zitat / Akte ---- */
      "quote.stamp": "Akte #128",
      "quote.text": "<span class=\"dc\">D</span>er Hausdiener findet den Konsul im Ledersessel, die Hände gefaltet, das Gesicht blass wie Porzellan – und neben ihm eine halbleere Flasche Kognak.",
      "quote.cite": "— aus „Stiller Tod im Rauchsalon“",

      /* ---- Kapitel: Verdächtige ---- */
      "chapter.suspects.img.alt": "Delikta — die Verdächtigen mit Porträt, Rolle und Aussage",
      "chapter.suspects.num": "Die Verdächtigen",
      "chapter.suspects.h2": "Jeder hat ein <span class=\"accent\">Motiv – und eine Geschichte.</span>",
      "chapter.suspects.p": "Lerne die Verdächtigen kennen: Porträt, Rolle und ihre Beziehung zum Opfer. Ihre Aussagen und Alibis widersprechen sich – und genau in diesen Widersprüchen liegt die Wahrheit.",

      /* ---- Kapitel: Ermittlung ---- */
      "chapter.investigation.img.alt": "Delikta — Verdächtige und Ermittlungsraster",
      "chapter.investigation.num": "Die Ermittlung",
      "chapter.investigation.h2": "Sammle deine <span class=\"accent\">Beweiskette selbst.</span>",
      "chapter.investigation.p": "Tippe im Text auf jeden Satz, der dir verdächtig vorkommt – er wandert in dein Hinweisbuch. Prüfe im Ermittlungsraster, wer Motiv, Mittel und Gelegenheit hatte, und erhebe Anklage.",
      "chapter.investigation.chip.motiv": "Motiv",
      "chapter.investigation.chip.mittel": "Mittel",
      "chapter.investigation.chip.gelegenheit": "Gelegenheit",

      /* ---- Falltypen ---- */
      "types.kicker": "Drei Falltypen",
      "types.h2": "Jeder Fall ist anders gelagert",
      "types.a.tag": "Fall-Typ A",
      "types.a.h3": "Täter",
      "types.a.p": "Genau eine Person vereint Motiv, Mittel und Gelegenheit. Wer ist der Täter?",
      "types.b.tag": "Fall-Typ B",
      "types.b.h3": "Komplizen",
      "types.b.p": "Die Tat erforderte zwei Komplizen – beide hatten Motiv, Mittel und Gelegenheit. Benenne beide.",
      "types.c.tag": "Fall-Typ C",
      "types.c.h3": "Falsche Aussage",
      "types.c.p": "Die Aussagen widersprechen sich: Genau eine ist gelogen. Finde die Lüge.",

      /* ---- Feature: Delikts ---- */
      "feature.delikts.img.alt": "Delikta — Deliktübersicht mit Kontostand und Verlauf",
      "feature.delikts.kicker": "Deine Ermittlungswährung",
      "feature.delikts.h2": "Delikts, wenn's knifflig wird",
      "feature.delikts.p": "Setze Delikts für einen Tipp, einen zweiten Versuch oder eine zusätzliche Befragung ein. Verdiene sie kostenlos per Video – oder hol dir ein Paket, wenn du magst.",

      /* ---- Stats / Serie ---- */
      "stats.kicker": "Bleib dran",
      "stats.h2": "Halte deine Serie – miss dich mit anderen",
      "stats.faelle.label": "Fälle im Jahr",
      "stats.serie.label": "Tage Serie in Folge",
      "stats.bestenlisten.label": "Bestenlisten",
      "stats.note": "Mit dem Homescreen-Widget hast du deinen Tagesfall und deine Serie immer im Blick – samt Countdown und Warnung, bevor die Serie reißt.",

      /* ---- Auflösung / CTA ---- */
      "solve.stamp.alt": "Gelöst",
      "solve.stamp.src": "assets/stamp-geloest.svg",
      "solve.h2": "Der nächste Fall wartet.",
      "solve.p": "Lade Delikta und beginne noch heute deine Serie. Ein neuer Fall. Jeden Tag.",
      "solve.android.badge.aria": "Delikta bei Google Play herunterladen",
      "solve.android.qr.aria": "Delikta bei Google Play – QR-Code scannen",
      "solve.android.qr.img.alt": "QR-Code: Delikta bei Google Play",
      "solve.android.qr.label": "Scannen & laden",
      "solve.ios.badge.aria": "Delikta im App Store – bald verfügbar",
      "solve.ios.soon": "In Kürze verfügbar",

      /* ---- Footer (index.html: brandline mit Markup; tagline = reiner Slogan für Rechtsseiten) ---- */
      "footer.brandline": "<strong style=\"color:var(--text)\">DELIKTA</strong> — Ein neuer Fall. Jeden Tag.",
      "footer.link.privacy": "Datenschutz",
      "footer.link.delete": "Account löschen",
      "footer.link.contact": "Kontakt",

      /* ---- Sprachumschalter (aria) ---- */
      "lang.switch.aria": "Sprache / Language",

      /* ===== Rechtsseiten (privacy.html / delete-account.html) ===== */
      "nav.home": "Spiel",
      "nav.privacy": "Datenschutz",
      "nav.delete": "Account löschen",
      "footer.contact": "Kontakt",
      "footer.privacy": "Datenschutz",
      "footer.delete": "Account löschen",
      "footer.tagline": "Ein neuer Fall. Jeden Tag.",
      "privacy.kicker": "Rechtliches",
      "privacy.title": "Datenschutzerklärung",
      "delete.kicker": "Konto",
      "delete.title": "Account löschen"
    },

    en: {
      /* ---- Meta ---- */
      "meta.title": "Delikta — The case unfolds",
      "meta.description": "Delikta: A new crime case. Every day. Watch the case unfold chapter by chapter.",

      /* ---- Topbar / Wordmark ---- */
      "brand.wordmark": "DELIK<b>TA</b>",

      /* ---- Hero ---- */
      "hero.icon.alt": "Delikta",
      "hero.h1": "DELIK<b>TA</b>",
      "hero.kicker": "A new crime case · daily",
      "hero.lede": "A dead man in a leather armchair. Four suspects. A truth that only reveals itself as you read on.",
      "hero.scrollcue": "Open the file",

      /* ---- Chapter: the crime story ---- */
      "chapter.krimi.img.alt": "Delikta — the case unfolds chapter by chapter",
      "chapter.krimi.num": "The crime story",
      "chapter.krimi.h2": "The case unfolds <span class=\"accent\">chapter by chapter.</span>",
      "chapter.krimi.p": "Not a dry puzzle, but a story. You read your way through the night of the crime – and with every chapter new suspects and clues come to light. You can even have the case read aloud.",

      /* ---- Quote / file ---- */
      "quote.stamp": "File #128",
      "quote.text": "<span class=\"dc\">T</span>he butler finds the consul in the leather armchair, hands folded, his face pale as porcelain – and beside him a half-empty bottle of cognac.",
      "quote.cite": "— from “A Quiet Death in the Smoking Room”",

      /* ---- Chapter: the suspects ---- */
      "chapter.suspects.img.alt": "Delikta — the suspects with portrait, role and statement",
      "chapter.suspects.num": "The suspects",
      "chapter.suspects.h2": "Everyone has a <span class=\"accent\">motive – and a story.</span>",
      "chapter.suspects.p": "Get to know the suspects: portrait, role and their relationship to the victim. Their statements and alibis contradict each other – and the truth lies in exactly those contradictions.",

      /* ---- Chapter: the investigation ---- */
      "chapter.investigation.img.alt": "Delikta — suspects and investigation grid",
      "chapter.investigation.num": "The investigation",
      "chapter.investigation.h2": "Build your <span class=\"accent\">chain of evidence yourself.</span>",
      "chapter.investigation.p": "Tap any sentence in the text that strikes you as suspicious – it goes straight into your notebook. Use the investigation grid to check who had motive, means and opportunity, then make your accusation.",
      "chapter.investigation.chip.motiv": "Motive",
      "chapter.investigation.chip.mittel": "Means",
      "chapter.investigation.chip.gelegenheit": "Opportunity",

      /* ---- Case types ---- */
      "types.kicker": "Three case types",
      "types.h2": "Every case is set up differently",
      "types.a.tag": "Case type A",
      "types.a.h3": "The Culprit",
      "types.a.p": "Exactly one person combines motive, means and opportunity. Who is the culprit?",
      "types.b.tag": "Case type B",
      "types.b.h3": "Accomplices",
      "types.b.p": "The crime required two accomplices – both had motive, means and opportunity. Name them both.",
      "types.c.tag": "Case type C",
      "types.c.h3": "The False Statement",
      "types.c.p": "The statements contradict each other: exactly one is a lie. Find the lie.",

      /* ---- Feature: Delikts ---- */
      "feature.delikts.img.alt": "Delikta — Delikts overview with balance and history",
      "feature.delikts.kicker": "Your investigation currency",
      "feature.delikts.h2": "Delikts, when it gets tricky",
      "feature.delikts.p": "Spend Delikts on a hint, a second attempt or an extra interrogation. Earn them for free by watching a video – or grab a pack if you like.",

      /* ---- Stats / streak ---- */
      "stats.kicker": "Stay on it",
      "stats.h2": "Keep your streak – compete with others",
      "stats.faelle.label": "Cases a year",
      "stats.serie.label": "Days streak in a row",
      "stats.bestenlisten.label": "Leaderboards",
      "stats.note": "With the home screen widget you always have your daily case and your streak in view – including a countdown and a warning before your streak breaks.",

      /* ---- Verdict / CTA ---- */
      "solve.stamp.alt": "Solved",
      "solve.stamp.src": "assets/stamp-solved.svg",
      "solve.h2": "The next case is waiting.",
      "solve.p": "Download Delikta and start your streak today. A new case. Every day.",
      "solve.android.badge.aria": "Download Delikta on Google Play",
      "solve.android.qr.aria": "Delikta on Google Play – scan the QR code",
      "solve.android.qr.img.alt": "QR code: Delikta on Google Play",
      "solve.android.qr.label": "Scan & download",
      "solve.ios.badge.aria": "Delikta on the App Store – coming soon",
      "solve.ios.soon": "Coming soon",

      /* ---- Footer (index.html: brandline mit Markup; tagline = reiner Slogan für Rechtsseiten) ---- */
      "footer.brandline": "<strong style=\"color:var(--text)\">DELIKTA</strong> — A new case. Every day.",
      "footer.link.privacy": "Privacy",
      "footer.link.delete": "Delete account",
      "footer.link.contact": "Contact",

      /* ---- Language switch (aria) ---- */
      "lang.switch.aria": "Sprache / Language",

      /* ===== Legal pages (privacy.html / delete-account.html) ===== */
      "nav.home": "Game",
      "nav.privacy": "Privacy",
      "nav.delete": "Delete account",
      "footer.contact": "Contact",
      "footer.privacy": "Privacy",
      "footer.delete": "Delete account",
      "footer.tagline": "A new case. Every day.",
      "privacy.kicker": "Legal",
      "privacy.title": "Privacy Policy",
      "delete.kicker": "Account",
      "delete.title": "Delete account"
    }
  };

  var SUPPORTED = ["de", "en"];
  var DEFAULT_LANG = "en";
  var STORAGE_KEY = "delikta-lang";

  function pickInitial() {
    var fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (fromQuery && SUPPORTED.indexOf(fromQuery) !== -1) return fromQuery;
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    // Browsersprache bestimmt; sonst Default EN.
    var nav = (navigator.language || DEFAULT_LANG).slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : DEFAULT_LANG;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    var dict = STRINGS[lang];

    // 1) Kurztexte (textContent)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // 2) Texte mit Inline-Markup (innerHTML)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    // 3) Attribut-Übersetzungen (alt / aria-label / title / src …)
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr"); // "attr:key,attr:key"
      spec.split(",").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });

    // 4) Sprachblöcke (lange Rechtstexte)
    document.querySelectorAll("[data-lang-block]").forEach(function (el) {
      el.classList.toggle("lang-active", el.getAttribute("data-lang-block") === lang);
    });

    // 5) Umschalter-Status
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });

    // 6) <html lang> + persistieren
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
