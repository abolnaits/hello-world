//React
import React from 'react';

//Functional Component
/*
function Greet(){
    return(
    <div>
        <h1>Hello Andres!</h1>
    </div>);
}
*/

const Greet = (props) => {
    const {name,heroName} = props;

    //console.log('Props ==>',props);
    return(
        <div>
            <h1>Hello {name}  </h1>
            <h2>Hero {heroName}!</h2>
            {props.children}
        </div>
    );
};

export default Greet;