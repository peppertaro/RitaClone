import React from 'react';
import './App.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProdType from './Components/Prod_type';
import AdSlider from './Components/AdSlider';
import NewProd from './Components/New_Prod';
import Recommend from './Components/Recommend';
import Category from './Components/Category';
import MailMagazine from './Components/MailMagazine';
import Corporate from './Components/Corp'
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
        <AdSlider />
        <NewProd />
        <Recommend />
        <Category />
        <MailMagazine />
        <Corporate />
      </div>
    );
  }
}
export default App;
