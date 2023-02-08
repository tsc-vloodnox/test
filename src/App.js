import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/authentication/PrivateRoute";

import Library from "./pages/Library";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import Home from "./pages/Home";
import About from "./pages/About";
// import LeafDetails from "./components/Posts/LeafDetails";

import Profile from "./pages/Profile";
import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import ForgotPassword from "./components/authentication/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile";
//services
import AssisteMyThesisDefence from "./components/services/AssistMyThesisDefence";
import MeTree from "./components/services/MeTree";
import PushMyProject from "./components/services/PushMyProject";
import LeafDetails from "./components/Posts/LeafDetails";

export default function App() {
  return (
    <Router>
      <Navbar />
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          {/* <PrivateRoute path="/:id" component={LeafDetails} /> */}
          <PrivateRoute exact path="/library" component={Library} />
          {/* <PrivateRoute exact path="/library/my-file" component={MyFiles} /> */}
          {/* <PrivateRoute exact path="/library/folder/:folderId" component={Library} /> */}

          {/* Profile */}
          <Route exact path="/user" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <Route exact path="/services" component={Services} />
          <Route
            path="/services/assist-my-thesis-defense"
            component={AssisteMyThesisDefence}
          />
          <Route path="/services/metree" component={MeTree} />
          <Route path="/services/push-my-project" component={PushMyProject} />
          <Route path="/pages" component={Pages} />
          <Route path="/about" component={About} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
