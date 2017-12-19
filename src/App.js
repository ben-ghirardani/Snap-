import React, { Component } from 'react';
import PlayerPosition from './PlayerPosition';
import OpponentPosition from './OpponentPosition';
import CardsPlayed from './CardsPlayed';
import CardBack from './img/CardBack.png';

import AceOfClubs from './img/AceOfClubs.png';
import AceOfDiamonds from './img/AceOfDiamonds.png'; 
import AceOfHearts from './img/AceOfHearts.png';
import AceOfSpades from './img/AceOfSpades.png';
import TwoOfClubs from './img/TwoOfClubs.png';
import TwoOfDiamonds from './img/TwoOfDiamonds.png';
import TwoOfHearts from './img/TwoOfHearts.png';
import TwoOfSpades from './img/TwoOfSpades.png';
import ThreeOfClubs from './img/ThreeOfClubs.png';
import ThreeOfDiamonds from './img/ThreeOfDiamonds.png';
import ThreeOfHearts from './img/ThreeOfHearts.png';
import ThreeOfSpades from './img/ThreeOfSpades.png';
import FourOfClubs from './img/FourOfClubs.png';
import FourOfDiamonds from './img/FourOfDiamonds.png';
import FourOfHearts from './img/FourOfHearts.png';
import FourOfSpades from './img/FourOfSpades.png';
import FiveOfClubs from './img/FiveOfClubs.png';
import FiveOfDiamonds from './img/FiveOfDiamonds.png';
import FiveOfHearts from './img/FiveOfHearts.png';
import FiveOfSpades from './img/FiveOfSpades.png';
import SixOfClubs from './img/SixOfClubs.png';
import SixOfDiamonds from './img/SixOfDiamonds.png';
import SixOfHearts from './img/SixOfHearts.png';
import SixOfSpades from './img/SixOfSpades.png';
import SevenOfClubs from './img/SevenOfClubs.png';
import SevenOfDiamonds from './img/SevenOfDiamonds.png';
import SevenOfHearts from './img/SevenOfHearts.png';
import SevenOfSpades from './img/SevenOfSpades.png';
import EightOfClubs from './img/EightOfClubs.png';
import EightOfDiamonds from './img/EightOfDiamonds.png';
import EightOfHearts from './img/EightOfHearts.png';
import EightOfSpades from './img/EightOfSpades.png';
import NineOfClubs from './img/NineOfClubs.png';
import NineOfDiamonds from './img/NineOfDiamonds.png';
import NineOfHearts from './img/NineOfHearts.png';
import NineOfSpades from './img/NineOfSpades.png';
import TenOfClubs from './img/TenOfClubs.png';
import TenOfDiamonds from './img/TenOfDiamonds.png';
import TenOfHearts from './img/TenOfHearts.png';
import TenOfSpades from './img/TenOfSpades.png';
import JackOfClubs from './img/JackOfClubs.png';
import JackOfDiamonds from './img/JackOfDiamonds.png';
import JackOfHearts from './img/JackOfHearts.png';
import JackOfSpades from './img/JackOfSpades.png';
import QueenOfClubs from './img/QueenOfClubs.png';
import QueenOfDiamonds from './img/QueenOfDiamonds.png';
import QueenOfHearts from './img/QueenOfHearts.png';
import QueenOfSpades from './img/QueenOfSpades.png';
import KingOfClubs from './img/KingOfClubs.png';
import KingOfDiamonds from './img/KingOfDiamonds.png';
import KingOfHearts from './img/KingOfHearts.png';
import KingOfSpades from './img/KingOfSpades.png';
import Joker1 from './img/Joker1.png';
import Joker2 from './img/Joker2.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        deckOfCards: [
          { suit: "Clubs", name: "Ace", value: 1 }, { suit: "Clubs", name: "Two", value: 2 }, { suit: "Clubs", name: "Three", value: 3 }, { suit: "Clubs", name: "Four", value: 4 }, { suit: "Clubs", name: "Five", value: 5 }, { suit: "Clubs", name: "Six", value: 6 }, { suit: "Clubs", name: "Seven", value: 7 }, { suit: "Clubs", name: "Eight", value: 8 }, { suit: "Clubs", name: "Nine", value: 9 }, { suit: "Clubs", name: "Ten", value: 10 }, { suit: "Clubs", name: "Jack", value: 11 }, { suit: "Clubs", name: "Queen", value: 12 }, { suit: "Clubs", name: "King", value: 13},
          { suit: "Diamonds", name: "Ace", value: 1}, { suit: "Diamonds", name: "Two", value: 2 }, { suit: "Diamonds", name: "Three", value: 3 }, { suit: "Diamonds", name: "Four", value: 4 }, { suit: "Diamonds", name: "Five", value: 5 }, { suit: "Diamonds", name: "Six", value: 6 }, { suit: "Diamonds", name: "Seven", value: 7 }, { suit: "Diamonds", name: "Eight", value: 8 }, { suit: "Diamonds", name: "Nine", value: 9 }, { suit: "Diamonds", name: "Ten", value: 10 }, { suit: "Diamonds", name: "Jack", value: 11 }, { suit: "Diamonds", name: "Queen", value: 12 }, { suit: "Diamonds", name: "King", value: 13 },
          { suit: "Spades", name: "Ace", value: 1 }, { suit: "Spades", name: "Two", value: 2 }, { suit: "Spades", name: "Three", value: 3 }, { suit: "Spades", name: "Four", value: 4 }, { suit: "Spades", name: "Five", value: 5 }, { suit: "Spades", name: "Six", value: 6 }, { suit: "Spades", name: "Seven", value: 7 }, { suit: "Spades", name: "Eight", value: 8 }, { suit: "Spades", name: "Nine", value: 9 }, { suit: "Spades", name: "Ten", value: 10 }, { suit: "Spades", name: "Jack", value: 11 }, { suit: "Spades", name: "Queen", value: 12 }, { suit: "Spades", name: "King", value: 13 },
          { suit: "Hearts", name: "Ace", value: 1 }, { suit: "Hearts", name: "Two", value: 2 }, { suit: "Hearts", name: "Three", value: 3 }, { suit: "Hearts", name: "Four", value: 4 }, { suit: "Hearts", name: "Five", value: 5 }, { suit: "Hearts", name: "Six", value: 6 }, { suit: "Hearts", name: "Seven", value: 7}, { suit: "Hearts", name: "Eight", value: 8 }, { suit: "Hearts", name: "Nine", value: 9 }, { suit: "Hearts", name: "Ten", value: 10 }, { suit: "Hearts", name: "Jack", value: 11 }, { suit: "Hearts", name: "Queen", value: 12 }, { suit: "Hearts", name: "King", value: 13 }
        ],
        playerDeck: [
          { suit: "Clubs", name: "Ace", value: 1, img: AceOfClubs }, { suit: "Clubs", name: "Two", value: 2, img: TwoOfClubs }, { suit: "Clubs", name: "Three", value: 3, img: ThreeOfClubs }, { suit: "Clubs", name: "Four", value: 4, img: FourOfClubs }, { suit: "Clubs", name: "Five", value: 5, img: FiveOfClubs }, { suit: "Clubs", name: "Six", value: 6, img: SixOfClubs }, { suit: "Clubs", name: "Seven", value: 7, img: SevenOfClubs }, { suit: "Clubs", name: "Eight", value: 8, img: EightOfClubs }, { suit: "Clubs", name: "Nine", value: 9, img: NineOfClubs }, { suit: "Clubs", name: "Ten", value: 10, img: TenOfClubs }, { suit: "Clubs", name: "Jack", value: 11, img: JackOfClubs }, { suit: "Clubs", name: "Queen", value: 12, img: QueenOfClubs }, { suit: "Clubs", name: "King", value: 13, img: KingOfClubs},
          { suit: "Diamonds", name: "Ace", value: 1, img: AceOfDiamonds}, { suit: "Diamonds", name: "Two", value: 2, img: TwoOfDiamonds }, { suit: "Diamonds", name: "Three", value: 3, img: ThreeOfDiamonds }, { suit: "Diamonds", name: "Four", value: 4, img: FourOfDiamonds }, { suit: "Diamonds", name: "Five", value: 5, img: FiveOfDiamonds }, { suit: "Diamonds", name: "Six", value: 6, img: SixOfDiamonds }, { suit: "Diamonds", name: "Seven", value: 7, img: SevenOfDiamonds }, { suit: "Diamonds", name: "Eight", value: 8, img: EightOfDiamonds }, { suit: "Diamonds", name: "Nine", value: 9, img: NineOfDiamonds }, { suit: "Diamonds", name: "Ten", value: 10, img: TenOfDiamonds }, { suit: "Diamonds", name: "Jack", value: 11, img: JackOfDiamonds }, { suit: "Diamonds", name: "Queen", value: 12, img: QueenOfDiamonds }, { suit: "Diamonds", name: "King", value: 13, img: KingOfDiamonds },
          { suit: "Spades", name: "Ace", value: 1, img: AceOfSpades }, { suit: "Spades", name: "Two", value: 2, img: TwoOfSpades }, { suit: "Spades", name: "Three", value: 3, img: ThreeOfSpades }, { suit: "Spades", name: "Four", value: 4, img: FourOfSpades }, { suit: "Spades", name: "Five", value: 5, img: FiveOfSpades }, { suit: "Spades", name: "Six", value: 6, img: SixOfSpades }, { suit: "Spades", name: "Seven", value: 7, img: SevenOfSpades }, { suit: "Spades", name: "Eight", value: 8, img: EightOfSpades }, { suit: "Spades", name: "Nine", value: 9, img: NineOfSpades }, { suit: "Spades", name: "Ten", value: 10, img: TenOfSpades }, { suit: "Spades", name: "Jack", value: 11, img: JackOfSpades }, { suit: "Spades", name: "Queen", value: 12, img: QueenOfSpades }, { suit: "Spades", name: "King", value: 13, img: KingOfSpades },
          { suit: "Hearts", name: "Ace", value: 1, img: AceOfHearts }, { suit: "Hearts", name: "Two", value: 2, img: TwoOfHearts }, { suit: "Hearts", name: "Three", value: 3, img: ThreeOfHearts }, { suit: "Hearts", name: "Four", value: 4, img: FourOfHearts }, { suit: "Hearts", name: "Five", value: 5, img: FiveOfHearts }, { suit: "Hearts", name: "Six", value: 6, img: SixOfHearts }, { suit: "Hearts", name: "Seven", value: 7, img: SevenOfHearts }, { suit: "Hearts", name: "Eight", value: 8, img: EightOfHearts }, { suit: "Hearts", name: "Nine", value: 9, img: NineOfHearts }, { suit: "Hearts", name: "Ten", value: 10, img: TenOfHearts }, { suit: "Hearts", name: "Jack", value: 11, img: JackOfHearts }, { suit: "Hearts", name: "Queen", value: 12, img: QueenOfHearts }, { suit: "Hearts", name: "King", value: 13, img: KingOfHearts }
        ],
        opponentDeck: [
          { suit: "Clubs", name: "Ace", value: 1, img: AceOfClubs }, { suit: "Clubs", name: "Two", value: 2, img: TwoOfClubs }, { suit: "Clubs", name: "Three", value: 3, img: ThreeOfClubs }, { suit: "Clubs", name: "Four", value: 4, img: FourOfClubs }, { suit: "Clubs", name: "Five", value: 5, img: FiveOfClubs }, { suit: "Clubs", name: "Six", value: 6, img: SixOfClubs }, { suit: "Clubs", name: "Seven", value: 7, img: SevenOfClubs }, { suit: "Clubs", name: "Eight", value: 8, img: EightOfClubs }, { suit: "Clubs", name: "Nine", value: 9, img: NineOfClubs }, { suit: "Clubs", name: "Ten", value: 10, img: TenOfClubs }, { suit: "Clubs", name: "Jack", value: 11, img: JackOfClubs }, { suit: "Clubs", name: "Queen", value: 12, img: QueenOfClubs }, { suit: "Clubs", name: "King", value: 13, img: KingOfClubs},
          { suit: "Diamonds", name: "Ace", value: 1, img: AceOfDiamonds}, { suit: "Diamonds", name: "Two", value: 2, img: TwoOfDiamonds }, { suit: "Diamonds", name: "Three", value: 3, img: ThreeOfDiamonds }, { suit: "Diamonds", name: "Four", value: 4, img: FourOfDiamonds }, { suit: "Diamonds", name: "Five", value: 5, img: FiveOfDiamonds }, { suit: "Diamonds", name: "Six", value: 6, img: SixOfDiamonds }, { suit: "Diamonds", name: "Seven", value: 7, img: SevenOfDiamonds }, { suit: "Diamonds", name: "Eight", value: 8, img: EightOfDiamonds }, { suit: "Diamonds", name: "Nine", value: 9, img: NineOfDiamonds }, { suit: "Diamonds", name: "Ten", value: 10, img: TenOfDiamonds }, { suit: "Diamonds", name: "Jack", value: 11, img: JackOfDiamonds }, { suit: "Diamonds", name: "Queen", value: 12, img: QueenOfDiamonds }, { suit: "Diamonds", name: "King", value: 13, img: KingOfDiamonds },
          { suit: "Spades", name: "Ace", value: 1, img: AceOfSpades }, { suit: "Spades", name: "Two", value: 2, img: TwoOfSpades }, { suit: "Spades", name: "Three", value: 3, img: ThreeOfSpades }, { suit: "Spades", name: "Four", value: 4, img: FourOfSpades }, { suit: "Spades", name: "Five", value: 5, img: FiveOfSpades }, { suit: "Spades", name: "Six", value: 6, img: SixOfSpades }, { suit: "Spades", name: "Seven", value: 7, img: SevenOfSpades }, { suit: "Spades", name: "Eight", value: 8, img: EightOfSpades }, { suit: "Spades", name: "Nine", value: 9, img: NineOfSpades }, { suit: "Spades", name: "Ten", value: 10, img: TenOfSpades }, { suit: "Spades", name: "Jack", value: 11, img: JackOfSpades }, { suit: "Spades", name: "Queen", value: 12, img: QueenOfSpades }, { suit: "Spades", name: "King", value: 13, img: KingOfSpades },
          { suit: "Hearts", name: "Ace", value: 1, img: AceOfHearts }, { suit: "Hearts", name: "Two", value: 2, img: TwoOfHearts }, { suit: "Hearts", name: "Three", value: 3, img: ThreeOfHearts }, { suit: "Hearts", name: "Four", value: 4, img: FourOfHearts }, { suit: "Hearts", name: "Five", value: 5, img: FiveOfHearts }, { suit: "Hearts", name: "Six", value: 6, img: SixOfHearts }, { suit: "Hearts", name: "Seven", value: 7, img: SevenOfHearts }, { suit: "Hearts", name: "Eight", value: 8, img: EightOfHearts }, { suit: "Hearts", name: "Nine", value: 9, img: NineOfHearts }, { suit: "Hearts", name: "Ten", value: 10, img: TenOfHearts }, { suit: "Hearts", name: "Jack", value: 11, img: JackOfHearts }, { suit: "Hearts", name: "Queen", value: 12, img: QueenOfHearts }, { suit: "Hearts", name: "King", value: 13, img: KingOfHearts }
        ],
        cardsPlayed: [],
        // added placeholder values so JSX in CardsPlayed component has something to hang onto, 
        // which then gets replaced with each card that gets played.
        cardsPlayedLastCard: [
          { suit: "", name: "", value: null, img: CardBack }
        ],
        cardsPlayed2ndLastCard: [],
        turn: null,
        gameHasBegun: "no"
        
    };
    this.handlePlaySnap = this.handlePlaySnap.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
  }

  shuffleDeck(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // return a 0 or a 1
  pickBetweenTwo() {
    return ['player', 'opponent'][Math.round(Math.random())]
  }

  handlePlaySnap(event) {
    if (this.state.gameHasBegun === "yes") {
        // change this to an in-game message 
        console.log("The game has begun!")
        return
      } else {
        this.setState({gameHasBegun: "yes" })
      }
      // shuffle player deck
      let playerDeckToShuffle = this.state.playerDeck;
      this.shuffleDeck(playerDeckToShuffle);
      this.setState({ playerDeck: playerDeckToShuffle })
      // shuffle opponent deck
      let opponentDeckToShuffle = this.state.opponentDeck;
      this.shuffleDeck(opponentDeckToShuffle);
      this.setState({ opponentDeck: opponentDeckToShuffle })

      let firstTurn = this.pickBetweenTwo();
      this.setState({turn: firstTurn})
      // if it's oppoent turn, invoke opponent turn method, otherwise it's player tun.
  }

  playCard(event) {
    // check if it's the player's turn, if not, they can't go.
    // how to stop the player from playing more than one card?
    // when to switch the turn marker?
    let deck = this.state.playerDeck;
    let cardPlayed = deck.splice(-1, 1);
    let oldCardsPlayed = this.state.cardsPlayed;
    let newCardsPlayed = oldCardsPlayed.concat(cardPlayed);
    this.setState({cardsPlayed: newCardsPlayed});
    this.setState({playerDeck: deck});
    // move state from lastCardFromCardsPlayed to penultimateCardFromCardsPlayed, then update state of last card with 
    // the card spliced from the end of the deck.
    let lastCard = cardPlayed;
    this.setState({cardsPlayed2ndLastCard: this.state.cardsPlayedLastCard})
    this.setState({cardsPlayedLastCard: lastCard})
    // invoke the opponent turn method here, which starts with a setTimeout() delay so that things happen on human timescale 
    // rather than instantly.

  }

  // to create - 
  // method to check if the last two cards in the central pile array match (suits do not matter, only value)

  render() {
    return (
      <div className="App">
      This is Snap!
      <br></br>
      <button className="playSnap" onClick={this.handlePlaySnap.bind(this)} >Play Snap!</button>
      <br></br>
      <PlayerPosition 
        className="playerPositionMain" 
        playerDeck={this.state.playerDeck}
        playCard={this.playCard.bind(this)}
      />
      <br></br>
      <OpponentPosition 
        className="opponentPositionMain" 
        opponentDeck={this.state.opponentDeck} 
      />
      <CardsPlayed 
        className="cardsPlayedMain"
        cardsPlayed={this.state.cardsPlayed}
        cardsPlayedLastCard={this.state.cardsPlayedLastCard}
        cardsPlayed2ndLastCard={this.state.cardsPlayed2ndLastCard}
      />
      </div>
    );  
  }
}

export default App;
