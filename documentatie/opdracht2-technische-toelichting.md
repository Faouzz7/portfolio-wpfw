# WPFW Opdracht 2 – Technische toelichting

## 1. JavaScript-bestand

Voor Opdracht 2 is het externe bestand `js/script.js` toegevoegd. Hierdoor staat de JavaScript los van de HTML, zoals gevraagd in de opdracht.

Belangrijke functies zijn:

- `createProjectCard(project)` – maakt met DOM-methoden een projectkaart.
- `renderProjects(projectList, sortValue)` – rendert de geselecteerde projecten naar de DOM.
- `getSortedProjects(list, sortValue)` – maakt een gesorteerde kopie van de projectdata.
- `updateProjectView()` – combineert filteren en sorteren en werkt de projectweergave bij.
- `initProjectInteractions()` – koppelt `change`-events aan de filter- en sorteerkeuzes.
- `validateContactForm()` – valideert de drie contactvelden en geeft per veld feedback.
- `loadWeather()` – haalt actuele weergegevens op met `fetch()` en verwerkt de JSON-respons.

## 2. Dynamische projectenlijst

De projecten staan in de JavaScript-array `projects`. Ieder object bevat onder andere een titel, studiejaar, kleur, positie en een array met tekstparagrafen.

De HTML bevat alleen de container `#projects-list`. JavaScript maakt de projectkaarten met `createElement()`, `textContent`, `classList.add()` en `appendChild()`.

De gebruiker kan:

1. filteren op eerste of tweede studiejaar;
2. alle projecten tonen;
3. sorteren op studiejaar, titel A-Z of titel Z-A.

De gebeurtenissen worden afgehandeld met `addEventListener("change", ...)`.

## 3. Contactformulier

Het contactformulier staat op `index.html` en bevat drie verplichte velden:

- naam;
- e-mailadres;
- bericht.

De JavaScript-validatie controleert minimaal twee tekens voor de naam, een geldig e-mailadres en minimaal tien tekens voor het bericht.

Bij een fout wordt per veld een duidelijke foutmelding getoond. Het veld krijgt ook `aria-invalid="true"` en de foutmelding is gekoppeld via `aria-describedby`. Bij geldige invoer wordt een bevestiging getoond.

De opdracht is client-side; er is daarom bewust geen backend of database gekoppeld.

## 4. Externe API

Voor de API-integratie is Open-Meteo gebruikt. Deze publieke weer-API kan zonder API-key worden aangeroepen.

De pagina haalt actuele weergegevens voor Den Haag op met `fetch()`. De JSON-respons wordt verwerkt met DOM-methoden en toont onder andere temperatuur, weersituatie en windsnelheid.

Er is een zichtbare laadstatus. Als de API niet bereikbaar is of een ongeldige HTTP-respons geeft, wordt een foutmelding getoond.

## 5. Afstemming interface en data

De projectinterface volgt rechtstreeks uit de structuur van de `projects`-array. Hierdoor hoeft een nieuwe projectkaart niet handmatig in de HTML te worden geschreven: een nieuw object in de array kan door dezelfde renderfunctie worden weergegeven.

De filter- en sorteerkeuzes veranderen alleen de selectie/volgorde van de array en laten daarna dezelfde renderfunctie de DOM opnieuw opbouwen.

## 6. Gebruikte bronnen

- MDN Web Docs – JavaScript DOM/API-documentatie: https://developer.mozilla.org/
- MDN Web Docs – `fetch()`: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
- MDN Web Docs – `addEventListener()`: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- MDN Web Docs – Form validation: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- Open-Meteo API: https://open-meteo.com/
