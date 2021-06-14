import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import RegisterComplain from './Pages/RegisterComplain';
import ViewCrimeReport from './Pages/ViewCrimeReport';
import JailBase from './Pages/JailBase';
import IndiaCrimeScore from './Pages/IndiaCrimeScore';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/"><LandingPage /></Route>
        <Route  path="/sign-up"><SignUp /></Route>
        <Route  path="/sign-in"><SignIn /></Route>
        <Route  path="/home"><Home /></Route>
        <Route  path="/register-complain"><RegisterComplain /></Route>
        <Route  path="/view-crime-report"><ViewCrimeReport /></Route>
        <Route  path="/jail-base-report"><JailBase /></Route>
        <Route  path="/india-crime-score"><IndiaCrimeScore /></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
