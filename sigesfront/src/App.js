import './App.css';
import { Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import TicketForm from './components/TicketForm/TicketForm'
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import OpTickets from './components/OpTickets/OpTickets';
import Computers from './components/Computers/Computers';
import ComputerDetail from './components/ComputerDetail/ComputerDetail';
import CreateAccount from './components/CreateAccount/CreateAccount';
import NewUser from './components/NewUser/NewUser';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage/>
      </Route>
      <Route exact path='/createaccount'>
        <CreateAccount/>
      </Route>
      <Route exact path='/newuser'>
        <NewUser/>
      </Route>
      <Route exact path='/ticket'>
        <TicketForm/>
      </Route>
      <Route exact path='/admin'>
        <AdminDashboard/>
      </Route>
      <Route exact path='/admin/optickets'>
        <OpTickets/>
      </Route>
      <Route exact path='/admin/computers/:id'>
        <ComputerDetail/>
      </Route>
      <Route exact path='/admin/computers'>
        <Computers/>
      </Route>
      
    </div>
  );
}

export default App;
