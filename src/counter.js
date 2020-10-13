import React from "react";
import "./index.css";


class Counter extends React.Component{
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.handleIncr = this.handleIncr.bind(this);
        this.handleDecr = this.handleDecr.bind(this);
      }
    
    handleIncr(){
        this.setState((prevState)=>{
            return{
            counter : prevState.counter + 1
            }
        })
    }
    handleDecr(){
        this.setState((prevState,props)=>{
            return{
            counter : prevState.counter - 1
        }
    });
    };
    reset = ()=> {
        this.setState({
            counter: 0
        })
    }

    render(){
        return(
            <div className="counterDiv">
                <h1 className="counter">Count: {this.state.counter}</h1>
                <button className="incr" onClick={this.handleIncr}>+</button>
                <button className="incr" onClick={this.handleDecr}>-</button>
                <br/>
                <button className="reset" onClick={this.reset}>RESET</button>
            </div>
        );
    }
}


export default Counter