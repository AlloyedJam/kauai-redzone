import React from 'react';
import '../StyleSheets/Header.css'

class Header extends React.Component {
  render() {
    return(
      <div className="Header-Background">
        <div className="App">
          <h1 className="Header-Text">KauaiRedZone.org</h1>
        </div>
      </div>
    )
  }
}


export default Header;
