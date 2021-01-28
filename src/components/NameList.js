import React from 'react'
import Person from './Person'

function NameList(){
    const personList = [
        {
            name:'Clark',
            heroName:'Superman'
        },
        {
            name:'Bruce',
            heroName:'Hulk'
        }
    ]
    const newList = personList.map((p,index)=>{
        return <Person person={p} key={index} pk={index}></Person>
    })
    return(
        <div>
            {newList}
        </div>
    )
}

export default NameList;