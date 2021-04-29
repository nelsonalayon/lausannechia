import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './globalStyles'
import Carrousel from './components/carrousel/Carrousel'
import 'materialize-css/dist/css/materialize.min.css'



function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
       
        <Navbar/>
        <Carrousel/>
        
      </header>
    </div>
  );
}

export default App;
