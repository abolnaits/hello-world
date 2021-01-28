import React,{Component} from 'react'
//Child Component
import ChildComponent from './ChildComponent'


class ParentComponent extends Component{

    constructor(){
        super()
        this.state ={
            parentName: 'Parent C',
            isLoggedIn : false    
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
            this.state.isLoggedIn ? 
            <div>Welcome User</div> : 
            <div>Welcome Guest</div>
        )
        /*
        let message ;
        if(this.state.isLoggedIn){
            message = <h1>Welcome User</h1>
        }else{
            message = <h1>Welcome Guest</h1>
        }
        return <div>{message}</div>
        */
        
        /*
        if(this.state.isLoggedIn){
            return <h1>Welcome user</h1>
        }else{
            return <h1>Welcome guest</h1>
        }
        */
        /*
        return(
            <div>
                <h1>Parent</h1>
                <ChildComponent greetHandler={this.greet}></ChildComponent>    
            </div>
        )
        */
    }
}

export default ParentComponent;