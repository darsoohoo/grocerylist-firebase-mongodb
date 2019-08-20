import React, { Component } from 'react';
import firebase from 'firebase';
import Navbar from './Navbar'
import Landing from './Landing'
import LandingFb from './LandingFb'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Loader from './Loader';



var config = {
  apiKey: "AIzaSyBEV2R4DPhRjJv_HVMuagSrLe0zxpeINvA",
  authDomain: "grocery-list-c6e20.firebaseapp.com",
  databaseURL: "https://grocery-list-c6e20.firebaseio.com/",
  projectId: "grocery-list-c6e20",
  storageBucket: "grocery-list-c6e20.appspot.com",
  messagingSenderId: "1087615798399"
};
firebase.initializeApp(config);


class App extends Component {
  state = { 
    isSignedIn: false,
    isLoaded: false
   }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }

  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, isLoaded: true})
    })
  }

  signOut = () => {
      firebase.auth().signOut()
  }


  render() {
    const appStyle = {
      marginBottom: "100px"
    }
    const { isLoaded } = this.state;

    if(!isLoaded) {
      return <Loader />
    } else {
      return (
        <div style={appStyle} className="App">

          <Navbar
            signOut={this.signOut}
            isSignedIn={this.state.isSignedIn}
            firebase={firebase}
          />

            {this.state.isSignedIn ? (
              
              <div>
                <h4 className="Aligner table-header">Firebase</h4>
                < LandingFb firebase={firebase} />

                <h4 className="Aligner">MongoDB</h4>
                <Landing />
              
              </div>

            ) : (
              
            <StyledFirebaseAuth 
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
         
          )}
        </div>
      )
      };
    }
  }


export default App;
