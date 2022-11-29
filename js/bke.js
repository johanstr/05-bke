/***************************************************
 *  Boter-Kaas-Eieren
 *  ------------------------------------------------
 *  Versie:     2022
 **************************************************/

// ------------------
// GLOBALE VARIABELEN
// ------------------

// ELEMENTS
let element_turn_number;        // Tonen van het nummer van de speler die aan de beurt is
let element_turn_image;         // Tonen van de afbeelding van de speler die aan de beurt is
let element_score_player1;      // Tonen van de score van speler 1
let element_score_player2;      // Tonen van de score van speler 2
let element_round_time;         // Tonen van de ronde tijd
let element_rounds_played;      // Tonen van de rondes gespeeld tot nu toe
let element_cells;              // De cellen in het speelbord, hierin tonen we de afbeelding van een speler
let element_game_button;        // De knop om een ronde te starten of te resetten

// HELPER VARIABLES
let current_player = 1;         // Het nummer van de speler die aan de beurt is  
let score_player1 = 0;          // Hier houden we de score van speler 1 bij
let score_player2 = 0;          // Hier houden we de score van speler 2 bij
let current_round = 0;          // Welke ronde is het
let timer_id;                   // ID van de interval, dit is de klok van een ronde
let elapsedTimeInSeconds;       // Verlopen ronde tijd in seconden

/*
 * Met deze methode vertellen we de browser dat de functie die hier
 * geprogrammeerd is gekoppeld moet worden aan de LOAD event.
 * Deze code wordt dan automatisch uitgevoerd wanneer de browser
 * klaar is met het verwerken en opslaan van de pagina in de DOM.
 */
window.onload = function() {
    /*
     * We gaan eerst alle elementen 'binnenhalen'
     */
    element_cells = document.querySelectorAll('.gameboard img');
    element_game_button = document.querySelector('#game-button');
    element_turn_number = document.querySelector('.turn-player');
    element_turn_image = document.querySelector('#img-turn-player');
    element_rounds_played = document.querySelector('.info-round p:last-child');
    element_score_player1 = document.querySelector('#score-player-one');
    element_score_player2 = document.querySelector('#score-player-two');
    element_round_time = document.querySelector('.round-timer');

    /*
     * We gaan nu de hulp variabelen initialiseren met een startwaarde
     * Voor b.v. scores geldt dat we de scores resetten naar 0,
     * we beginnen dus opnieuw te tellen.
     */
    timer_id = null;            // NULL, want er is nog geen lopende timer
    elapsedTimeInSeconds = 0;   // 0, want er is nog geen ronde gestart
    score_player1 = 0;          // 0, reset van de score
    score_player2 = 0;          // 0, reset van de score
    current_round = 0;          // 0, want er is nog geen ronde gestart

    // We gaan nu vertellen dat een click event op de button moet worden
    // opgevangen en de afhandeling van een click door de functie
    // buttonClick moet worden gedaan.
    element_game_button.addEventListener('click', buttonClick);
}

/*
 * FUNCTIE:     buttonClick
 * TYPE:        Event Handler
 * ---------------------------------------------------------
 * PARAMS:       
 * event_element   Automatisch gevuld door de browser
 *                 met het element waarop geklikt is
 * ---------------------------------------------------------
 * Dit is de functie die een click op de button afhandeld en
 * de juiste acties onderneemt.
 */
function buttonClick(event_element)
{

}