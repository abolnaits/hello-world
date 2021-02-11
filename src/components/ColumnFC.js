import React from 'react'

function ColumnFC(){
    const items = [{'id':1,'nombre':'Andres'},{'id':2,'nombre':'Leo'},]
    return(
        items.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                    <tr id={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    </tr>
                
                </React.Fragment>
            )
        })
    )
}

export default ColumnFC