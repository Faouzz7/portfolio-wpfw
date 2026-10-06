# WPFW Opdracht 2 – Procesverantwoording

> **Let op:** vul alleen de onderdelen tussen `[ ... ]` aan met wat daadwerkelijk is gebeurd. Verzin geen feedback, uren of andere procesinformatie.

## Aanpak

Ik ben voortgebouwd op mijn portfolio uit Opdracht 1. Eerst heb ik de bestaande HTML- en CSS-structuur behouden en daarna de interactieve onderdelen toegevoegd in een extern JavaScript-bestand (`js/script.js`).

Vervolgens heb ik de projectenlijst omgezet van statische HTML naar een JavaScript-array. Met DOM-methoden worden de projectkaarten aangemaakt en weergegeven. Daarna heb ik een filter en sorteermogelijkheid toegevoegd.

Daarna heb ik een contactformulier toegevoegd. Ik heb validatie gemaakt voor naam, e-mailadres en bericht en per veld feedback toegevoegd. Tot slot heb ik een publieke weer-API gekoppeld met `fetch()` en laad- en foutafhandeling toegevoegd.

## Bronnen en documentatie

Ik heb MDN Web Docs gebruikt om JavaScript-, DOM-, event- en formulierconcepten te controleren. Voor de actuele weergegevens is Open-Meteo gebruikt.

## AI/hulpgebruik

De opdracht vraagt om AI- of hulpgebruik per bewijsstuk te rapporteren. Omdat er bij dit project daadwerkelijk hulp van ChatGPT is gebruikt, moet dit eerlijk worden opgenomen. Een geschikte formulering is bijvoorbeeld:

- **Tool:** ChatGPT
- **Doel:** uitleg van JavaScript/DOM-concepten, meedenken over de structuur en ondersteuning bij het controleren van de implementatie.
- **Eigen controle:** ik heb de code zelf bekeken, aangepast en in de browser getest. Ik heb gecontroleerd of de filter/sortering, formulierfeedback en API-weergave werken.

Pas deze tekst aan zodat hij exact overeenkomt met je eigen gebruik en controle.

## Feedback

**Ontvangen feedback:** [vul hier de daadwerkelijk ontvangen feedback in]

**Verwerking:** [beschrijf hier welke wijziging je naar aanleiding van die feedback hebt gemaakt]

## Zelfstudie

**Bestede zelfstudie:** [vul het daadwerkelijke aantal uren in]

## Controle vóór inleveren

- [ ] Projecten worden vanuit een JavaScript-array naar de DOM gerenderd.
- [ ] Filter werkt.
- [ ] Sortering werkt.
- [ ] Contactformulier valideert minimaal drie velden.
- [ ] Per ongeldig veld verschijnt een begrijpelijke foutmelding.
- [ ] Geldige invoer geeft een duidelijke bevestiging.
- [ ] API werkt via `fetch()`.
- [ ] Laadstatus is zichtbaar.
- [ ] Foutstatus is zichtbaar wanneer de API niet bereikbaar is.
- [ ] JavaScript staat in een extern `.js`-bestand.
- [ ] Er zijn geen onverklaarde fouten in de browserconsole.
- [ ] De website is op mobiel en desktop getest.
- [ ] GitHub Pages toont de laatste versie.
