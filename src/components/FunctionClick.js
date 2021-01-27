import React from 'react';
import {Component} from 'react';

function FunctionClick(){
    //this.props 

    function clickHandler(){
        console.log('Click ==> ');
    }
    
        
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
    
}

export default FunctionClick;