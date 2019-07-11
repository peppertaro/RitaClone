import React from "react";

const AdSlideBox = ({ AdSlideList }) => {
  const { ASindex, ASimg, ASdsc, ASlink } = AdSlideList;
  return (
    <div id={`AScard-${ASindex}`} className="AdSlide-img-element">
      <div className="AdSlide-img-box">
        <img className="AdSlide-img " src={ASimg} alt="" />
      </div>
      <div className="AdSlide-info">
        <h3 className="AdSlide-dsc">{ASdsc}</h3>
      </div>
      <a href={ASlink} className="AdSlide-link link-item">
        {ASlink}
      </a>
    </div>
  );
};
export default AdSlideBox;
