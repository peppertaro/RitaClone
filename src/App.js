import React from 'react';
import './App.scss';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import AdSlider from './Components/AdSlider';
import NewProd from './Components/New_Prod';
import Recommend from './Components/Recommend';
import Category from './Components/Category';
import MailMagazine from './Components/MailMagazine';
import CorpInfo from './Components/CorpInfo';
import CorpCustomer from './Components/CorpCustomer';
import Footer from './Components/Footer';
class App extends React.Component {
  render() { 
    return ( 
      <div className="RootSection">
        <div className="adSection">
          <div className="container">
            <div className="ad-box">
              <img className="ad-top" src="./img/city-adT-1.jpg" alt="" />
              <a href="#thisisAd" className="link-item" alt="">#thisisAd</a>
            </div>
          </div>
        </div>
        <Header />
        <SearchBar />
        <AdSlider />
        <NewProd />
        <Recommend />
        <Category />
        <MailMagazine />
        <CorpInfo />
        <CorpCustomer />
        <Footer />
      </div>
    );
  }
}
export default App;
