import './App.css';
import Home from './Components/home';
import {AppContextProvider} from './State_Management/app_state'
function App() {
  return (
    <div className="App">
       <AppContextProvider>
        <Home />
      </AppContextProvider>
    </div>
  );
}

export default App;
