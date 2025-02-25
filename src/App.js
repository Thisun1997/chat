import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as  chatActions from './store/actions/chatActions';
import * as  AuthActions from './store/actions/authActions';
import Auth from './components/pages/Auth';
import Messanger from './components/pages/Messenger';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// require('bootstrap')

class  App extends React.Component {

  componentDidMount(){
    this.props.setupSocket(this.props.token, this.props.user.id);
  }


  render(){
    return (
      <div className="App">
        <button onClick={e => {
          this.props.logout();
        }}>Logout</button>
        <BrowserRouter>
          <Switch>
            <Route
              path = "/login"
              render = {props =>{
                if(this.props.token){
                  return(
                    <Redirect to="/" />
                  )
                }else{
                  return(
                    <Auth />
                  )
                }
              }} 
              />

            <Route
              path = "/signup"
              render = {props =>{
                if(this.props.token){
                  return(
                    <Redirect to="/" />
                  )
                }else{
                  return(
                    <Auth />
                  )
                }
              }} 
              />

              <Route
              path = "/:threadId"
              render={ props => {
                if(!this.props.token){
                  return(
                    <Redirect to = "/login" />
                  )
                }else{
                  return(
                    <Messanger />
                  )
                }
                
              }} />

  
            <Route
              path = "/"
              render={ props => {
                if(!this.props.token){
                  return(
                    <Redirect to = "/login" />
                  )
                }else{
                  return(
                    <Messanger />
                  )
                }
                
              }} />
  
  
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}


const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})

const mapDispatchToProps = dispatch => ({
      setupSocket: (token, userId) => {
        dispatch(chatActions.setupSocket(token, userId));
      },
      logout: () => {
        dispatch(AuthActions.logout());
      }
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
