import React from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import {observer} from 'mobx-react';

// Components
import NavBar from './components/NavBar';
import LogoutModal from './components/LogoutModal';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import Welcome from './components/Welcome';
import MessageList from './components/MessageList';
import Footer from './components/Footer';

function App(props) {
  const {authStore, channelStore} = props;

  return (
    <div className="content-wrapper">
      <NavBar authStore={authStore} channelStore={channelStore}/>
      {!authStore.isLoggedIn ? <Welcome /> :
        channelStore.loading ? "loading..." :
        <Switch>
          <Route exact path='/' render={() => <Redirect to={`/channels/${channelStore.channels[0].name}`}/>} />
          <Route path='/channels/:channelName' render={(props) => <MessageList {...props} channelStore={channelStore}/>} />
        </Switch>
      }
      <LogoutModal authStore={authStore}/>
      <LoginModal authStore={authStore}/>
      <SignupModal authStore={authStore}/>
      <Footer />
    </div>
  );
}

export default withRouter(observer(App));
