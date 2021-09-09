
import './App.css';
import Header from './components/Header'
import Workout from './components/Workout'
import Craft from './components/Craft'
import Featured from './components/Featured';
import Company from './components/Company';
import Grid from './components/Grid';
import Colaborate from './components/Colaborate';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <div className="black">
       <Header/>
       <Workout/>
      </div>
       <Craft/>
       <Featured/>
       <Company/>
       <Grid/>
       <Colaborate/>
       <Footer/>
    </div>
  );
}

export default App;
