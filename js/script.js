"use strict";

const projects = [
    {
        title: "The Challenge — SDG 6: Schoon water en sanitair",
        year: 1,
        color: "aqua",
        side: "left",
        paragraphs: [
            "The Challenge was een project uit het eerste semester van mijn HBO-ICT-opleiding. Alle eerstejaars begonnen hiermee voordat we later een differentiatie konden kiezen.",
            "Mijn groep werkte aan SDG 6: Schoon water en sanitair. We onderzochten hoe we met ICT konden bijdragen aan bewustwording rondom waterkwaliteit. Uiteindelijk kozen we ervoor om een machine te ontwikkelen die het troebelheidsniveau van water kon meten in de omgeving van Den Haag.",
            "Wat ik bijzonder vond aan The Challenge, was dat ik niet had verwacht dat we als ICT-studenten een product zouden ontwerpen dat gericht was op een maatschappelijk en milieuprobleem. Het liet mij zien dat ICT niet alleen draait om programmeren, maar ook gebruikt kan worden om problemen uit de echte wereld aan te pakken.",
            "Daarnaast was dit mijn eerste ervaring met intensief samenwerken in een groep. Ik leerde dat je in een professionele omgeving niet altijd dezelfde mening of visie hoeft te hebben als je collega's, maar dat je wel moet kunnen communiceren, samenwerken en gezamenlijk naar een resultaat moet werken."
        ]
    },
    {
        title: "TeamFlow — Scrum-gerichte communicatieapplicatie",
        year: 1,
        color: "pink",
        side: "right",
        paragraphs: [
            "In dit project werkten we aan TeamFlow, een chatapplicatie die specifiek gericht is op Scrum-teams. Het doel was om communicatie binnen een Scrum-team beter te structureren en direct te koppelen aan onderdelen zoals epics, user stories en taken.",
            "Het project ontstond vanuit het probleem dat algemene communicatieplatformen zoals Slack en Microsoft Teams niet specifiek zijn ingericht voor de Scrum-methodologie. Hierdoor kan informatie verspreid raken over verschillende kanalen.",
            "Met TeamFlow onderzochten we hoe communicatie en de Scrum-workflow op één centrale plek kunnen worden samengebracht. Hierdoor konden teamleden gemakkelijker relevante informatie terugvinden en gericht communiceren."
        ]
    },
    {
        title: "Scrum Escape Building — CLI-game",
        year: 1,
        color: "purple",
        side: "left",
        paragraphs: [
            "In dit project ontwikkelden we een educatief Scrum Escape Game. Het spel speelde zich af in verschillende kamers, waarbij iedere kamer een onderdeel van Scrum vertegenwoordigde.",
            "De speler moest vragen en opdrachten oplossen om naar de volgende kamer te kunnen gaan. Bij een fout antwoord kon een obstakel ontstaan dat eerst opgelost moest worden.",
            "Een belangrijk onderdeel van dit project was dat we het programma niet alleen moesten laten werken, maar ook rekening moesten houden met Design Patterns, SOLID-principes en het Liskov Substitution Principle.",
            "Hierdoor leerde ik meer over het ontwerpen van onderhoudbare en uitbreidbare software en over het testen van mijn eigen code."
        ]
    },
    {
        title: "Digitale veilingklok — Sierteeltsector",
        year: 2,
        color: "blue",
        side: "right",
        paragraphs: [
            "In het derde semester werkte ik in een team aan een complexe en veilige webapplicatie voor een digitale veilingklok voor de sierteeltsector.",
            "De case was opgesteld voor jem-id en had Royal FloraHolland als klant. Het doel was om een zelfstandig systeem te ontwikkelen waarmee producten digitaal geveild en verkocht konden worden aan meerdere kopers tegelijkertijd.",
            "De applicatie moest onder andere gebruikersregistratie, inloggen, het tonen van actuele veilingproducten, biedingen en een dashboard voor veilingmeesters ondersteunen.",
            "Binnen het project werkten we met onder andere React, TypeScript, C#, .NET Core, Entity Framework Core en een database. Ook waren onderwerpen zoals architectuur, beveiliging, performance, toegankelijkheid, design patterns en automatisch testen belangrijk."
        ]
    },
    {
        title: "Data Engineering — Great Outdoors",
        year: 2,
        color: "mint",
        side: "left",
        paragraphs: [
            "In het vierde semester werkte ik aan een Data Engineering-project voor Great Outdoors, een groothandel in producten voor het buitenleven.",
            "Het doel van het project was om bedrijfsgegevens om te zetten in bruikbare informatie waarmee datagedreven beslissingen konden worden genomen.",
            "Als projectgroep moesten we drie bedrijfsproblemen onderzoeken met behulp van Source Data Modelling, Datawarehousing en Dashboarding. Knelpunt 1, over het bestelgedrag van klanten, was voor iedere groep verplicht.",
            "Tijdens dit project werkte ik met onder andere databases, SQL, Python, ETL-processen, een Data Warehouse en Power BI. Ook kwamen onderwerpen zoals SCD Type 1 en SCD Type 2, stermodellen en datapijplijnen aan bod."
        ]
    },
    {
        title: "AI-Agent Project",
        year: 2,
        color: "lilac",
        side: "right",
        paragraphs: [
            "Ook in het vierde semester werkte ik aan een AI-Agent Project. In dit project ontwierpen, onderzochten, bouwden en evalueerden we in Scrumteams een AI-agent voor een zelfgekozen probleem.",
            "Het project bestond uit drie sprints. In de eerste sprint onderzochten we het probleem, de doelgroep en de mogelijke workflow. In de tweede sprint onderzochten en vergeleken we verschillende AI-agent tools en frameworks.",
            "In de derde sprint bouwden en testten we een werkend prototype. Hierbij waren onder andere workflows, embeddings, een vectordatabase, validatie, feedbackloops, logging en traceerbaarheid belangrijke onderdelen.",
            "Het project heeft mij laten kennismaken met een andere manier van softwareontwikkeling waarbij niet alleen de applicatie, maar ook de workflow en samenwerking tussen verschillende stappen van een AI-agent centraal staan."
        ]
    }
];

