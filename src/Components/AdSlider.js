import React from 'react';
import {AdSlideList} from "../ListData";
import AdSlideBox from "../Templates/Ad_Slide_Box";


class AdSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          adsdrList: AdSlideList,
          adsdr: AdSlideList[0]
        };
      }
    
      Nextbtn = () => {
        const nextCard = this.state.adsdr.ASindex + 1;
        this.state.adsdr.ASindex === this.state.adsdrList.length - 1
          ? this.setState({ onClick: null })
          : this.setState({ adsdr: this.state.adsdrList[nextCard] });
      };
    
      Prevbtn = () => {
        const prevCard = this.state.adsdr.ASindex - 1;
        this.state.adsdr.ASindex === 0
          ? this.setState({ onClick: null })
          : this.setState({ adsdr: this.state.adsdrList[prevCard] });
      };
    render() {  
        return ( 
            <div className="AdSlide-section">
                <div className="container">
                <h2 className="title">Your AdSlide places is here</h2>
                <div className="AdSlides">
                    <div className="AdSlide-box ">
                    <button className="slider-btn" onClick={() => this.Prevbtn()}>
                        <i className="fa fa-angle-left angle-i" />
                    </button>
                    <div
                        className={`AScards-slider active-slide-${
                        this.state.adsdr.ASindex
                        }`}
                    >
                        <div
                        className="card-slider-wrapper"
                        style={{
                            transform: `translateX(-${this.state.adsdr.ASindex *
                            (100 / this.state.adsdrList.length)}%)`
                        }}
                        >
                        {AdSlideList.map(AdSlideList => (
                            <AdSlideBox 
                                key={AdSlideList.ASkey} 
                                AdSlideList={AdSlideList} />
                        ))}
                        </div>
                    </div>
                    <button className="slider-btn" onClick={() => this.Nextbtn()}>
                        <i className="fa fa-angle-right angle-i" />
                    </button>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default AdSlider;