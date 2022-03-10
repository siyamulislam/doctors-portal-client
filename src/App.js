import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Appointment from './components/Appointment/Appointment';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import DashBoard from './components/DashBoard/DashBoard';
import AddDoctor from './components/DashBoard/AddDoctor/AddDoctor';

export const UserContext = createContext();

function App() {
  const recentUser = sessionStorage.getItem('loggedInUser')
  const parseUser = JSON.parse(recentUser)
  const [loggedInUser, setLoggedInUser] = useState(parseUser || { isSignedIn: false });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<RequireAuth><DashBoard/></RequireAuth>} />
          <Route path="/dashboard/add-doctor" element={<RequireAuth><AddDoctor/></RequireAuth>} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