function createProjectCard(project) {
    const article = document.createElement("article");
    article.classList.add("project-card", `project-card-${project.side}`, `project-card-${project.color}`);

    const content = document.createElement("div");
    content.classList.add("project-content");

    const meta = document.createElement("p");
    meta.classList.add("project-meta");
    meta.textContent = project.year === 1 ? "Studiejaar 1" : "Studiejaar 2";
    content.appendChild(meta);

    const title = document.createElement("h3");
    title.textContent = project.title;
    content.appendChild(title);

    project.paragraphs.forEach((paragraphText) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphText;
        content.appendChild(paragraph);
    });

    article.appendChild(content);
    return article;
}

function renderProjects(projectList, sortValue = "year") {
    const container = document.querySelector("#projects-list");
    const count = document.querySelector("#project-count");

    if (!container || !count) {
        return;
    }

    container.replaceChildren();

    if (projectList.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Geen projecten gevonden voor deze selectie.";
        container.appendChild(emptyMessage);
        count.textContent = "0 projecten weergegeven.";
        return;
    }

    if (sortValue === "year") {
        let currentYear = null;
        let currentSection = null;

        projectList.forEach((project) => {
            if (project.year !== currentYear) {
                currentYear = project.year;
                currentSection = document.createElement("section");
                currentSection.classList.add("project-year");
                currentSection.setAttribute("aria-labelledby", `year-${project.year}-title`);

                const heading = document.createElement("h2");
                heading.id = `year-${project.year}-title`;
                heading.textContent = project.year === 1 ? "Eerste studiejaar" : "Tweede studiejaar";
                currentSection.appendChild(heading);
                container.appendChild(currentSection);
            }

            currentSection.appendChild(createProjectCard(project));
        });
    } else {
        const section = document.createElement("section");
        section.classList.add("project-year");

        const heading = document.createElement("h2");
        heading.textContent = "Geselecteerde projecten";
        section.appendChild(heading);

        projectList.forEach((project) => {
            section.appendChild(createProjectCard(project));
        });

        container.appendChild(section);
    }

    count.textContent = `${projectList.length} ${projectList.length === 1 ? "project" : "projecten"} weergegeven.`;
}

function getSortedProjects(list, sortValue) {
    const sorted = [...list];

    if (sortValue === "title-asc") {
        sorted.sort((a, b) => a.title.localeCompare(b.title, "nl"));
    } else if (sortValue === "title-desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title, "nl"));
    } else {
        sorted.sort((a, b) => a.year - b.year);
    }

    return sorted;
}

