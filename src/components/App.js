import LoginPage from "../pages/LoginPage";
import VehiclesPage from "../pages/VehiclesPage";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import Home from "./Home/Home.js";
import VehiclesList from "./VehiclesList/VehiclesList.js"
import './LoginForm.js';
import './SignupForm.js';
import UserLoginPage from "../pages/UserLoginPage.js";
import Contact from "./Contact.js";
import VehicleDeatils from "./VehiclesList/VehicleDeatils.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
      <Routes>
        <Route index element={
        <RequireAuth>
          <VehiclesPage/>
        </RequireAuth>}/>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/vehicles" element={<VehiclesList/>} />
        <Route path="/home" element = {<LoginPage/>}/>
        <Route path="/adminlogin" element = {<LoginPage/>}/>
        <Route path="/login" element = {<UserLoginPage/>}/>
        <Route path="/signup" element = {<SignupPage/>}/>
        <Route path="/logout" element = {<LogoutPage/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/vehicle/:id" element={<VehicleDeatils/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;