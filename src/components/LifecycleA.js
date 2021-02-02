import React, {Component} from 'react'

import LifecycleB from './LifecycleB'
class LifecycleA extends Component{

    constructor(props){
        super(props)
        console.log('A constructor()');
        this.state = {
            name : 'Andres'
        }
    }
    
   
    componentDidMount(){
        console.log('A componentDidMount()')
    }

    //Update methods

    static getDerivedStateFromProps(props,state){
        console.log('A getDerivedStateFromProps()')
        return null;
    }

    shouldComponentUpdate(){
        console.log('A shouldComponentUpdate()')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('A getSnapshotBeforeUpdate()')
        return null
    }

    componentDidUpdate(){
        console.log('A componentDidUpdate()')
    }

    changeState = () =>{
        this.setState({
            name:'Leo'
        })
    }
    render(){
        console.log('A render()')
        return(
            <div>
                <h1>LifecycleA</h1>
                <button onClick={this.changeState}>Click</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA