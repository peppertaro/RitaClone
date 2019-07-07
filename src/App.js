import React from 'react';
import './App.scss';
import Header from './Components/Header.js';
class App extends React.Component {
  render() { 
      return ( 
        <div className="RootSection">
          <div className="adSection">
            <img className="Store-i" src="/logo.svg" alt="" />
            input add here
          </div>
          <Header />
          <div className="SearchBarSection">
            <div className="container">
              <div className="SearchBar-Box">
                <img className="Store-i" src="/logo.svg" alt="" />
                <div className="SearchBar">
                  <i className="fas fa-search"></i>
                  <input className="SearchInput" placeholder="SEARCH" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
