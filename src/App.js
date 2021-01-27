import logo from './logo.svg';
import './App.css';
//Greet
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
        {/*
        
        <Greet name="Bruce" heroName="Batman">
          <p>Children</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Link</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"></Greet>
        <Message></Message>
        
        <Welcome name="Peter" heroName="Spiderman"></Welcome>
        <Greet name="Bruce" heroName="Batman">
          <p>Children</p>
        </Greet>
        <Counter></Counter>
        <FunctionClick></FunctionClick>
        */}
        <ClassClick></ClassClick>
    </div>
  );
}

export default App;
