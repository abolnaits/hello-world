import React,{Component} from 'react';

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment(){
        //this.state.count += 1;
        /*
        this.setState({
            count : this.state.count + 1
        },()=>{
            console.log('Callback Count ==>',this.state.count );
        });
        */
        this.setState((prev)=>{
            console.log('Prev state ==>' , prev);
            //Must return an obj
            return {count:prev.count + 1}
            
        });
        
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        
    }
    render(){
        return(
            <div>
                <span>Counter: {this.state.count } </span>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;