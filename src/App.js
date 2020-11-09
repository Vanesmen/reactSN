import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';


function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route exact path='/profile' render={() => <Profile />} />


        <Route exact path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
