import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import TicketForm from './components/TicketForm/TicketForm'
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/ticket'>
        <TicketForm/>
      </Route>
      <Route exact path='/admin'>
        <AdminDashboard/>
      </Route>
    </div>
  );
}

export default App;
