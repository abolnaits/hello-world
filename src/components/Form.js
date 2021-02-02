
import React,{Component} from 'react'

class Form extends Component{

    constructor(){
        super()
        this.state = {
            name:'',
            lang:'c'
        }
        //Handlers
        this.changeName = this.nameHandler.bind(this)
    }

    selectHandler = (event) =>{
        this.setState({
            lang: event.target.value
        })
    }
    nameHandler(event){
        console.log(this);
        console.log(event);
        this.setState({
            name : event.target.value
        })
    }

    formHandler = (event) =>{
        
        //Retrive the data
        console.log('Enviar', this.state);
        event.preventDefault();
    }
    render(){
        
        return(
            <div>
                <h1>Form</h1>
                <h2>User name: {this.state.name}</h2>
                <h2>Languague: {this.state.lang}</h2>
                
                <form onSubmit={this.formHandler}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.changeName}></input>
                    <label>Language:</label>
                    <select value={this.state.lang} onChange={this.selectHandler}>
                        <option value="php">Php</option>
                        <option value="c">C</option>
                        <option value="java">java</option>
                        
                    </select>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;