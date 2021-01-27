import React from 'react';
import {Component} from 'react';

class ClassClick extends Component{
    //this.props 

    clickHandler(){
        console.log('Click ==> ');
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }    
    
    
}

export default ClassClick;