function updateProjectView() {
    const yearFilter = document.querySelector("#year-filter");
    const sortSelect = document.querySelector("#project-sort");

    if (!yearFilter || !sortSelect) {
        return;
    }

    const filtered = yearFilter.value === "all"
        ? projects
        : projects.filter((project) => String(project.year) === yearFilter.value);

    const sorted = getSortedProjects(filtered, sortSelect.value);
    renderProjects(sorted, sortSelect.value);
}

function initProjectInteractions() {
    const yearFilter = document.querySelector("#year-filter");
    const sortSelect = document.querySelector("#project-sort");

    if (!yearFilter || !sortSelect) {
        return;
    }

    yearFilter.addEventListener("change", updateProjectView);
    sortSelect.addEventListener("change", updateProjectView);
    updateProjectView();
}

function setFieldError(input, errorElement, message) {
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
}

function clearFieldError(input, errorElement) {
    input.removeAttribute("aria-invalid");
    errorElement.textContent = "";
}

function validateContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) {
        return;
    }

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");
    const formFeedback = document.querySelector("#form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;

        clearFieldError(nameInput, nameError);
        clearFieldError(emailInput, emailError);
        clearFieldError(messageInput, messageError);
        formFeedback.textContent = "";
        formFeedback.className = "form-feedback";

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name.length < 2) {
            setFieldError(nameInput, nameError, "Vul je naam in (minimaal 2 tekens).");
            isValid = false;
        }

        if (!emailPattern.test(email)) {
            setFieldError(emailInput, emailError, "Vul een geldig e-mailadres in.");
            isValid = false;
        }

        if (message.length < 10) {
            setFieldError(messageInput, messageError, "Je bericht moet minimaal 10 tekens bevatten.");
            isValid = false;
        }

        if (!isValid) {
            formFeedback.textContent = "Controleer de gemarkeerde velden en probeer het opnieuw.";
            formFeedback.classList.add("form-feedback-error");
            const firstInvalid = form.querySelector("[aria-invalid='true']");
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        formFeedback.textContent = "Bedankt! Je bericht is gecontroleerd en klaar om te worden verzonden.";
        formFeedback.classList.add("form-feedback-success");
        form.reset();
    });
}

function getWeatherDescription(code) {
    const descriptions = {
        0: "Heldere lucht",
        1: "Overwegend helder",
        2: "Gedeeltelijk bewolkt",
        3: "Bewolkt",
        45: "Mist",
        48: "Aanvriezende mist",
        51: "Lichte motregen",
        53: "Motregen",
        55: "Dichte motregen",
        61: "Lichte regen",
        63: "Regen",
        65: "Zware regen",
        71: "Lichte sneeuw",
        73: "Sneeuw",
        75: "Zware sneeuw",
        80: "Lichte regenbuien",
        81: "Regenbuien",
        82: "Zware regenbuien",
        95: "Onweer",
        96: "Onweer met hagel",
        99: "Onweer met zware hagel"
    };

    return descriptions[code] || "Onbekend weer";
}

async function loadWeather() {
    const weatherStatus = document.querySelector("#weather-status");
    const weatherContent = document.querySelector("#weather-content");

    if (!weatherStatus || !weatherContent) {
        return;
    }

    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.0705&longitude=4.3007&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FAmsterdam";

    weatherStatus.textContent = "Actuele weergegevens laden...";
    weatherContent.replaceChildren();

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("De weer-API gaf geen geldige reactie.");
        }

        const data = await response.json();
        const current = data.current;

        const location = document.createElement("p");
        location.classList.add("weather-location");
        location.textContent = "Den Haag";

        const temperature = document.createElement("p");
        temperature.classList.add("weather-temperature");
        temperature.textContent = `${current.temperature_2m} °C`;

        const description = document.createElement("p");
        description.textContent = getWeatherDescription(current.weather_code);

        const wind = document.createElement("p");
        wind.textContent = `Wind: ${current.wind_speed_10m} km/u`;

        weatherContent.append(location, temperature, description, wind);
        weatherStatus.textContent = "Actuele gegevens opgehaald via Open-Meteo.";
    } catch (error) {
        console.error("Weer ophalen mislukt:", error);
        weatherStatus.textContent = "De actuele weergegevens konden niet worden opgehaald. Probeer het later opnieuw.";
        weatherStatus.classList.add("weather-error");
    }
}

function init() {
    initProjectInteractions();
    validateContactForm();
    loadWeather();
}

document.addEventListener("DOMContentLoaded", init);
