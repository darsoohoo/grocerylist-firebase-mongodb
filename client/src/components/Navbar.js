import React, { Component } from 'react'
import { Link } from '@material-ui/core';

export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
        
        }
    }


    render() {
        return (
   
              <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title">Grocery List</span>
                  <div className="mdl-layout-spacer"></div>
                  <nav className="mdl-navigation mdl-layout--large-screen-only">

                    {this.props.isSignedIn ? (
                         <a className="mdl-navigation__link" onClick={this.props.signOut} >Sign Out</a>

                    ) : (
                      <Link>Create an Account</Link>
                    )}
                   
                 

                  </nav>
                </div>
              </header>


        
        )
    }
}
