import React,{Component} from 'react';

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <div>
                <span>Counter: {this.state.count } </span>
            </div>
        );
    }
}

export default Counter;