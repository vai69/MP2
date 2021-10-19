import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Homepage/Homepage";
import CustomerSignin from './Customer/CustomerSignin';
import Contact from './Common/Contact'
import RegisterPage from './Common/RegisterPage';
import CustomerDashboard from './Customer/CustomerDashBoard';
import TransporterDashboard from './Transporter/TransporterDashboard';
import TransporterSignin from './Transporter/TransporterSignin';
import TruckBooking from './Customer/TruckBooking';
import RegisterTruck from './Truck/RegisterTruck';
import CustomerSignup from './Customer/CustomerSignup';
function App() {
  return (
    <div className="App">
      <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/Contact" render={props => <Contact {...props} />} />
          <Route path="/Customersignin" render={props => <CustomerSignin {...props} />} />
          <Route path="/transSignin" render={props => <TransporterSignin {...props} />} />
          <Route path="/register" render={props => <RegisterPage {...props} />} />
          <Route path="/customerSignup" render={props =><CustomerSignup {...props}/>}/>
          <Route path="/customerDash" render={props => <CustomerDashboard {...props} />} />
          <Route path="/transDash" render={props => <TransporterDashboard {...props} />} />
          <Route path="/registerTruck" render={props => <RegisterTruck {...props} />} />
          <Route path="/customer/truckBook" render={props => <TruckBooking {...props} />} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
