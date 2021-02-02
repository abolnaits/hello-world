import React, {Component} from 'react'

class LifecycleB extends Component{

    constructor(props){
        super(props)
        console.log('B constructor()');
        this.state = {
            name : 'Andres'
        }
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('B getDerivedStateFromProps()')
        return null;
    }

    shouldComponentUpdate(){
        console.log('B shouldComponentUpdate()')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('B getSnapshotBeforeUpdate()')
        return null
    }

    componentDidUpdate(){
        console.log('B componentDidUpdate()')
    }
    
    componentDidMount(){
        console.log('B componentDidMount()')
    }
    render(){
        console.log('B render()')
        return(
            <div>
                <h1>LifecycleB</h1>
            </div>
        )
    }
}

export default LifecycleB