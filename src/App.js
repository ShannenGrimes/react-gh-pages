import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./match.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage =
  "Click on a hockey player to gain points! Click on the same one twice and you lose!";

class App extends Component {
  // This will look for a match in the match.json file
  state = {
    matches,
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    // Take the array
    const matches = this.state.matches;
    // Search for match
    const clickedMatch = matches.filter(match => match.id === id);
    // This sets logic for whether or not the user already guessed
    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses: " + correctGuesses);
      console.log("Best Score: " + bestScore);

      correctGuesses = 0;
      clickMessage = "Sorry! You already chose this one.";

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });
    } else if (correctGuesses < 11) {
      // Set its value to true
      clickedMatch[0].clicked = true;

      // Add counter
      correctGuesses++;
      clickMessage = "Congrats! You haven't chosen this before! Choose another";

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      //This will render a random number and change the sort order
      matches.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {
      // Default to true
      clickedMatch[0].clicked = true;

      // Reset the counter
      correctGuesses = 0;

      // Winning message to user
      clickMessage = "You are fabulous! Play Again!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }
      //This will render a random number and change the sort order
      matches.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      // Set this.state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };
  render() {
    return (
      <Wrapper>
        <Title>NHL Hocky Match-up</Title>

        <h3 className="scoreSummary">{this.state.clickMessage}</h3>

        <h3 className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses}
          <br />
          Best Score: {this.state.bestScore}
        </h3>
        <div className="container">
          <div className="row">
            {this.state.matches.map(match => (
              <MatchCard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default App;
