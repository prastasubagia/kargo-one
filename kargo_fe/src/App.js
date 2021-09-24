// import { Provider } from "react-redux";
// import store from "redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

import Home from "./pages/home";
import Trucks from "./pages/trucks";
import Drivers from "./pages/drivers";
import { NotFound } from "./components/Not-Found";
import AddForm from "./pages/drivers/components/AddForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* <Route path="/truck">
            {role === "transporter" ? <Trucks /> : <Login />}
          </Route> */}
          <Route path="/truck" component={Trucks} />
          <Route path="/driver" exact component={Drivers} />
          <Route path="/driver/add" exact component={AddForm} />
          <Route path="/driver/update/:id" component={AddForm} />
          <Route path="/employee">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
