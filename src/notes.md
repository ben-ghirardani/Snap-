Learning points for next time - spent a lot of time of game logic. 

Things left to do -

Opponent won with the following sequeance - AClubs, 4Clubs, 4Hearts, QDiamonds. Need to prevent ability to win if player has played a card since the matching sequence.

* Add a rules button
    Could be a div that uses the visible/invisible CSS method to overlay the screen.

Add win counter

/* small devices 600px up */
@media screen and (min-width: 600px) {

    .cards-remaining {
        position: absolute;
        font-size: 3em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        opacity: 1.0;
    }

    .player-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        text-align: center;
    }

    .playCard {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-width: 1px;
        opacity: 0.0;
    }

    .cards-played-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 125px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -75px;
        margin-left: -62.5px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    }

    .cards-played-not-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 125px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -75px;
        margin-left: -62.5px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        opacity: 0.0;
    }
    
    /* lives in .cards-played */
    .card {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .opponent-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 80%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px
    }

    .check-for-win {
        height: 40px;
        width: 140px;
        margin-top: 55%;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-color: green;
        /* centres button */
        display: flex;
        justify-content: center;
    }
    
    /* centralize button within check-for-win div */
    .check-for-win-button {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        color: white;
        background-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
    }

    .player-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 65%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }

    .opponent-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 35%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }
    
    .turn-message {
        text-align: center;
    }
    
    .winner-message {
        text-align: center;
    }
    
    .opponent-cards-remaining {
        position: absolute;
        font-size: 4em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.45;
    }
    
    .center-play-snap {
        margin: 0 auto;
        height: 40px;
        width: 120px;
    }
    
    .play-snap {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
        color: white;
        background-color: black;
    }

}

/* medium devices 768px and up */
@media screen and (min-width: 768px) {

    .cards-remaining {
        position: absolute;
        font-size: 3em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        opacity: 1.0;
    }

    .player-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        text-align: center;
    }

    .playCard {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-width: 1px;
        opacity: 0.0;
    }

    .cards-played-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 125px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -75px;
        margin-left: -62.5px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    }

    .cards-played-not-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 125px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -75px;
        margin-left: -62.5px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        opacity: 0.0;
    }
    
    /* lives in .cards-played */
    .card {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .opponent-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 80%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px
    }

    .check-for-win {
        height: 40px;
        width: 140px;
        margin-top: 55%;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-color: green;
        /* centres button */
        display: flex;
        justify-content: center;
    }
    
    /* centralize button within check-for-win div */
    .check-for-win-button {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        color: white;
        background-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
    }

    .player-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 65%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }

    .opponent-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 35%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }
    
    .turn-message {
        text-align: center;
    }
    
    .winner-message {
        text-align: center;
    }
    
    .opponent-cards-remaining {
        position: absolute;
        font-size: 4em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.45;
    }
    
    .center-play-snap {
        margin: 0 auto;
        height: 40px;
        width: 120px;
    }
    
    .play-snap {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
        color: white;
        background-color: black;
    }

}

/* large devices 992px and up */
@media screen and (min-width: 992px) {

    .cards-remaining {
        position: absolute;
        font-size: 3em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        opacity: 1.0;
    }

    .player-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        text-align: center;
    }

    .playCard {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 20%;
        margin-top: -90px;
        margin-left: -75px;
        border-width: 1px;
        opacity: 0.0;
    }

    .cards-played-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 180px;
        width: 150px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    }

    .cards-played-not-visible {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 150px;
        width: 125px;
        /* negative margin-top of half the height, negative margin-left of half the width to centre component */
        /* otherwise top left corner is centered */
        margin-top: -75px;
        margin-left: -62.5px;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        opacity: 0.0;
    }
    
    /* lives in .cards-played */
    .card {
        display: block;
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .opponent-container {
        height: 180px;
        width: 150px;
        position: fixed;
        top: 40%;
        left: 80%;
        margin-top: -90px;
        margin-left: -75px;
        border-style: solid;
        border-color: black;
        border-width: 1px
    }

    .check-for-win {
        height: 40px;
        width: 140px;
        margin-top: 55%;
        margin-left: auto;
        margin-right: auto;
        border-style: solid;
        border-color: green;
        /* centres button */
        display: flex;
        justify-content: center;
    }
    
    /* centralize button within check-for-win div */
    .check-for-win-button {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        color: white;
        background-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
    }

    .player-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 65%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }

    .opponent-message-centre {
        border-style: solid;
        border-color: red;
        position: fixed;
        top: 35%;
        left: 50%;
        height: 40px;
        width: 200px;
        margin-top: -20px;
        margin-left: -100px;
    }
    
    .turn-message {
        text-align: center;
    }
    
    .winner-message {
        text-align: center;
    }
    
    .opponent-cards-remaining {
        position: absolute;
        font-size: 4em;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.45;
    }
    
    .center-play-snap {
        margin: 0 auto;
        height: 40px;
        width: 120px;
    }
    
    .play-snap {
        border-radius: 25px;
        border-style: solid;
        border-color: black;
        height: 40px;
        width: 120px;
        font-size: 20px;
        color: white;
        background-color: black;
    }

}