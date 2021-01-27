import React, { Component} from 'react';

class Message extends Component{
    //States
    constructor(){
        //Call Component Constructor
        super();
        //Define the state obj
        this.state = {
            message : 'Welcome visitor'
        };
    }

    //Function to change the message
    register(){
        //Change the state 
        this.setState({
            message : "Thanks!"
        });
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.register()}>Link</button>
            </div>
        )    
    }
}

export default Message;