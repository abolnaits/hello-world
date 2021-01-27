import logo from './logo.svg';
import './App.css';
//Greet
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'


function App() {
  return (
    <div className="App">
        <Welcome name="Peter" heroName="Spiderman"></Welcome>
        <Greet name="Bruce" heroName="Batman">
          <p>Children</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Link</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"></Greet>
        <Message></Message>
    </div>
  );
}

export default App;
