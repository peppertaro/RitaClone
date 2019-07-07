import React from 'react';
import './App.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProdType from './Components/Prod_type'
class App extends React.Component {
  render() { 
    return ( 
      <div className="RootSection">
        <div className="adSection">
          <img className="Store-i" src="/logo.svg" alt="" />
          input add here
        </div>
        <Header />
        <SearchBar />
        <ProdType />
      </div>
    );
  }
}
export default App;
