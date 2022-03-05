import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      {/* <Header></Header>  */}
      <Routes>             
          <Route  exact path="/"          element={<Home/>}                                        />
          <Route  path="/login"           element={<Login/>}                                       />
          <Route  path="/orders"          element={<RequireAuth><Orders/></RequireAuth>}           />  
          <Route  path="/appointment"     element={<Appointment/>}                                 />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
