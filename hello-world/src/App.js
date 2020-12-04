// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
// import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>
      <Greet name="Wayne" heroName="Batman">
        These are children
      </Greet>
      <Greet name="Kent" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonderwoman"/>

      <Welcome name="Wayne"/>
      <Welcome name="Kent"/>
      <Welcome name="Diana"/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;
