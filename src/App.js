import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      {/* <Header></Header>  */}
      <Routes> 
          {/* <Route  path="/home"                   element={<Home/>}                                        />  
          <Route  path="/login"                  element={<Login/>}                                       />  
          <Route  path="/book/:bedType"          element={<RequireAuth><Book/></RequireAuth>}             />   */}
          <Route  exact path="/"                 element={<Home/>}                                        />
      </Routes>
    </Router>
  );
}

export default App;
