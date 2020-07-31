import React , {Component} from "react";


class HelloComp extends Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }
    increment = () => {
        console.log("btn clicked");
        this.setState({counter: this.state.counter + 1})
    }
    render(){
        return (
            <div className="justify-content-center">
            <button onClick = {this.increment} className="btn btn-primary">Increment</button>
        <h1>{this.state.counter}</h1>
            </div>
        )
    }
}


export default HelloComp;