import './App.css';
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './globalStyles'
import Carrousel from './components/carrousel/Carrousel'
import 'materialize-css/dist/css/materialize.min.css'
import Navigation from './components/navigation/Navigation'
import Advantages from './components/advantage/Advantage'
import Location from './components/location/location'
import Ideal from "./components/ideal/ideal"
import HowIsTheHouse from "./components/howIsTheHouse/HowIsTheHouse"
import DoBusiness from './components/doBusiness/DoBusiness'
import TheFooter from './components/footer/footer'



function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
       
        <Navbar/>
        <Navigation/>
        <br/> 
        <Carrousel/>
        <Advantages/>
        <Location/>
        <Ideal/>
        <HowIsTheHouse/>
        <DoBusiness/>
        <TheFooter/>
        
      </header>
    </div>
  );
}

export default App;
