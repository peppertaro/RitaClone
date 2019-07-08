import React from 'react';

const NewProdBox = ({ NewProdList }) => {
    const { NPindex, NPimg, NPtitle, NPprc, NPlink } = NewProdList;
        return ( 
            <div id={`NPcard-${NPindex}`} className="NP-element Slide-element">
                <div className="Slide-box">
                    <div className="Slide-img-box">
                        <img className="NP-img Slide-img" src={NPimg} alt="" />
                    </div>
                    <div className="NP-info Slide-info">
                        <h3 className="NP-title Slide-title">{NPtitle}</h3>
                        <p className="NP-prc Slide-prc">¥ {NPprc}</p>
                    </div>
                </div>
                <a href={NPlink} className="NP-link link-item">
                    {NPlink}
                </a>
            </div>
        );
    }

 
export default NewProdBox;