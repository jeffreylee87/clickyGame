import React, { Component } from "react";
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    count:0,
    allTime: 0,
    message: "Click an item to start! Or don't but you'd risk being lame!",
    checked: []
  };

  gameLogic = id => {
    //checks if item hasn't been clicked
    if(!this.state.checked.includes(id)&&this.state.checked.length<20){
      //pushes id into array
      this.state.checked.push(id)
      
      this.setState({ 
        count: this.state.count +1,
        message: "You guessed correctly, you lucky guy you!"
      });
      //checks to see if we need to increment the all time score
      if(this.state.count >= this.state.allTime ){
        this.setState({allTime: this.state.allTime + 1})
      };

      this.state.characters.sort((a, b) => {
				return 0.5 - Math.random();
			});
      //if you won ------ do this
    } else if (this.state.count === 20){
      this.setState({
        message: "You Won, your parents don't hate you anymore. Click again to restart!",
        count: 0,
        checked: []
      })
    } else {
      this.setState({
        message: "You lost, your parents disown you and some random guy just kicked your dog! Click again to regain there love!!!!",
        count:0,
        checked:[]
      })
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Scoreboard 
      message={this.state.message}
      score={this.state.count}
      allTime={this.state.allTime}
      />
      <Wrapper>
        {this.state.characters.map(i => (
          <GameCard
            id={i.id}
            key={i.id}
            image={i.image}
            gameLogic={this.gameLogic}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
