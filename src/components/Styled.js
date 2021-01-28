import React from 'react'
//Css
import './style1.css'

function Styled(props){
    let className = props.primary ? 'primary' :'';
    //Inline css
    const heading = {
        fontSize:'60px',
        color : 'red'
    }
    return(
        <div>
            <h1 className={`${className} big`}>Uno</h1>
            <h1 style={heading}>Dos</h1>
        </div>
    )
}

export default Styled