import React,{Component} from 'react'
//Child Component
import ChildComponent from './ChildComponent'


class ParentComponent extends Component{

    constructor(){
        super()
        this.state ={
            parentName: 'Parent C'    
        }
        //Binding
        this.greet = this.greetParent.bind(this)
    }



    //Parent methods
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <div>
                <h1>Parent</h1>
                <ChildComponent greetHandler={this.greet}></ChildComponent>    
            </div>
        )
    }
}

export default ParentComponent;