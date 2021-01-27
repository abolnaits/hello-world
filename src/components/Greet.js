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
    console.log('Props ==>',props);
    return(
        <div>
            <h1>Hello {props.name}  </h1>
            <h2>Hero {props.heroName}!</h2>
            {props.children}
        </div>
    );
};

export default Greet;