import React from "react";

const ProdTypeBox = ({ ProdTypeList }) => {
  const { PTindex, PTimg, PTname, PTtitle, PTlink } = ProdTypeList;
  return (
    <div id={`PTcard-${PTindex}`} className="PT-img-box">
      <div className="PT-info">
        <img className="PT-img" src={PTimg} alt=""/>
        <p className="PT-name">{PTname}</p>
      </div>
      <h3 className="PT-title">{PTtitle}</h3>
      <a href={PTlink} className="PT-link link-item">
        {PTlink}
      </a>
    </div>
  );
};
export default ProdTypeBox;