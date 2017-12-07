import React, { Component } from 'react';
import PlayerPosition from './PlayerPosition';
import OpponentPosition from './OpponentPosition';
import CardsPlayed from './CardsPlayed';

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
          { suit: "Clubs", name: "Ace", value: 1 }, { suit: "Clubs", name: "Two", value: 2 }, { suit: "Clubs", name: "Three", value: 3 }, { suit: "Clubs", name: "Four", value: 4 }, { suit: "Clubs", name: "Five", value: 5 }, { suit: "Clubs", name: "Six", value: 6 }, { suit: "Clubs", name: "Seven", value: 7 }, { suit: "Clubs", name: "Eight", value: 8 }, { suit: "Clubs", name: "Nine", value: 9 }, { suit: "Clubs", name: "Ten", value: 10 }, { suit: "Clubs", name: "Jack", value: 11 }, { suit: "Clubs", name: "Queen", value: 12 }, { suit: "Clubs", name: "King", value: 13},
          { suit: "Diamonds", name: "Ace", value: 1}, { suit: "Diamonds", name: "Two", value: 2 }, { suit: "Diamonds", name: "Three", value: 3 }, { suit: "Diamonds", name: "Four", value: 4 }, { suit: "Diamonds", name: "Five", value: 5 }, { suit: "Diamonds", name: "Six", value: 6 }, { suit: "Diamonds", name: "Seven", value: 7 }, { suit: "Diamonds", name: "Eight", value: 8 }, { suit: "Diamonds", name: "Nine", value: 9 }, { suit: "Diamonds", name: "Ten", value: 10 }, { suit: "Diamonds", name: "Jack", value: 11 }, { suit: "Diamonds", name: "Queen", value: 12 }, { suit: "Diamonds", name: "King", value: 13 },
          { suit: "Spades", name: "Ace", value: 1 }, { suit: "Spades", name: "Two", value: 2 }, { suit: "Spades", name: "Three", value: 3 }, { suit: "Spades", name: "Four", value: 4 }, { suit: "Spades", name: "Five", value: 5 }, { suit: "Spades", name: "Six", value: 6 }, { suit: "Spades", name: "Seven", value: 7 }, { suit: "Spades", name: "Eight", value: 8 }, { suit: "Spades", name: "Nine", value: 9 }, { suit: "Spades", name: "Ten", value: 10 }, { suit: "Spades", name: "Jack", value: 11 }, { suit: "Spades", name: "Queen", value: 12 }, { suit: "Spades", name: "King", value: 13 },
          { suit: "Hearts", name: "Ace", value: 1 }, { suit: "Hearts", name: "Two", value: 2 }, { suit: "Hearts", name: "Three", value: 3 }, { suit: "Hearts", name: "Four", value: 4 }, { suit: "Hearts", name: "Five", value: 5 }, { suit: "Hearts", name: "Six", value: 6 }, { suit: "Hearts", name: "Seven", value: 7}, { suit: "Hearts", name: "Eight", value: 8 }, { suit: "Hearts", name: "Nine", value: 9 }, { suit: "Hearts", name: "Ten", value: 10 }, { suit: "Hearts", name: "Jack", value: 11 }, { suit: "Hearts", name: "Queen", value: 12 }, { suit: "Hearts", name: "King", value: 13 }
        ],
        opponentDeck: [
          { suit: "Clubs", name: "Ace", value: 1 }, { suit: "Clubs", name: "Two", value: 2 }, { suit: "Clubs", name: "Three", value: 3 }, { suit: "Clubs", name: "Four", value: 4 }, { suit: "Clubs", name: "Five", value: 5 }, { suit: "Clubs", name: "Six", value: 6 }, { suit: "Clubs", name: "Seven", value: 7 }, { suit: "Clubs", name: "Eight", value: 8 }, { suit: "Clubs", name: "Nine", value: 9 }, { suit: "Clubs", name: "Ten", value: 10 }, { suit: "Clubs", name: "Jack", value: 11 }, { suit: "Clubs", name: "Queen", value: 12 }, { suit: "Clubs", name: "King", value: 13},
          { suit: "Diamonds", name: "Ace", value: 1}, { suit: "Diamonds", name: "Two", value: 2 }, { suit: "Diamonds", name: "Three", value: 3 }, { suit: "Diamonds", name: "Four", value: 4 }, { suit: "Diamonds", name: "Five", value: 5 }, { suit: "Diamonds", name: "Six", value: 6 }, { suit: "Diamonds", name: "Seven", value: 7 }, { suit: "Diamonds", name: "Eight", value: 8 }, { suit: "Diamonds", name: "Nine", value: 9 }, { suit: "Diamonds", name: "Ten", value: 10 }, { suit: "Diamonds", name: "Jack", value: 11 }, { suit: "Diamonds", name: "Queen", value: 12 }, { suit: "Diamonds", name: "King", value: 13 },
          { suit: "Spades", name: "Ace", value: 1 }, { suit: "Spades", name: "Two", value: 2 }, { suit: "Spades", name: "Three", value: 3 }, { suit: "Spades", name: "Four", value: 4 }, { suit: "Spades", name: "Five", value: 5 }, { suit: "Spades", name: "Six", value: 6 }, { suit: "Spades", name: "Seven", value: 7 }, { suit: "Spades", name: "Eight", value: 8 }, { suit: "Spades", name: "Nine", value: 9 }, { suit: "Spades", name: "Ten", value: 10 }, { suit: "Spades", name: "Jack", value: 11 }, { suit: "Spades", name: "Queen", value: 12 }, { suit: "Spades", name: "King", value: 13 },
          { suit: "Hearts", name: "Ace", value: 1 }, { suit: "Hearts", name: "Two", value: 2 }, { suit: "Hearts", name: "Three", value: 3 }, { suit: "Hearts", name: "Four", value: 4 }, { suit: "Hearts", name: "Five", value: 5 }, { suit: "Hearts", name: "Six", value: 6 }, { suit: "Hearts", name: "Seven", value: 7}, { suit: "Hearts", name: "Eight", value: 8 }, { suit: "Hearts", name: "Nine", value: 9 }, { suit: "Hearts", name: "Ten", value: 10 }, { suit: "Hearts", name: "Jack", value: 11 }, { suit: "Hearts", name: "Queen", value: 12 }, { suit: "Hearts", name: "King", value: 13 }
        ],
        cardsPlayed: []
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

  handlePlaySnap(event) {
      console.log("handlePlaySnap was clicked")
      // shuffle player deck
      let playerDeckToShuffle = this.state.playerDeck;
      this.shuffleDeck(playerDeckToShuffle);
      this.setState({ playerDeck: playerDeckToShuffle })
      // shuffle opponent deck
      let opponentDeckToShuffle = this.state.opponentDeck;
      this.shuffleDeck(opponentDeckToShuffle);
      this.setState({ opponentDeck: opponentDeckToShuffle })
  }

  playCard(event) {
    console.log("playCard was pressed")
    let deck = this.state.playerDeck;
    let cardPlayed = deck.splice(-1, 1);
    let oldCardsPlayed = this.state.cardsPlayed;
    oldCardsPlayed.push(cardPlayed);
    this.setState({cardsPlayed: oldCardsPlayed});
    this.setState({playerDeck: deck});
  }

  // to create - 
  // method to check if the last two cards in the central pile array match suits do not matter, only value.

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
      />
      </div>
    );  
  }
}

export default App;
