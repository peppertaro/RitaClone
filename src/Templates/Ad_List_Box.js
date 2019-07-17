import React from "react";

const AdListBox = ({ AdSlideList }) => {
  const { ASindex, ASimg, ASlink } = AdSlideList;
  return (
    <div id={`ASList-${ASindex}`} className="AdList-img-element">
      <div className="AdList-img-box">
        <img className="AdList-img " src={ASimg} alt="" />
        <a href={ASlink} className="AdList-link link-item">
          {ASlink}
        </a>
      </div>      
    </div>
  );
};
export default AdListBox;
