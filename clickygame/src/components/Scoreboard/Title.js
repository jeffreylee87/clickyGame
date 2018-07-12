import React from "react";
import "./Title.css";


const Title = props => 
<div className="container-fluid">
<header>
  <h1>Scoreboard</h1>
  <div>
    <div className="score-you">
      <div className="score" id="your-score">{props.score}</div>
      You
    </div>
    <div className="score-bot">
      <div className="score" id="bot-score">{props.allTime}</div>
      All-Time
    </div>
  </div>
</header>
<h1 className="gameMessage">{props.message}</h1>
</div>


export default Title;
