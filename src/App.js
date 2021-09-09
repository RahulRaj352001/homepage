
import './App.css';
import Header from './components/Header'
import Workout from './components/Workout'
import Craft from './components/Craft'
import Featured from './components/Featured';
function App() {
  return (
    <div className="App">
      <div className="black">
       <Header/>
       <Workout/>
      </div>
       <Craft/>
       <Featured/>
    </div>
  );
}

export default App;
