import React from "react";
import { Button } from "./Button";

export class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
     
    componentDidMount() {
        this.Timer = setInterval(() => this.ClockRun(), 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.Timer);
    }
  
    ClockRun() {
      this.setState({
        date: new Date()
      });
    }

    handleClickStart = () =>{
        this.Timer = setInterval(() => this.ClockRun(), 1000);
    }
    handleClickStop = () =>{
        clearInterval(this.Timer);
    }
   
    render() {
      return (
        <div className="clock">
         <h2>Время: {this.state.date.toLocaleTimeString()}</h2>
         <Button text="Start" handleClick={this.handleClickStart}/>
         <Button text="Stop" handleClick={this.handleClickStop}/>
        </div>
      );
    }
  }
  
 
  
   
  
