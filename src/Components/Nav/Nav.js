import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
      <h1 className='nav-title'>lifesheet</h1>
      <button className='nav-button'>Register</button>
      <button className='nav-button'>Sign In</button>
      </nav>
    )
  }
}

export default Nav;