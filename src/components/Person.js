import React from 'react'

function Person({person,pk}){
    return(
        <div>
            <h1 id={pk} >{person.name} = {person.heroName} </h1>
        </div>
    )
}

export default Person;