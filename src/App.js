import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import { createContext, useState } from "react";
import AddRentHouse from "./components/Dashboard/AddRentHouse/AddRentHouse";
import BookingList from "./components/Dashboard/BookingList/BookingList";
import MyRent from "./components/Dashboard/MyRent/MyRent";
import Home from "./components/Home/Home/Home";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addRentHouse">
            <AddRentHouse />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/myRent">
            <MyRent />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
