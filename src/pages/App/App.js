import React, { Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state ={
      user: userService.getUser()
    };
    }

    handleLogout = () => {
      userService.logout();
      this.setState({ user: null });
    }
  
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }


    render() {
     return (
    <div className="container">
     <Switch>
     <Route exact path='/' render={() =>
     <div className="main">
      <Main 
      handleLogout={this.handleLogout}
      user={this.state.user}
      />
      </div>
     }/>
      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
     </Switch>
    </div>
  );
}
}


export default App;
