import React from 'react';
import {Component} from 'react';

class ClassClick extends Component{
    //this.props 
    constructor(){
        super();
        this.state = {
            message : 'Hi!'
        }

        //Binding
        //this.clickHandler = this.clickHandler.bind(this);
    }

    /*
    clickHandler(){
        console.log('Click ==> ');
        console.log(this);
        this.setState({
            message:'Bye!'
        });
    }
    */

    clickHandler = () =>{
        this.setState({
            message:'Bye!'
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }    
    
    
}

export default ClassClick;