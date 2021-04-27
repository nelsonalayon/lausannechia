import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
       
        <Navbar/>
        
      </header>
    </div>
  );
}

export default App;
