import React from 'react';
import './App.css';
//import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
//import UsersContainer from './components/Users/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader';
import { compose } from 'redux';
import { AppBar } from '@material-ui/core';
import ProfileSettings from './components/Profile/ProfileSettings/ProfileSettings'


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

  componentDidMount() {

    this.props.initializeApp();

  }

  render() {

    if (!this.props.initialized) {
      return <> <Preloader /> </>
    }

    return (

      <div className='app-wrapper'>
        <div className='app-wrapper-header'>
          <HeaderContainer />
        </div>
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <React.Suspense fallback={<div>Loading...</div>}>
              <DialogsContainer />
            </React.Suspense>} />
          <Route path='/profile/:userId?'
            render={() => <React.Suspense fallback={<div>Loading...</div>}>
              <ProfileContainer />
            </React.Suspense>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <React.Suspense fallback={<div>Loading...</div>}>
            <UsersContainer />
          </React.Suspense>} />
          <Route path='/profileSettings' render={() => <ProfileSettings />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({

  initialized: state.app.initialized

})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

