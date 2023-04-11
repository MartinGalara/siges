import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import TicketForm from './components/TicketForm/TicketForm'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/ticket'>
        <TicketForm/>
      </Route>
    </div>
  );
}

export default App;
