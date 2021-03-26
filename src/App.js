import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './componets/Header/HeaderContainer';
import Navbar from './componets/Navbar/Navbar';
import UsersConntainer from './componets/Users/UsersContainer';
import Login from "./componets/Login/Login";
import { connect } from 'react-redux';
import { getAuthUserData } from "./redux/auth-reducer";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import Preloader from './componets/common/Preloader/Preloader';
import store from "./redux/redux-store";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import withSuspence from './hoc/withSuspence';

const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="content">
            <Route path='/dialogs'
              render={withSuspence(DialogsContainer)} />

            <Route path='/profile/:userId?'
              render={withSuspence(ProfileContainer)} />


            <Route exact path='/users'
              render={() => <UsersConntainer />} />

            <Route exact path='/login'
              render={() => <Login />} />
          </div>
        </div>
      )
    }
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { getAuthUserData, initializeApp }),
)(App);

let MainApp = (props) => {


  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp