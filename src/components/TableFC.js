import React from 'react'

import ColumnFC from './ColumnFC'

function TableFC(){
    return(
        <table>
           <tbody>
            <ColumnFC></ColumnFC>
           </tbody>
        </table>
    )
}

export default TableFC