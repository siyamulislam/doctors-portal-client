import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';


function App() {
  return (
    <Router>
      {/* <Header></Header>  */}
      <Routes> 
          {/* <Route  path="/home"                   element={<Home/>}                                        />  
          <Route  path="/login"                  element={<Login/>}                                       />  
          <Route  path="/book/:bedType"          element={<RequireAuth><Book/></RequireAuth>}             />   */}
          <Route  exact path="/"                      element={<Home/>}                                        />
          <Route  path="/appointment"                 element={<Appointment/>}                                        />
      </Routes>
    </Router>
  );
}

export default App;
