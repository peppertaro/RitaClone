import React from "react";

const CateTypeBox = ({ CategoryList}) => {
  const { CTindex, PTimg, CTname, CTtitle, CTlink,CTimg } = CategoryList;
  return (
    <div className="CateType">
        <div id={`CTcard-${CTindex}`} className="CT-img-box Slide-img-box">
            <div className="CT-infos">
                <div className="CT-info">
                    <img className="PT-img" src={PTimg} alt=""/>
                    <p className="CT-name">{CTname}</p>
                </div>
                <h3 className="CT-title">{CTtitle}</h3>
            </div>
            <img className="CT-img" src={CTimg} alt="" />
            <a href={CTlink} className="CT-link link-item">
                {CTlink}
            </a>
        </div>
        
    </div>
  );
};
export default CateTypeBox;