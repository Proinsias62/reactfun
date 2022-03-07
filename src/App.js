import './App.css';
import Greet from "./components/Greet"
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<Message />*/}
      {/*<Greet name="Proinsias" anything="other properties" >
        <p>Child Property</p>
        </Greet>*/}
      {/*<Greet name="Francis">
        <button>Action - A Child Property</button>
        </Greet>*/}
      <Greet name="Foley" anything="FOLEY"/>
      <Welcome name="Proinsias" anything="other properties"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
