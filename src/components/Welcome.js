import React from 'react';
import {Component} from 'react';

class Welcome extends Component{
    //this.props 
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name }</h1>
                <h2>Hero {this.props.heroName }</h2>
            </div>
        );
    }
}

export default Welcome;