import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/Navbar';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <NavBar />
            <Route path="/profile" component={Profile} />
            <Route path="/editprofile" component={EditProfile} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
