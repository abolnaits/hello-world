import React from 'react';
import {Component} from 'react';

class Welcome extends Component{
    //this.props 
    render(){
        const {name,heroName} = this.props;
        return(
            <div>
                <h1>Welcome {name }</h1>
                <h2>Hero {heroName }</h2>
            </div>
        );
    }
}

export default Welcome;