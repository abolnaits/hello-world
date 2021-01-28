import React,{Component} from 'react'
//Child Component
import ChildComponent from './ChildComponent'


class ParentComponent extends Component{

    constructor(){
        super()
        this.state ={
            parentName: 'Parent C',
            isLoggedIn : false,
            names : ['Bruce','Clrak','Diana']    
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
                {/*
                <h1>{this.state.names[0]}</h1>
                <h1>{this.state.names[1]}</h1>
                <h1>{this.state.names[2]}</h1>
                */}

                {
                    this.state.names.map((name)=>{
                        return <h1>{name}</h1>
                    })
                }
            </div>
        )
        /*
        return(
            
            this.state.isLoggedIn ? 
            <div>Welcome User</div> : 
            <div>Welcome Guest</div>
            
           
        )*/
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