import React from 'react';

const RecommendBox = ({ RecommendList }) => {
    const { RDindex, RDimg, RDtitle, RDprc, RDlink } = RecommendList;
        return ( 
            <div id={`RDcard-${RDindex}`} className="RD-element Slide-element">
                <div className="Slide-box">
                    <div className="Slide-img-box">
                        <img className="RD-img Slide-img" src={RDimg} alt="" />
                    </div>
                    <div className="RD-info Slide-info">
                        <h3 className="RD-title Slide-title">{RDtitle}</h3>
                        <p className="RD-prc Slide-prc">¥ {RDprc}</p>
                    </div>
                </div>
                <a href={RDlink} className="RD-link link-item">
                    {RDlink}
                </a>
            </div>
        );
    }

 
export default RecommendBox;